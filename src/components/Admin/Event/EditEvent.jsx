import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useUpdateEventMutation } from "../../../redux/apiSlice";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../assets/images/publish.png";
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
  const [updateEvent] = useUpdateEventMutation();

  // Get event data from location state
  const eventData = location.state?.event;

  const initialState = {
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    time: "",
  };

  const [eventKey, setEventKey] = useState(initialState);

  // Populate form with existing data from location state
  useEffect(() => {
    if (eventData) {
      setEventKey({
        title: eventData.title || "",
        description: eventData.description || "",
        start_date: eventData.start_date || "",
        end_date: eventData.end_date || "",
        time: eventData.time || "",
      });
    }
  }, [eventData]);

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

  const handleEventUpdate = async (e) => {
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

      // Add event ID to the request
      const updateData = {
        id: location.state?.event?.id, // Assuming eventData has an id field
        ...eventData
      };

      const res = await updateEvent(updateData).unwrap();
      setStatus("success");
      setMsg(res.msg || "Event updated successfully!");
      clearMessageAfterTimeout();

      // Redirect after successful update
      setTimeout(() => {
        navigate("/admin/admin-event", { state: { refresh: true } });
      }, 1500);
    } catch (error) {
      setStatus("error");
      setMsg(
        error.data?.msg ||
          error.message ||
          "Something went wrong while updating the event."
      );
    } finally {
      setLoading(false);
    }
  };

  // Show error if no event data in location state
  if (!eventData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            No Event Data
          </h2>
          <p className="text-gray-600 mb-6">
            No event data was provided for editing.
          </p>
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
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 bg-opacity-55 z-50">
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
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Success!
                </p>
                <p className="text-gray-600 mb-4">{msg}</p>
                <p className="text-sm text-gray-500">
                  Redirecting back to events...
                </p>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Error
                </p>
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
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Description *
              </label>
              <textarea
                id="description"
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
          to="/admin/admin-event"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditEvent;