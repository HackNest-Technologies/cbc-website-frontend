import { useState, useEffect } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import { useUpDatePastSermonMutation } from "../../../redux/apiSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const  EditPastSermon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pastsermon = location.state?.pastSermon;
  
  const [isDragging, setIsDragging] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [updatePastSermon, { isLoading }] = useUpDatePastSermonMutation();
  
  // Initial state based on API structure
  const initialState = {
    series_title: "",
    minister: "",
    date: "",
    video_url: "",
  };

  const [pastSermonData, setPastSermonData] = useState(initialState);

  // Populate form with existing data when component mounts
  useEffect(() => {
    if (pastsermon) {
      setPastSermonData({
        series_title: pastsermon.series_title || "",
        minister: pastsermon.minister || "",
        date: pastsermon.date || "",
        video_url: pastsermon.video_url || "",
      });
      
      // If there's an existing cover image, set the preview
      if (pastsermon.cover_image_url) {
        setCoverImagePreview(pastsermon.cover_image_url);
      }
    }
  }, [pastsermon]);

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
      setCoverImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setCoverImage(file);
      setCoverImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
    setCoverImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!pastsermon?.id) {
      alert("Sermon data not found!");
      return;
    }

    // Prepare form data according to API structure
    const formData = new FormData();
    
    // Append cover image if exists (for update)
    if (coverImage) {
      formData.append("past_sermon[cover_image]", coverImage);
    }
    
    // Append other fields
    formData.append("past_sermon[series_title]", pastSermonData.series_title);
    formData.append("past_sermon[minister]", pastSermonData.minister);
    formData.append("past_sermon[date]", pastSermonData.date);
    formData.append("past_sermon[video_url]", pastSermonData.video_url);

    try {
      await updatePastSermon({ 
        id: pastsermon.id, 
        pastsermon: formData 
      }).unwrap();
      
      alert("Past sermon updated successfully!");
      
      // Redirect back to past sermons list
      navigate("/admin-pastsermon");
      
    } catch (error) {
      console.error("Error updating past sermon:", error);
      alert("Something went wrong while updating the past sermon.");
    }
  };

  if (!pastsermon) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600">No sermon data found for editing.</p>
        <Link 
          to="/admin-pastsermon" 
          className="mt-4 text-[#FD9F2B] hover:underline"
        >
          Back to Past Sermons
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
            to="/admin-pastsermon" 
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
                Edit Past Sermon
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of the selected past sermon
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#E88F25]'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating...
                </>
              ) : (
                <>
                  <img src={publish} alt="Update" className="w-4 h-4" />
                  Update Sermon
                </>
              )}
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
            Update Cover Image
          </h2>

          {coverImagePreview && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Current Image:</p>
              <div className="relative w-full max-w-md h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={coverImagePreview}
                  alt="Current cover"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {coverImage ? "New image selected (will replace current)" : "Current image (unchanged)"}
              </p>
            </div>
          )}

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[150px]
              ${isDragging 
                ? "border-[#FD9F2B] bg-[#FFF5EB]" 
                : "border-gray-300 hover:border-[#FD9F2B] hover:bg-gray-50"
              }`}
          >
            <img
              src={uploadIcon}
              alt="Upload icon"
              className="w-10 h-10 mb-3 opacity-80"
            />
            
            <p className="text-gray-700 text-center mb-1">
              {coverImage ? "Image selected. Drop another to replace" : "Drag & drop new cover image here"}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              or
            </p>
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
              {(coverImage || coverImagePreview) && (
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
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#E88F25]'}`}
        >
          {isLoading ? "Updating..." : "Update Sermon"}
        </button>
        
        <Link
          to="/admin-pastsermon"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditPastSermon;