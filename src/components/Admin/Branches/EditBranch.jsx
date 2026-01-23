import { useState, useEffect } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import { useUpdateBranchMutation } from "../../../redux/apiSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const EditBranch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const [headPastorImage, setHeadPastorImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [updateBranch, { isLoading }] = useUpdateBranchMutation();
  
  // Get branch data passed from navigation state
  const branch = location.state?.branch;
  
  // Initial state based on the branch data
  const initialState = {
    name: "",
    address: "",
    head_pastor_name: "",
    head_pastor_description: "",
  };

  const [branchData, setBranchData] = useState(initialState);

  // Populate form with existing data when component mounts
  useEffect(() => {
    if (branch) {
      setBranchData({
        name: branch.name || "",
        address: branch.address || "",
        head_pastor_name: branch.head_pastor_name || "",
        head_pastor_description: branch.head_pastor_description || "",
      });
      
      // Set existing image preview if available
      if (branch.head_pastor_image) {
        setImagePreview(branch.head_pastor_image);
      }
    }
  }, [branch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBranchData((prev) => ({
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
      setHeadPastorImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setHeadPastorImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file");
    }
  };

  const handleRemoveImage = () => {
    setHeadPastorImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!branch) {
      alert("Branch data not found. Please go back and try again.");
      return;
    }
    
    // Prepare form data according to API structure
    const formData = new FormData();
    
    // Append head pastor image if exists (new or changed)
    if (headPastorImage) {
      formData.append("branch[head_pastor_image]", headPastorImage);
    }
    
    // Append other fields
    formData.append("branch[name]", branchData.name);
    formData.append("branch[address]", branchData.address);
    formData.append("branch[head_pastor_name]", branchData.head_pastor_name);
    formData.append("branch[head_pastor_description]", branchData.head_pastor_description);

    try {
      // Use the branch ID from the passed data
      await updateBranch({ id: branch.id, branch: formData }).unwrap();
     
      alert("Branch updated successfully!");
      
      // Redirect to branches list
      navigate("/admin/admin-branches");
      
    } catch (error) {
      console.error("Error updating branch:", error);
      alert("Something went wrong while updating the branch.");
    }
  };

  if (!branch) {
    return (
      <div className="p-4 md:px-0">
        <div className="mb-6">
          <Link 
            to="/admin/admin-branches" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Branches</span>
          </Link>
        </div>
        
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Branch Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The branch you're trying to edit could not be found. Please go back and select a branch to edit.
          </p>
          <Link
            to="/admin/admin-branches"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FD9F2B] text-white font-medium rounded-lg hover:bg-[#E88F27] transition-colors"
          >
            Back to Branches
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link 
            to="/admin/admin-branches" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Branches</span>
          </Link>
        </div>
        
        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Edit Branch
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of {branch.name}
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
                  <img src={publish} alt="Publish" className="w-4 h-4" />
                  Update Branch
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Branch Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Branch Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branch Name */}
            <div className="md:col-span-2">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Branch Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter branch name (e.g., CBC Idimu)"
                required
                value={branchData.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            {/* Branch Address */}
            <div className="md:col-span-2">
              <label 
                htmlFor="address" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Address *
              </label>
              <textarea
                id="address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
                placeholder="Enter full branch address"
                required
                value={branchData.address}
                onChange={handleInputChange}
                name="address"
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Head Pastor Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Head Pastor Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pastor Name */}
            <div className="md:col-span-2">
              <label 
                htmlFor="head_pastor_name" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Head Pastor Name *
              </label>
              <input
                id="head_pastor_name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter head pastor's full name"
                required
                value={branchData.head_pastor_name}
                onChange={handleInputChange}
                name="head_pastor_name"
              />
            </div>

            {/* Pastor Description */}
            <div className="md:col-span-2">
              <label 
                htmlFor="head_pastor_description" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Pastor Description *
              </label>
              <textarea
                id="head_pastor_description"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[150px] resize-none"
                placeholder="Enter a brief description about the head pastor"
                required
                value={branchData.head_pastor_description}
                onChange={handleInputChange}
                name="head_pastor_description"
                rows={5}
              />
              <div className="flex justify-end items-center mt-2">
                <p className="text-xs text-gray-500">
                  {branchData.head_pastor_description.length}/1000 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Head Pastor Image Upload Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Head Pastor Image</h2>
          <p className="text-sm text-gray-600 mb-4">
            {imagePreview === branch.head_pastor_image ? 
              "Current head pastor image. Upload a new one if you want to change it." :
              "Upload a new profile picture for the head pastor (optional)"}
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
                    alt="Head pastor preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-green-600 font-medium mb-2">
                  {imagePreview === branch.head_pastor_image ? 
                    "✓ Current head pastor image" : 
                    "✓ New head pastor image selected"}
                </p>
                {headPastorImage && (
                  <p className="text-sm text-gray-600 mb-4">
                    {headPastorImage?.name}
                  </p>
                )}
                <div className="flex gap-2">
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center px-4 py-2 border border-[#FD9F2B] text-[#FD9F2B] font-medium rounded-lg hover:bg-[#FFF5EB] transition-colors">
                      {imagePreview === branch.head_pastor_image ? "Change Image" : "Change New Image"}
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
                    {imagePreview === branch.head_pastor_image ? "Remove Current" : "Remove New"}
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
                  Drag & drop new head pastor image here
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
              Updating Branch...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Update Branch
            </>
          )}
        </button>
        
        <Link
          to="/admin/admin-branches"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditBranch;