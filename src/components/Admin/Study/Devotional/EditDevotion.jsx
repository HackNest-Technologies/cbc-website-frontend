import { useState, useEffect } from "react";
import { useUpdateDevotionalMutation } from "../../../../redux/apiSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../../assets/images/publish.png";

const EditDevotion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [updateDevotional, { isLoading }] = useUpdateDevotionalMutation();

  const { devotion } = location.state || {};

  const [devotionData, setDevotionData] = useState({
    date: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    if (devotion) {
      setDevotionData({
        date: devotion.date || "",
        title: devotion.title || "",
        body: devotion.body || "",
      });
    }
  }, [devotion]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDevotionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!devotion?.id) {
      alert("No devotion selected for editing");
      return;
    }

    try {
      await updateDevotional({
        id: devotion.id,
        devotional: devotionData,
      }).unwrap();

      alert("Devotion updated successfully!");
      navigate("/admin/admin-devotional");
    } catch (error) {
      console.error("Error updating devotion:", error);
      alert("Something went wrong while updating the devotion.");
    }
  };

  if (!devotion) {
    return (
      <div className="p-8 text-center">
        <div className="text-red-600 mb-4">No devotion data found</div>
        <Link
          to="/admin/admin-devotional"
          className="inline-flex items-center text-[#FD9F2B] hover:text-[#E88F25]"
        >
          <FaArrowLeft className="mr-2" />
          Back to Devotionals
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
            to="/admin/admin-devotional"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to Devotionals</span>
          </Link>
        </div>

        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Edit Devotional
              </h1>
              <p className="text-gray-600 mt-2">
                Update the details of this daily devotional
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 w-full md:w-auto
                ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E88F25]"}`}
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
                  Updating...
                </>
              ) : (
                <>
                  <img src={publish} alt="Update" className="w-4 h-4" />
                  Update Devotion
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-6">
            Devotion Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Date *
              </label>
              <div className="relative">
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                  required
                  value={devotionData.date}
                  onChange={handleInputChange}
                  name="date"
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
              >
                Title *
              </label>
              <input
                id="title"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all"
                placeholder="Enter devotion title"
                required
                value={devotionData.title}
                onChange={handleInputChange}
                name="title"
              />
              <p className="mt-2 text-xs text-gray-500">
                {devotionData.title.length}/100 characters
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="mb-6">
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
            >
              Main Content *
            </label>
            <textarea
              id="body"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[300px] resize-none"
              placeholder="Write the main devotion content here..."
              required
              value={devotionData.body}
              onChange={handleInputChange}
              name="body"
              rows={12}
            />
            <div className="flex justify-end items-center mt-2">
              <p className="text-xs text-gray-500">
                {devotionData.body.length}/5000 characters
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex items-center justify-center gap-2 bg-[#FD9F2B] text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1
            ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E88F25]"}`}
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
              Updating Devotion...
            </>
          ) : (
            <>
              <img src={publish} alt="Update" className="w-5 h-5" />
              Update Devotional
            </>
          )}
        </button>

        <Link
          to="/admin/admin-devotional"
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default EditDevotion;