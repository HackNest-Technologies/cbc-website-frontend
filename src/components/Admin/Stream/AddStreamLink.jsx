import { useState } from "react";
import { useUploadLiveStreamMutation } from "../../../redux/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";

const AddStreamLink = () => {
  const navigate = useNavigate();
  const [uploadLiveStream, { isLoading }] = useUploadLiveStreamMutation();

  // Initial state based on API structure
  const initialState = {
    video_url: "",
    audio_url: "",
  };

  const [streamData, setStreamData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStreamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data according to API structure
    const formData = new FormData();

    // Append fields
    formData.append("livestream[video_url]", streamData.video_url);
    formData.append("livestream[audio_url]", streamData.audio_url);

    try {
      await uploadLiveStream(formData).unwrap();

      // Reset form
      setStreamData(initialState);

      alert("Stream link added successfully!");

      // Redirect to streams page or dashboard
    } catch (error) {
      console.error("Error adding stream link:", error);
      alert("Something went wrong while adding the stream link.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link
            to="/admin-streams"
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
                Add Live Stream Link
              </h1>
              <p className="text-gray-600 mt-2">
                Add video and audio stream links for live services
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
                  Adding...
                </>
              ) : (
                <>
                  <img src={publish} alt="Publish" className="w-4 h-4" />
                  Add Stream Link
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Video URL */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Video Stream
          </h2>

          <div className="mb-4">
            <label
              htmlFor="video_url"
              className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
            >
              Video Stream URL *
            </label>
            <input
              id="video_url"
              type="url"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
              placeholder="https://youtube.com/live/... or https://facebook.com/live/..."
              required
              value={streamData.video_url}
              onChange={handleInputChange}
              name="video_url"
            />
            <p className="text-xs text-gray-500 mt-2">
              Enter the full URL for the video stream
            </p>
          </div>
        </div>

        {/* Audio URL */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Audio Stream
          </h2>
          <div className="mb-4">
            <label
              htmlFor="audio_url"
              className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
            >
              Audio Stream URL (Optional)
            </label>
            <input
              id="audio_url"
              required
              type="url"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
              placeholder="https://stream.example.com/audio or RTSP link"
              value={streamData.audio_url}
              onChange={handleInputChange}
              name="audio_url"
            />
            <p className="text-xs text-gray-500 mt-2">
              Optional: Enter URL for audio-only stream (for radio/podcast)
            </p>
          </div>{" "}
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
              Adding Stream Link...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Add Stream Link
            </>
          )}
        </button>

        <Link
          to="/admin-streams"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddStreamLink;
