import { useState, useEffect } from "react";
import { useUpdateFellowshipMutation } from "../../../redux/apiSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const EditFellowship = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [updateFellowship, { isLoading }] = useUpdateFellowshipMutation();
  
  // Get fellowship data passed from navigation state
  const fellowship = location.state?.fellowship;
  
  // Initial state based on the fellowship data
  const initialState = {
    name: "",
    coordinator_name: "",
    coordinator_phone: "",
  };

  const [fellowshipData, setFellowshipData] = useState(initialState);

  // Populate form with existing data when component mounts
  useEffect(() => {
    if (fellowship) {
      setFellowshipData({
        name: fellowship.name || "",
        coordinator_name: fellowship.coordinator_name || "",
        coordinator_phone: fellowship.coordinator_phone || "",
      });
    }
  }, [fellowship]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFellowshipData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneInput = (e) => {
    const { name, value } = e.target;
    // Allow only numbers, plus sign, spaces, and parentheses
    const phoneValue = value.replace(/[^\d\s()+-]/g, '');
    setFellowshipData((prev) => ({
      ...prev,
      [name]: phoneValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!fellowship) {
      alert("Fellowship data not found. Please go back and try again.");
      return;
    }
    
    // Prepare form data according to API structure
    const formData = new FormData();
    
    // Append fields - note the different field structure from branch
    formData.append("house_fellowship_centre[name]", fellowshipData.name);
    formData.append("house_fellowship_centre[coordinator_name]", fellowshipData.coordinator_name);
    formData.append("house_fellowship_centre[coordinator_phone]", fellowshipData.coordinator_phone);

    try {
      // Use the fellowship ID from the passed data
      await updateFellowship({ id: fellowship.id, fellowship: formData }).unwrap();
     
      alert("Fellowship updated successfully!");
      
      // Redirect to fellowships list
      navigate("/admin/admin-fellowship");
      
    } catch (error) {
      console.error("Error updating fellowship:", error);
      alert("Something went wrong while updating the fellowship.");
    }
  };

  if (!fellowship) {
    return (
      <div className="p-4 md:px-0">
        <div className="mb-6">
          <Link 
            to="/admin/admin-fellowship" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Fellowships</span>
          </Link>
        </div>
        
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Fellowship Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The fellowship you're trying to edit could not be found. Please go back and select a fellowship to edit.
          </p>
          <Link
            to="/admin/admin-fellowship"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FD9F2B] text-white font-medium rounded-lg hover:bg-[#E88F27] transition-colors"
          >
            Back to Fellowships
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
            to="/admin/admin-fellowship" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Fellowships</span>
          </Link>
        </div>
        
        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Edit Fellowship
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of {fellowship.name}
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
                  Update Fellowship
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Fellowship Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Fellowship Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fellowship Name */}
            <div className="md:col-span-2">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Fellowship Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter fellowship name (e.g., Victory Fellowship)"
                required
                value={fellowshipData.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>
        </div>

        {/* Coordinator Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Coordinator Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coordinator Name */}
            <div className="md:col-span-2">
              <label 
                htmlFor="coordinator_name" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Coordinator Name *
              </label>
              <input
                id="coordinator_name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter coordinator's full name"
                required
                value={fellowshipData.coordinator_name}
                onChange={handleInputChange}
                name="coordinator_name"
              />
            </div>

            {/* Coordinator Phone */}
            <div className="md:col-span-2">
              <label 
                htmlFor="coordinator_phone" 
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Coordinator Phone Number *
              </label>
              <input
                id="coordinator_phone"
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter phone number (e.g., +234 123 456 7890)"
                required
                value={fellowshipData.coordinator_phone}
                onChange={handlePhoneInput}
                name="coordinator_phone"
                pattern="^[\d\s()+-]+$"
              />
              <div className="flex justify-end items-center mt-2">
                <p className="text-xs text-gray-500">
                  Format: +234 123 456 7890 or 08012345678
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-800">About Fellowships</h4>
              <p className="text-sm text-blue-700 mt-1">
                Fellowships are small group gatherings within the church. They provide opportunities for members to connect, 
                study the Bible together, and support one another in their spiritual journey.
              </p>
            </div>
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
              Updating Fellowship...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Update Fellowship
            </>
          )}
        </button>
        
        <Link
          to="/admin/admin-fellowship"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditFellowship;