import { useState } from "react";
import uploadIcon from "../../../../assets/images/upload.png";
import { useCreateCategoryMutation } from "../../../../redux/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../../assets/images/publish.png";


const CreateCategory = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const initialState = {
    name: "",
  };

  const [categoryData, setCategoryData] = useState(initialState);

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

    const fr = new FileReader()

    fr.onload = () => {
      setCoverImage(fr.result);
      setImagePreview(URL.createObjectURL(file));
    }

    if (file && file.type.startsWith("image/")) {
      fr.readAsDataURL(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data according to API structure
    const formData = new FormData();

    // Append cover image if exists
    if (coverImage) {
      formData.append("store_item_category[cover_image]", coverImage);
    }

    // Append other fields
    formData.append("store_item_category[name]", categoryData.name);

    try {
      await createCategory(formData).unwrap();

      // Reset form
      setCategoryData(initialState);
      setCoverImage(null);
      setImagePreview(null);

      alert("Category created successfully!");

      // Redirect to categories list
      navigate("/admin/book-category");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Something went wrong while creating the category.");
    }
  };

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
                Create New Category
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details of the category you want to create
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
                  Creating...
                </>
              ) : (
                <>
                  <img src={publish} alt="Publish" className="w-4 h-4" />
                  Create Category
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
      </div>

 {/* Cover Image Upload Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Cover Image</h2>
          <p className="text-sm text-gray-600 mb-4">
            Upload a cover image for the category (optional but recommended)
          </p>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px]
              ${isDragging 
                ? "border-[#FD9F2B] bg-[#FFF5EB]" 
                : imagePreview 
                  ? "border-green-500 bg-green-50" 
                  : "border-gray-300 hover:border-[#FD9F2B] hover:bg-gray-50"
              }`}
          >
            {imagePreview ? (
              <div className="text-center">
                <div className="relative w-full max-w-md mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={imagePreview}
                    alt="Category cover preview"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="text-green-600 font-medium mb-2">
                  ✓ Cover image selected
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {coverImage?.name}
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
                    onClick={handleRemoveImage}
                    className="inline-flex items-center px-4 py-2 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={uploadIcon}
                  alt="Upload icon"
                  className="w-16 h-16 mb-4 opacity-80"
                />
                <p className="text-gray-700 text-center mb-2 text-lg">
                  Drag & drop cover image here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or
                </p>
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
                  Recommended: 16:9 aspect ratio, max 5MB<br />
                  JPG, PNG, or WebP format
                </p>
              </>
            )}
          </div>

        
        </div>
      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E88F25]"
            }`}
        >
          {isLoading ? (
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
              Creating Category...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Create Category
            </>
          )}
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

export default CreateCategory;
