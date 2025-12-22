import { useState } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import { useUploadPastSermonMutation } from "../../../redux/apiSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const CreatePastSermon = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [uploadPastSermon] = useUploadPastSermonMutation();
  const navigate = useNavigate();
  
  // Initial state based on API structure
  const initialState = {
    series_title: "",
    minister: "",
    date: "",
    video_url: "",
  };

  const [pastSermonData, setPastSermonData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPastSermonData((prev) => ({
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
    if (file && file.type.startsWith('image/')) {
      setCoverImage(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setCoverImage(file);
    } else {
      alert("Please upload an image file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data according to API structure
    const formData = new FormData();
    
    // Append cover image if exists
    if (coverImage) {
      formData.append("past_sermon[cover_image]", coverImage);
    }
    
    // Append other fields
    formData.append("past_sermon[series_title]", pastSermonData.series_title);
    formData.append("past_sermon[minister]", pastSermonData.minister);
    formData.append("past_sermon[date]", pastSermonData.date);
    formData.append("past_sermon[video_url]", pastSermonData.video_url);

    try {
      await uploadPastSermon(formData).unwrap();
      
      // Reset form
      setPastSermonData(initialState);
      setCoverImage(null);
      navigate("/admin/admin-pastsermon")
      
      alert("Past sermon created successfully!");
      
      // Optionally redirect or show success message
    } catch (error) {
      console.error("Error creating past sermon:", error);
      alert("Something went wrong while creating the past sermon.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link 
            to="/admin/admin-pastsermon" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Past Sermons</span>
          </Link>
        </div>
        
        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Create New Past Sermon
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details of the past sermon you want to create
              </p>
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E88F25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto"
            >
              <img src={publish} alt="Publish" className="w-4 h-4" />
              Create Sermon
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Series Title */}
        <div>
          <label 
            htmlFor="series_title" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Sermon Series Title
          </label>
          <input
            id="series_title"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="Enter sermon series title"
            required
            value={pastSermonData.series_title}
            onChange={handleInputChange}
            name="series_title"
          />
        </div>

        {/* Minister Name */}
        <div>
          <label 
            htmlFor="minister" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Minister / Preacher
          </label>
          <input
            id="minister"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="Enter minister's name"
            required
            value={pastSermonData.minister}
            onChange={handleInputChange}
            name="minister"
          />
        </div>

        {/* Date */}
        <div>
          <label 
            htmlFor="date" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Sermon Date
          </label>
          <input
            id="date"
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            required
            value={pastSermonData.date}
            onChange={handleInputChange}
            name="date"
          />
        </div>

        {/* Video URL */}
        <div>
          <label 
            htmlFor="video_url" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Video URL
          </label>
          <input
            id="video_url"
            type="url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
            required
            value={pastSermonData.video_url}
            onChange={handleInputChange}
            name="video_url"
          />
          <p className="text-xs text-gray-500 mt-2">
            Enter the full URL of the video (YouTube, Vimeo, etc.)
          </p>
        </div>

        {/* Cover Image Upload */}
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wider">
            Upload Cover Image
          </h2>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px]
              ${isDragging 
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
                <p className="text-sm text-gray-600">
                  Image ready to upload
                </p>
                <button
                  type="button"
                  onClick={() => setCoverImage(null)}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-700 text-center mb-2">
                  Drag & drop your cover image here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or
                </p>
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
                <p className="text-xs text-gray-500 mt-4">
                  Recommended: 16:9 aspect ratio, max 5MB
                </p>
              </>
            )}
          </div>

          {/* Image Preview */}
          {coverImage && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#E88F25] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1"
        >
          <img src={publish} alt="Publish" className="w-4 h-4" />
          Create Sermon
        </button>
        
        <Link
            to="/admin/admin-pastsermon" 
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreatePastSermon;