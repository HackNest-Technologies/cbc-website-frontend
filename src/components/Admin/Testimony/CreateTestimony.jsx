import { useState } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import { useSendTestimonyMutation } from "../../../redux/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const CreateTestimony = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [sendTestimony, { isLoading }] = useSendTestimonyMutation();
  
  // Initial state based on       alert("Please upload an image file");

  const initialState = {
    testifier_first_name: "",
    testifier_last_name: "",
    testifier_email_address: "",
    body: "",
    featured: false,
  };

  const [testimonyData, setTestimonyData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTestimonyData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data according to API structure
    const formData = new FormData();
    
    // Append profile image if exists
    if (profileImage) {
      formData.append("testimony[file]", profileImage);
    }
    
    // Append other fields
    formData.append("testimony[testifier_first_name]", testimonyData.testifier_first_name);
    formData.append("testimony[testifier_last_name]", testimonyData.testifier_last_name);
    formData.append("testimony[testifier_email_address]", testimonyData.testifier_email_address);
    formData.append("testimony[body]", testimonyData.body);
    formData.append("testimony[featured]", testimonyData.featured);

    try {
      await sendTestimony(formData).unwrap();
      
      // Reset form
      setTestimonyData(initialState);
      setProfileImage(null);
      setImagePreview(null);
      
      alert("Testimony created successfully!");
      
      // Redirect to testimonies list
      navigate("/admin-testimonies");
      
    } catch (error) {
      console.error("Error creating testimony:", error);
      alert("Something went wrong while creating the testimony.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link 
            to="/admin-testimonies" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Testimonies</span>
          </Link>
        </div>
        
        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Create New Testimony
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in the details of the testimony you want to create
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
                  Creating...
                </>
              ) : (
                <>
                  <img src={publish} alt="Publish" className="w-4 h-4" />
                  Create Testimony
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Featured Toggle */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Feature this Testimony</h3>
              <p className="text-sm text-gray-600">
                Featured testimonies will be highlighted on the website
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={testimonyData.featured}
                onChange={handleInputChange}
                name="featured"
              />
              <div className={`w-11 h-6 rounded-full peer ${testimonyData.featured ? 'bg-[#FD9F2B]' : 'bg-gray-300'} peer-focus:ring-2 peer-focus:ring-[#FD9F2B] peer-focus:ring-offset-2 transition-colors`}>
                <div className={`absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition-transform ${testimonyData.featured ? 'translate-x-5' : ''}`}></div>
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700">
                {testimonyData.featured ? 'Featured' : 'Not Featured'}
              </span>
            </label>
          </div>
          {testimonyData.featured && (
            <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-yellow-700">
                  This testimony will be marked as featured and displayed prominently on the website.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Personal Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label 
                htmlFor="testifier_first_name" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                First Name *
              </label>
              <input
                id="testifier_first_name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter first name"
                required
                value={testimonyData.testifier_first_name}
                onChange={handleInputChange}
                name="testifier_first_name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label 
                htmlFor="testifier_last_name" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Last Name *
              </label>
              <input
                id="testifier_last_name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter last name"
                required
                value={testimonyData.testifier_last_name}
                onChange={handleInputChange}
                name="testifier_last_name"
              />
            </div>

            {/* Email Address */}
            <div className="md:col-span-2">
              <label 
                htmlFor="testifier_email_address" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Email Address *
              </label>
              <input
                id="testifier_email_address"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter email address"
                required
                value={testimonyData.testifier_email_address}
                onChange={handleInputChange}
                name="testifier_email_address"
              />
            </div>
          </div>
        </div>

        {/* Testimony Content Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Testimony Content</h2>
          
          <div>
            <label 
              htmlFor="body" 
              className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
            >
              Testimony *
            </label>
            <textarea
              id="body"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[200px] resize-none"
              placeholder="Share your testimony here..."
              required
              value={testimonyData.body}
              onChange={handleInputChange}
              name="body"
              rows={6}
            />
            <div className="flex justify-end items-center mt-2">
            
              <p className="text-xs text-gray-500">
                {testimonyData.body.length}/2000 characters
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image Upload Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Profile Image</h2>
          <p className="text-sm text-gray-600 mb-4">
            Upload a profile picture for the testifier (optional)
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
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={imagePreview}
                    alt="Profile preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-green-600 font-medium mb-2">
                  ✓ Profile image selected
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {profileImage?.name}
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
                  Drag & drop profile image here
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
                  Recommended: Square aspect ratio, max 5MB<br />
                  JPG, PNG, or WebP format
                </p>
              </>
            )}
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
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Testimony...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Create Testimony
            </>
          )}
        </button>
        
        <Link
          to="/admin-testimonies"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default CreateTestimony;