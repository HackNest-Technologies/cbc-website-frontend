import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useUpdateEventMutation } from "../../../redux/apiSlice";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";
import uploadIcon from "../../../assets/images/upload.png";
import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "2px auto",
};

const EditEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Image upload states
  const [isDragging, setIsDragging] = useState(false);
  const [eventImage, setEventImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");

  const [updateEvent] = useUpdateEventMutation();
  
  // Get event data from location state
  const eventData = location.state?.event;

  const initialState = {
    title: "",
    desc: "",
    start_date: "",
    end_date: "",
    time: "",
    event_image: ""
  };

  const [eventKey, setEventKey] = useState(initialState);

  // Populate form with existing data from location state
  useEffect(() => {
    if (eventData) {
      setEventKey({
        title: eventData.title || "",
        desc: eventData.desc || "",
        start_date: eventData.start_date || "",
        end_date: eventData.end_date || "",
        time: eventData.time || "",
        event_image: eventData.event_image || ""
      });
      
      // Set existing image URL if available
      if (eventData.event_image) {
        setExistingImageUrl(eventData.event_image);
      }
    }
  }, [eventData]);

  const handleBlogValue = (e) => {
    const { name, value } = e.target;
    setEventKey((prevValue) => ({ ...prevValue, [name]: value }));
  };

  // Image upload handlers
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
      setEventImage(file);
      setImagePreview(URL.createObjectURL(file));
      // Clear existing image URL when new image is selected
      setExistingImageUrl("");
    } else {
      alert("Please upload an image file");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setEventImage(file);
      setImagePreview(URL.createObjectURL(file));
      // Clear existing image URL when new image is selected
      setExistingImageUrl("");
    } else {
      alert("Please upload an image file");
    }
  };

  const handleRemoveImage = () => {
    setEventImage(null);
    setImagePreview(null);
    // Also clear the existing image URL if removing image
    setExistingImageUrl("");
    setEventKey(prev => ({ ...prev, event_image: "" }));
  };

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setStatus(null);
      setMsg("");
    }, 2000);
  };

  const handleEventUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Prepare form data
      const formData = new FormData();
      
      // Append event ID (assuming eventData has an id field)
      if (eventData?.id) {
        formData.append("id", eventData.id);
      }
      
      // Append event image if new one is selected
      if (eventImage) {
        formData.append("event_image", eventImage);
      }
      
      // Append other fields
      formData.append("title", eventKey.title);
      formData.append("desc", eventKey.desc);
      formData.append("start_date", eventKey.start_date);
      formData.append("end_date", eventKey.end_date);
      formData.append("time", eventKey.time);
      
      // If no new image but existing image exists, keep it
      if (!eventImage && existingImageUrl) {
        formData.append("keep_existing_image", "true");
      }
      
      const res = await updateEvent(formData).unwrap();
      setStatus("success");
      setMsg(res.msg || "Event updated successfully!");
      clearMessageAfterTimeout();
      
      // Redirect after successful update
      setTimeout(() => {
        navigate("/admin-event", { state: { refresh: true } });
      }, 1500);
      
    } catch (error) {
      setStatus("error");
      setMsg(error.data?.msg || error.message || "Something went wrong while updating the event.");
    } finally {
      setLoading(false);
    }
  };

  // Show error if no event data in location state
  if (!eventData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">No Event Data</h2>
          <p className="text-gray-600 mb-6">No event data was provided for editing.</p>
          <Link
            to="/admin/admin-event"
            className="inline-flex items-center px-6 py-3 bg-[#FD9F2B] text-white font-semibold rounded-lg hover:bg-[#E88F25] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleEventUpdate} className="pb-20">
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-50 bg-opacity-55 z-50">
          <BarLoader
            color="#7F8F22"
            loading={loading}
            cssOverride={override}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      
      <section>
        {status === "success" && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Success!</p>
                <p className="text-gray-600 mb-4">{msg}</p>
                <p className="text-sm text-gray-500">Redirecting back to events...</p>
              </div>
            </div>
          </div>
        )}
        
        {status === "error" && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Error</p>
                <p className="text-gray-600 mb-4">{msg}</p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <Link 
            to="/admin/admin-event" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Events</span>
          </Link>
        </div>
        
        <div className="border-b border-[#C3C3C3] pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-1">
                Edit Event
              </h2>
              <small className="text-sm text-gray-600">
                Update the details of your event
              </small>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#E88F25]'}`}
            >
              {loading ? (
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
                  Update Event
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <div className="space-y-6 mt-6">
        {/* Event Information Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Event Information</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                Event Title *
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={eventKey.title}
                onChange={handleBlogValue}
                placeholder="Input event title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                Description *
              </label>
              <textarea
                id="desc"
                name="desc"
                value={eventKey.desc}
                onChange={handleBlogValue}
                placeholder="Enter your event description"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
                required
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Start Date *
                </label>
                <input
                  id="start_date"
                  type="text"
                  name="start_date"
                  value={eventKey.start_date}
                  onChange={handleBlogValue}
                  placeholder="Input event start date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="end_date" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  End Date *
                </label>
                <input
                  id="end_date"
                  type="text"
                  name="end_date"
                  value={eventKey.end_date}
                  onChange={handleBlogValue}
                  placeholder="Input event end date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                Time *
              </label>
              <input
                id="time"
                type="text"
                name="time"
                value={eventKey.time}
                onChange={handleBlogValue}
                placeholder="Input event time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>
        </div>

        {/* Event Cover Image Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Event Cover Image</h2>
          <p className="text-sm text-gray-600 mb-4">
            {existingImageUrl ? "Update or keep the existing cover image" : "Upload a cover image for the event (optional)"}
          </p>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px]
              ${isDragging 
                ? "border-[#FD9F2B] bg-[#FFF5EB]" 
                : imagePreview || existingImageUrl
                  ? "border-green-500 bg-green-50" 
                  : "border-gray-300 hover:border-[#FD9F2B] hover:bg-gray-50"
              }`}
          >
            {(imagePreview || existingImageUrl) ? (
              <div className="text-center">
                <div className="relative w-48 h-32 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={imagePreview || existingImageUrl}
                    alt="Event cover preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-green-600 font-medium mb-2">
                  {imagePreview ? "✓ New image selected" : "✓ Existing image"}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {eventImage?.name || "Current event image"}
                </p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <label className="cursor-pointer">
                    <span className="inline-flex items-center px-4 py-2 border border-[#FD9F2B] text-[#FD9F2B] font-medium rounded-lg hover:bg-[#FFF5EB] transition-colors">
                      {existingImageUrl ? "Change Image" : "Browse Files"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                  {(imagePreview || existingImageUrl) && (
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="inline-flex items-center px-4 py-2 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Remove Image
                    </button>
                  )}
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
          
          {existingImageUrl && !imagePreview && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-blue-700">
                  The existing cover image will be kept unless you upload a new one or click "Remove Image".
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#E88F25]'}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating Event...
            </>
          ) : (
            <>
              <img src={publish} alt="Update" className="w-5 h-5" />
              Update Event
            </>
          )}
        </button>
        
        <Link
          to="/admin-event"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditEvent;