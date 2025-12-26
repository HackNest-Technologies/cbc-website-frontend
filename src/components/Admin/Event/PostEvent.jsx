import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import publish from "../../../assets/images/publish.png";
import { useCreateEventMutation } from "../../../redux/apiSlice";
import { FaArrowLeft } from "react-icons/fa6";
import BarLoader from "react-spinners/BarLoader";
import { useState } from "react";

const override = {
  display: "block",
  margin: "2px auto",
};

const PostEvent = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [createEvent] = useCreateEventMutation();

  const initialState = {
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    time: "",
  };

  const [eventKey, setEventKey] = useState(initialState);

  const handleBlogValue = (e) => {
    const { name, value } = e.target;
    setEventKey((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setStatus(null);
      setMsg("");
    }, 2000);
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare data according to API structure
      const eventData = {
        event: {
          title: eventKey.title,
          description: eventKey.description,
          time: eventKey.time,
          start_date: eventKey.start_date,
          end_date: eventKey.end_date
        }
      };

      // Send data as JSON
      const res = await createEvent(eventData).unwrap();
      setStatus("success");
      setMsg(res.msg || "Event created successfully!");
      clearMessageAfterTimeout();

      // Reset form
      setEventKey(initialState);

      // Navigate back to events page
      navigate("/admin/admin-event", { state: { refresh: true } });
    } catch (error) {
      setStatus("reject");
      setMsg(error.msg || error.data?.msg || "Something went wrong while creating the event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleEventSubmit} className="pb-20">
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-50 bg-opacity-55">
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
          <div>
            <div className="px-6 pb-4 fixed inset-0 flex justify-center flex-col items-center bg-slate-200">
              <div className="bg-white shadow-lg">
                <p className="text-base p-2 text-black font-spartan font-medium md:text-xl">
                  {msg}
                </p>
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
                Create New Event
              </h2>
              <small className="text-sm text-gray-600">
                Fill in the details of the Event you want to create
              </small>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#E88F25]"
                }`}
            >
              {loading ? (
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
                  Publish Event
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
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Event Information
          </h2>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
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
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Description *
              </label>
              <textarea
                id="desc"
                name="description"
                value={eventKey.description}
                onChange={handleBlogValue}
                placeholder="Enter your event description"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
                required
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="start_date"
                  className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
                >
                Start Date *
              </label>
              <input
                id="start_date"
                type="date"
                name="start_date"
                value={eventKey.start_date}
                onChange={handleBlogValue}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="end_date"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                End Date *
              </label>
              <input
                id="end_date"
                type="date"
                name="end_date"
                value={eventKey.end_date}
                onChange={handleBlogValue}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
            >
              Time *
            </label>
            <input
              id="time"
              type="text"
              name="time"
              value={eventKey.time}
              onChange={handleBlogValue}
              placeholder="e.g., 2:00 PM - 4:00 PM or 14:00-16:00"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter time in any format (e.g., "2:00 PM - 4:00 PM", "14:00-16:00", "All day")
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E88F25]"
            }`}
        >
          {loading ? (
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
              Creating Event...
            </>
          ) : (
            <>
              <img src={publish} alt="Publish" className="w-5 h-5" />
              Publish Event
            </>
          )}
        </button>

        <Link
          to="/admin/admin-event"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default PostEvent;