import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import uploadIcon from "../../../assets/images/upload.png";
import {
  useUpdateBookItemMutation,
  useGetCategoriesQuery,
  useGetBooksByIdQuery, // Add this hook
} from "../../../redux/apiSlice";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";
import Spinner from "../../Loader/Spinner";

const EditProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: productIdFromParams } = useParams(); // Get ID from URL params if using /edit-product/:id

  // Get product from location state OR fetch by ID
  const productFromState = location.state?.product;
  const productId = productIdFromParams || productFromState?.id;

  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [updateBookItem, { isLoading: isUpdatingProduct }] =
    useUpdateBookItemMutation();
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  // Fetch product by ID if not provided in state
  const {
    data: fetchedProduct,
    isLoading: productLoading,
    error: productError,
    refetch: refetchProduct,
  } = useGetBooksByIdQuery(productId, {
    skip: !productId || !!productFromState, // Skip if we already have product from state
  });

  // Use product from state OR fetched product
  const product = productFromState || fetchedProduct;

  // Initial state based on API structure
  const initialState = {
    title: "",
    price: "",
    item_type: "book",
    description: "",
    store_item_category_id: "",
  };

  const [productData, setProductData] = useState(initialState);

  // Populate form with existing product data
  useEffect(() => {
    if (product) {
      console.log("Received product data:", product);

      // Extract numeric price if it has "NGN" prefix
      let priceValue = product.price || "";
      if (typeof priceValue === "string" && priceValue.includes("NGN")) {
        priceValue = priceValue.replace("NGN", "").trim();
      }

      setProductData({
        title: product.title || "",
        price: priceValue,
        item_type: product.item_type || "book",
        description: product.description || "",
        store_item_category_id:
          product.store_item_category_id || product.category_id || "",
      });

      // Set image preview if product has cover image
      if (product.cover_image) {
        setImagePreview(product.cover_image);
      }
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
    // If there was an existing image, revert to it
    if (product?.cover_image) {
      setImagePreview(product.cover_image);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productId) {
      alert("Product ID not found!");
      return;
    }

    // Validate required fields
    if (!productData.store_item_category_id) {
      alert("Please select a category");
      return;
    }

    // Prepare form data according to API structure
    const formData = new FormData();

    // Append cover image if exists (for update)
    if (coverImage) {
      formData.append("store_item[cover_image]", coverImage);
    }

    // Append other fields
    formData.append("store_item[title]", productData.title);
    formData.append("store_item[price]", productData.price);
    formData.append("store_item[item_type]", productData.item_type);
    formData.append("store_item[description]", productData.description);
    formData.append(
      "store_item[store_item_category_id]",
      productData.store_item_category_id
    );

    try {
      await updateBookItem({
        id: productId,
        product: formData,
      }).unwrap();

      alert("Product updated successfully!");

      // Redirect to products page
      navigate(-1);
    } catch (error) {
      console.error("Error updating product:", error);
      alert(
        `Error: ${
          error.data?.message ||
          "Something went wrong while updating the product."
        }`
      );
    }
  };

  // Show loading while fetching product or categories
  if (productLoading || categoriesLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  // Show error if product not found
  if (productError) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Products</span>
          </button>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-red-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-red-600">
            Failed to load product with ID: {productId}
          </p>
          <button
            to="/admin/products"
            className="inline-block mt-4 px-4 py-2 bg-[#FD9F2B] text-white rounded-lg hover:bg-[#E88F25] transition-colors"
          >
            Go to Products
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <button
            to="admin/products"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Products</span>
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-yellow-800 mb-2">
            No Product Selected
          </h2>
          <p className="text-yellow-600">
            Please select a product to edit from the products list.
          </p>
          <button
            to="/admin/products"
            className="inline-block mt-4 px-4 py-2 bg-[#FD9F2B] text-white rounded-lg hover:bg-[#E88F25] transition-colors"
          >
            Go to Products
          </button>
        </div>
      </div>
    );
  }

  // Show error if categories fetch fails
  if (categoriesError) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Products</span>
          </button>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-red-800 mb-2">
            Error Loading Categories
          </h2>
          <p className="text-red-600">
            Failed to load categories. Please check your connection and try
            again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Find selected category for preview
  const selectedCategory = categories.find(
    (cat) => cat.id === productData.store_item_category_id
  );

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Products</span>
          </button>
        </div>

        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Edit Product
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of "{product.title}"
              </p>
            </div>

            <button
              type="submit"
              disabled={isUpdatingProduct}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${
                  isUpdatingProduct
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#E88F25]"
                }`}
            >
              {isUpdatingProduct ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Updating...
                </>
              ) : (
                <>
                  <img src={publish} alt="Update" className="w-4 h-4" />
                  Update Product
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Product ID (Read-only) */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">
              Product ID: {product.id}
            </p>
            {product.created_at && (
              <p className="text-xs text-gray-500 mt-1">
                Created: {new Date(product.created_at).toLocaleDateString()}
              </p>
            )}
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-bold ${
              productData.item_type === "book"
                ? "bg-blue-500 text-white"
                : "bg-purple-500 text-white"
            }`}
          >
            {productData.item_type === "book" ? "BOOK" : "AUDIO"}
          </span>
        </div>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Product Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Product Title *
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="Enter product title"
            required
            value={productData.title}
            onChange={handleInputChange}
            name="title"
          />
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Price *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">₦</span>
            </div>
            <input
              id="price"
              type="text"
              className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
              placeholder="0.00"
              required
              value={productData.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">Enter price in Naira (₦)</p>
        </div>

        {/* Product Type */}
        <div>
          <label
            htmlFor="item_type"
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Product Type *
          </label>
          <select
            id="item_type"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            required
            value={productData.item_type}
            onChange={handleInputChange}
            name="item_type"
          >
            <option value="book">Book</option>
            <option value="audio">Audio Book</option>
          </select>
          <p className="text-xs text-gray-500 mt-2">
            Select whether this is a physical book or audio book
          </p>
        </div>

        {/* Category - Dropdown with fetched categories */}
        <div>
          <label
            htmlFor="store_item_category_id"
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Category *
          </label>
          <select
            id="store_item_category_id"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            required
            value={productData.store_item_category_id}
            onChange={handleInputChange}
            name="store_item_category_id"
            disabled={categories.length === 0}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {categories.length === 0 ? (
            <p className="text-xs text-red-500 mt-2">
              No categories available.
            </p>
          ) : (
            <p className="text-xs text-gray-500 mt-2">
              Select the category this product belongs to
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
            placeholder="Enter product description..."
            value={productData.description}
            onChange={handleInputChange}
            name="description"
            rows={4}
          />
          <div className="flex justify-end items-center mt-2">
            <p className="text-xs text-gray-500">
              {productData.description.length}/1000 characters
            </p>
          </div>
        </div>

        {/* Cover Image Upload */}
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wider">
            Update Cover Image
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {imagePreview
              ? "Current cover image:"
              : "Upload a new cover image (optional)"}
          </p>

          {/* Current Image Preview */}
          {imagePreview && (
            <div className="mb-4">
              <div className="relative w-full max-w-xs h-64 mx-auto bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={imagePreview}
                  alt="Current cover"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x400?text=Image+Error";
                  }}
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">
                {coverImage
                  ? "New image selected (will replace current)"
                  : "Current image"}
              </p>
            </div>
          )}

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[150px]
              ${
                isDragging
                  ? "border-[#FD9F2B] bg-[#FFF5EB]"
                  : "border-gray-300 hover:border-[#FD9F2B] hover:bg-gray-50"
              }`}
          >
            <img
              src={uploadIcon}
              alt="Upload icon"
              className="w-12 h-12 mb-3 opacity-80"
            />

            <p className="text-gray-700 text-center mb-1">
              {coverImage
                ? "Image selected. Drop another to replace"
                : "Drag & drop new cover image here"}
            </p>
            <p className="text-sm text-gray-500 mb-3">or</p>
            <div className="flex gap-2">
              <label className="cursor-pointer">
                <span className="inline-flex items-center px-4 py-2 border border-[#FD9F2B] text-[#FD9F2B] font-medium rounded-lg hover:bg-[#FFF5EB] transition-colors">
                  Browse Files
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {(coverImage || imagePreview) && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="inline-flex items-center px-4 py-2 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors"
                >
                  Remove Image
                </button>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Recommended: Square aspect ratio, max 5MB
            </p>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Preview</h2>
          <p className="text-sm text-gray-600 mb-4">
            Here's how your product will appear after update:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
            <div className="flex gap-4">
              {/* Preview Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-white shadow-md bg-gray-200">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No image</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Preview Details */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {productData.title || "Product Title"}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      productData.item_type === "book"
                        ? "bg-blue-500 text-white"
                        : "bg-purple-500 text-white"
                    }`}
                  >
                    {productData.item_type === "book" ? "BOOK" : "AUDIO"}
                  </span>
                  {selectedCategory && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {selectedCategory.name}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {productData.price ? `₦${productData.price}` : "₦0.00"}
                </div>
                {productData.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {productData.description}
                  </p>
                )}
                {selectedCategory && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Category:</span>{" "}
                      {selectedCategory.name} (ID: {selectedCategory.id})
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              Product ID: <span className="font-medium">{product.id}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isUpdatingProduct || categories.length === 0}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${
              isUpdatingProduct || categories.length === 0
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#E88F25]"
            }`}
        >
          {isUpdatingProduct ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Updating Product...
            </>
          ) : (
            <>
              <img src={publish} alt="Update" className="w-5 h-5" />
              Update Product
            </>
          )}
        </button>

        <button
          to="/products"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProduct;
