import { useState } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import {
  useAddBookItemMutation,
  useGetCategoriesQuery,
} from "../../../redux/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";
import Spinner from "../../Loader/Spinner";

const AddProducts = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [addBookItem, { isLoading: isAddingProduct }] =
    useAddBookItemMutation();
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  // Initial state based on API structure
  const initialState = {
    title: "",
    price: "",
    item_type: "book", // Default to book
    description: "",
    store_item_category_id: "",
  };

  const [productData, setProductData] = useState(initialState);

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
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCoverImage(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!productData.store_item_category_id) {
      alert("Please select a category");
      return;
    }

    if (!coverImage) {
      alert("Please upload a cover image");
      return;
    }

    // Prepare form data according to API structure
    const formData = new FormData();

    // Append cover image if exists
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

    console.log(
      "Submitting with category ID:",
      productData.store_item_category_id
    );

    try {
      await addBookItem(formData).unwrap();

      // Reset form
      setProductData(initialState);
      setCoverImage(null);

      alert("Product added successfully!");

      // Redirect to products page
      navigate(-1);
    } catch (error) {
      console.error("Error adding product:", error);
      alert(
        `Error: ${
          error.data?.message ||
          "Something went wrong while adding the product."
        }`
      );
    }
  };

  // Show loading while fetching categories
  if (categoriesLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  // Show error if categories fetch fails
  if (categoriesError) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <Link
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Products</span>
          </Link>
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
          <Link
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Add New Product
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details of the product you want to add
              </p>
            </div>

            <button
              type="submit"
              disabled={isAddingProduct}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${
                  isAddingProduct
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#E88F25]"
                }`}
            >
              {isAddingProduct ? (
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
                  Adding...
                </>
              ) : (
                <>
                  <img src={publish} alt="Publish" className="w-4 h-4" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </div>
      </section>

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
              No categories available. Please create a category first.
            </p>
          ) : (
            <p className="text-xs text-gray-500 mt-2">
              Select the category this product belongs to
            </p>
          )}

          {categories.length === 0 && (
            <div className="mt-4">
              <Link
                to="/create-category"
                className="inline-flex items-center gap-2 text-[#FD9F2B] hover:text-[#E88F25]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create New Category
              </Link>
            </div>
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
            Upload Cover Image *
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Add a cover image for the product (required)
          </p>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px]
              ${
                isDragging
                  ? "border-[#FD9F2B] bg-[#FFF5EB]"
                  : coverImage
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 hover:border-[#FD9F2B] hover:bg-gray-50"
              }`}
          >
            <img
              src={uploadIcon}
              alt="Upload icon"
              className="w-12 h-12 mb-4 opacity-80"
            />

            {coverImage ? (
              <div className="text-center">
                <p className="text-green-600 font-medium mb-2">
                  ✓ {coverImage.name}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Image ready to upload
                </p>
                <div className="flex gap-2">
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center px-4 py-2 border border-[#FD9F2B] text-[#FD9F2B] font-medium rounded-lg hover:bg-[#FFF5EB] transition-colors">
                      Change Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setCoverImage(null)}
                    className="inline-flex items-center px-4 py-2 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-gray-700 text-center mb-2 text-lg">
                  Drag & drop your cover image here
                </p>
                <p className="text-sm text-gray-500 mb-4">or</p>
                <label className="cursor-pointer">
                  <span className="inline-flex items-center px-4 py-2 border border-[#FD9F2B] text-[#FD9F2B] font-medium rounded-lg hover:bg-[#FFF5EB] transition-colors text-lg">
                    Browse Files
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Recommended: Square aspect ratio, max 5MB
                  <br />
                  JPG, PNG, or WebP format
                </p>
              </>
            )}
          </div>

          {/* Image Preview */}
          {coverImage && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <div className="relative w-full max-w-xs h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Preview Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Preview</h2>
          <p className="text-sm text-gray-600 mb-4">
            Here's how your product will appear:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
            <div className="flex gap-4">
              {/* Preview Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-white shadow-md bg-gray-200">
                  {coverImage ? (
                    <img
                      src={URL.createObjectURL(coverImage)}
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
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isAddingProduct || categories.length === 0}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${
              isAddingProduct || categories.length === 0
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#E88F25]"
            }`}
        >
          {isAddingProduct ? (
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
              Adding Product...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Add Product
            </>
          )}
        </button>

        <Link
          to="/products"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddProducts;
