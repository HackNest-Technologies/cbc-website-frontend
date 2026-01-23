import { useState } from "react";
import { useCreateBiblePassageMutation } from "../../../../redux/apiSlice";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import publish from "../../../../assets/images/publish.png";

const AddPassage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: bibleId } = useParams(); 

  const { bible } = location.state || {};
  const [createBiblePassage, { isLoading }] = useCreateBiblePassageMutation();

  const initialState = {
    bible_reading_id: bibleId || bible?.id || "", // Use URL param or state
    content: "",
  };

  const [passageData, setPassageData] = useState(initialState);

  // Update bible_reading_id if it's not set
  useState(() => {
    if (bible?.id && !passageData.bible_reading_id) {
      setPassageData((prev) => ({ ...prev, bible_reading_id: bible.id }));
    }
  }, [bible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passageData.bible_reading_id) {
      alert("Bible reading ID is missing");
      return;
    }

    try {
      // Format data according to your API structure
      

      await createBiblePassage(passageData).unwrap();

      alert("Bible passage added successfully!");

      // Go back to the Bible reading page
      navigate(`/admin/admin-bible`, { state: { bible } });
    } catch (error) {
      console.error("Error adding Bible passage:", error);
      alert("Something went wrong while adding the Bible passage.");
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Header Section */}
      <section className="mb-8">
        <div className="mb-6">
          <Link
            to="/admin/admin-bible"
            state={bible ? { bible } : {}}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="text-xl mr-2" />
            <span>Back to {bible ? "Bible Reading" : "Bible List"}</span>
          </Link>
        </div>

        <div className="border-b border-gray-300 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Add Bible Passage
              </h1>
              <p className="text-gray-600 mt-2">
                {bible ? (
                  <>
                    Add a new passage for the reading on{" "}
                    <span className="font-medium text-[#FD9F2B]">
                      {formatDate(bible.date)}
                    </span>
                  </>
                ) : (
                  "Add a new Bible passage to the reading plan"
                )}
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
                  Adding...
                </>
              ) : (
                <>
                  <img src={publish} alt="Add" className="w-4 h-4" />
                  Add Passage
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Bible Reading Info */}
      {bible && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-800">
                Selected Bible Reading
              </h3>
              <p className="text-gray-600 text-sm">
                Date: {formatDate(bible.date)}
              </p>
              <p className="text-gray-600 text-sm">
                Current Passages: {bible.passages?.length || 0}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-[#FD9F2B]">
                ID: {bible.id}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="space-y-6">
        {/* Passage Reference Section */}

        {/* Passage Content Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider"
            >
              Passage Content *
            </label>
            <input
              type="text"
              id="content"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all min-h-[100px] resize-none"
              placeholder="Paste or type the Bible passage text here..."
              required
              value={passageData.content}
              onChange={handleInputChange}
              name="content"
              rows={8}
            />
            
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
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
              Adding Passage...
            </>
          ) : (
            <>
              <img src={publish} alt="Add" className="w-5 h-5" />
              Add Bible Passage
            </>
          )}
        </button>

        <Link
          to="/admin/admin-bible"
          state={bible ? { bible } : {}}
          className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-center"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddPassage;
