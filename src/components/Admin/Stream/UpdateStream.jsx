import { useState, useEffect } from "react";
import { useUpdateLiveStreamMutation } from "../../../redux/apiSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const UpdateStream = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stream = location.state?.stream;
  
  const [updateStreamLink, { isLoading }] = useUpdateLiveStreamMutation();
  
  const initialState = {
    video_url: "",
    audio_url: "",
  };

  const [streamData, setStreamData] = useState(initialState);

  useEffect(() => {
    if (stream) {
      setStreamData({
        video_url: stream.video_url || "",
        audio_url: stream.audio_url || "",
      });
    }
  }, [stream]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStreamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stream?.id) {
      alert("Stream data not found!");
      return;
    }

    const formData = new FormData();
    formData.append("livestream[video_url]", streamData.video_url);
    formData.append("livestream[audio_url]", streamData.audio_url);

    try {
      await updateStreamLink({ 
        id: stream.id, 
        stream: formData 
      }).unwrap();
      
      alert("Stream updated successfully!");
      navigate("/streams");
      
    } catch (error) {
      console.error("Error updating stream:", error);
      alert("Something went wrong while updating the stream.");
    }
  };

  if (!stream) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600">No stream data found for editing.</p>
        <Link 
          to="/admin-livestream" 
          className="mt-4 text-[#FD9F2B] hover:underline"
        >
          Back to Streams
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section - Same as ShowLiveLinks */}
      <section className="mb-8">
        <div className="mb-6">
          <Link 
          to="/admin-livestream" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Streams</span>
          </Link>
        </div>
        
        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Edit Stream #{stream.id}
              </h1>
              <p className="text-gray-600 mt-2">
                Update the video and audio stream links
              </p>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#E88F25]'}`}
            >
              {isLoading ? "Updating..." : "Update Stream"}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content - Same as AddStreamLink but with existing data */}
      <div className="space-y-6">
        {/* Video URL */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <label 
            htmlFor="video_url" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Video Stream URL
          </label>
          <input
            id="video_url"
            type="url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="https://youtube.com/live/..."
            value={streamData.video_url}
            onChange={handleInputChange}
            name="video_url"
          />
        </div>

        {/* Audio URL */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <label 
            htmlFor="audio_url" 
            className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
          >
            Audio Stream URL (Optional)
          </label>
          <input
            id="audio_url"
            type="url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
            placeholder="https://stream.example.com/audio"
            value={streamData.audio_url}
            onChange={handleInputChange}
            name="audio_url"
          />
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
          {isLoading ? "Updating..." : "Update Stream"}
        </button>
        
        <Link
          to="/streams"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default UpdateStream;