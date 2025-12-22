import { useState, useEffect } from "react";
import uploadIcon from "../../../../assets/images/upload.png";
import { useUpdateCategoryMutation } from "../../../../redux/apiSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../../assets/images/publish.png";

const EditCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.state?.category;

  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const initialState = {
    name: "",
  };

  const [categoryData, setCategoryData] = useState(initialState);

  // Populate form with existing data when component mounts
  useEffect(() => {
    if (category) {
      console.log("Received category data:", category);

      setCategoryData({
        name: category.name || "",
      });

      // If there's an existing cover image, set the preview
      if (category.cover_image) {
        setImagePreview(category.cover_image);
      }
    }
  }, [category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prev) => ({
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
    // If there was an existing image, keep it in preview
    if (category?.cover_image) {
      setImagePreview(category.cover_image);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category?.id) {
      alert("Category data not found!");
      return;
    }

    // Prepare form data according to API structure
    const formData = new FormData();

    // Append cover image if exists (for update)
    if (coverImage) {
      formData.append("store_item_category[cover_image]", coverImage);
    }

    // Append other fields
    formData.append("store_item_category[name]", categoryData.name);

    console.log("Updating category ID:", category.id);
    console.log("FormData contents:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      await updateCategory({
        id: category.id,
        category: formData,
      }).unwrap();

      alert("Category updated successfully!");

      // Redirect to categories list
      navigate("/admin/book-category");
    } catch (error) {
      console.error("Error updating category:", error);
      console.error("Error details:", error.data);
      alert(
        `Error: ${error.status} - ${
          error.data?.error ||
          "Something went wrong while updating the category."
        }`
      );
    }
  };

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600">
          No category data found for editing.
        </p>
        <Link
          to="/admin/book-category"
          className="mt-4 text-[#FD9F2B] hover:underline"
        >
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link
            to="/admin/book-category"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Categories</span>
          </Link>
        </div>

        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Edit Category
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of the selected category
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#E88F25]"
                }`}
            >
              {isLoading ? (
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
                  Update Category
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Category Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Category Information
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Category Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Category Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter category name (e.g., Fiction, Non-Fiction, Science)"
                required
                value={categoryData.name}
                onChange={handleInputChange}
                name="name"
              />
              <p className="text-sm text-gray-500 mt-2">
                Enter a descriptive name for your product category
              </p>
            </div>
          </div>
        </div>

        {/* Cover Image Upload Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Cover Image
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {imagePreview
              ? "Current cover image:"
              : "Upload a cover image for the category (optional)"}
          </p>

          {imagePreview && (
            <div className="mb-4">
              <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={imagePreview}
                  alt="Category cover preview"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/800x450?text=Image+Error";
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
              Recommended: 16:9 aspect ratio, max 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200 py-20">
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E88F25]"
            }`}
        >
          {isLoading ? "Updating..." : "Update Category"}
        </button>

        <Link
          to="/admin/book-category"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditCategory;
