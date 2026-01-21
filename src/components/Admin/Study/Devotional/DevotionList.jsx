import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../ConfirmModal";
import Spinner from "../../../Loader/Spinner";
import {
  useGetDailyDevotionalQuery,
  useDeleteDevotionMutation,
} from "../../../../redux/apiSlice";

const DevotionList = ({ data = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevotion, setSelectedDevotion] = useState(null);
  const navigate = useNavigate();
  const [deleteDevotion] = useDeleteDevotionMutation();
  const { isLoading, refetch } = useGetDailyDevotionalQuery();

  const handleDelete = async () => {
    const { id } = selectedDevotion;
    await deleteDevotion(id).unwrap();
    await refetch(); // Manually trigger refetch
    closeModal();
  };

  const openModal = (devotion) => {
    setSelectedDevotion(devotion);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDevotion(null);
  };

  const handleEdit = (devotion) => {
    navigate("/admin/edit-devotional", { state: { devotion } });
  };

  const handleCreate = () => {
    navigate("add-devotional");
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get day name from date
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-4 md:px-0">
      {/* Header with stats */}
      <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Daily Devotions
            </h2>
            <p className="text-gray-600">Manage all daily devotional content</p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FD9F2B]">
                {data?.length || 0}
              </div>
              <div className="text-sm text-gray-600">Total Devotions</div>
            </div>
            <button
              onClick={handleCreate}
              className="flex items-center gap-2 px-6 py-3 bg-[#FD9F2B] text-white font-medium rounded-lg hover:bg-[#E88F27] transition-colors shadow-sm hover:shadow"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Devotional{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Devotions Grid/List */}
      <div className="space-y-6">
        {data?.map((devotion) => (
          <div
            key={devotion.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-orange-100"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Date Section */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 w-32 text-center border border-orange-200">
                    <div className="text-sm text-[#FD9F2B] font-semibold uppercase tracking-wide">
                      {getDayName(devotion.date)}
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mt-2">
                      {new Date(devotion.date).getDate()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {new Date(devotion.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                {/* Devotion Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-2xl text-gray-800 mb-2">
                        {devotion.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                          className="w-4 h-4"
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
                        <span>{formatDate(devotion.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Devotion Body */}
                  <div className="mb-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {devotion.body.length > 300
                          ? `${devotion.body.substring(0, 300)}...`
                          : devotion.body}
                      </p>
                    </div>
                    {devotion.body?.length > 300 && (
                      <button
                        onClick={() => {
                          // You could implement a modal to show full text
                          alert(devotion.body);
                        }}
                        className="text-[#FD9F2B] text-sm hover:underline mt-2 flex items-center gap-1 hover:text-[#E88F27] transition-colors"
                      >
                        Read full devotion
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleEdit(devotion)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </button>

                    <button
                      onClick={() => openModal(devotion)}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-700 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {data?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center border border-orange-100">
            <svg
              className="w-12 h-12 text-[#FD9F2B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No devotions yet
          </h3>
          <p className="mt-1 text-gray-500">
            Get started by creating your first daily devotion.
          </p>
          <div className="mt-6">
            <button
              onClick={handleCreate}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FD9F2B] text-white font-medium rounded-lg hover:bg-[#E88F27] transition-colors shadow-sm hover:shadow"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create Devotion
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This action cannot be undone. The devotion will be permanently removed."
        msg="Delete Devotion?"
        subMsg={`Are you sure you want to delete "${selectedDevotion?.title}" devotion for ${selectedDevotion?.date ? formatDate(selectedDevotion.date) : "this date"}?`}
      />
    </div>
  );
};

export default DevotionList;
