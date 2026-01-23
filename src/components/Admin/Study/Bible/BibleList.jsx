import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../Loader/Spinner";
import ConfirmModal from "../../ConfirmModal";
import CreateBibleModal from "./ CreateBibleModal";
import EditBibleModal from "./EditBibleModal"; // Import the new modal

import {
  useGetBibleInOneYearQuery,
  useDeleteBibleMutation,
} from "../../../../redux/apiSlice";

const BibleList = ({ data = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // New state for create modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // New state for edit modal

  const [selectedBible, setSelectedBible] = useState(null);
  const navigate = useNavigate();
  const [deleteBible] = useDeleteBibleMutation();
  const { isLoading, refetch } = useGetBibleInOneYearQuery();

  const handleDelete = async () => {
    const { id } = selectedBible;
    await deleteBible(id).unwrap();
    await refetch(); // Manually trigger refetch
    closeModal();
  };

  const openModal = (bible) => {
    setSelectedBible(bible);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBible(null);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openEditModal = (bible) => {
    setSelectedBible(bible);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedBible(null);
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

  // Get day number from the year (1-365)
  const getDayNumber = (dateString) => {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = new Date(dateString) - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
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
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Bible in One Year
            </h2>
            <p className="text-gray-600">
              Manage daily Bible reading plan with passages
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FD9F2B]">
                {data?.length || 0}
              </div>
              <div className="text-sm text-gray-600">Total Readings</div>
            </div>
            <button
              onClick={openCreateModal} // Change to open modal
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
              Create Date
            </button>
          </div>
        </div>
      </div>

      {/* Bible Reading List */}
      <div className="space-y-6">
        {data?.map((bible) => (
          <div
            key={bible.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-blue-100"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Date Section */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 w-32 text-center border border-blue-200">
                    <div className="text-sm text-[#FD9F2B] font-semibold uppercase tracking-wide">
                      Day {getDayNumber(bible.date)}
                    </div>
                    <div className="text-xs text-blue-600 mb-2">
                      {getDayName(bible.date)}
                    </div>
                    <div className="text-3xl font-bold text-gray-800">
                      {new Date(bible.date).getDate()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {new Date(bible.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                  </div>
                </div>

                {/* Bible Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
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
                        <span>{formatDate(bible.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Passages Section */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">
                      Today's Reading
                    </h3>
                    <div className="space-y-3">
                      {bible.passages?.map((passage, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <svg
                            className="w-5 h-5 text-[#FD9F2B] mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <p className="text-gray-700">{passage.content}</p>
                            {passage.notes && (
                              <p className="text-sm text-gray-500 mt-1">
                                <span className="font-medium">Notes: </span>
                                {passage.notes}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total Passages Info */}
                    <div className="mt-4 flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2"
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
                      <span>
                        {bible.passages?.length || 0}
                        {bible.passages?.length === 1 ? "passage" : "passages"}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <button
                      // onClick={() => handleEdit(bible)}
                      onClick={() => openEditModal(bible)} 
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
                      onClick={() => openModal(bible)}
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
                    {/* Add Bible passage */}
                    <button
                      onClick={() => {
                        navigate(`add-passage/${bible.id}`, {
                          state: { bible },
                        });
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#FD9F2B] bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
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
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add Bible Passage
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
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100">
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No Bible readings yet
          </h3>
          <p className="mt-1 text-gray-500">
            Get started by creating your first daily Bible reading plan.
          </p>
          <div className="mt-6">
            <button
              onClick={openCreateModal} // Change to open modal
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
              Create Reading
            </button>
          </div>
        </div>
      )}

      {/* Create Bible Modal */}
      {isCreateModalOpen && (
        <CreateBibleModal
          isOpen={isCreateModalOpen}
          onClose={closeCreateModal}
          onSuccess={() => {
            closeCreateModal();
            refetch(); // Refresh the list after creation
          }}
        />
      )}

      {/* Edit Bible Modal */}
      {isEditModalOpen && (
        <EditBibleModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          bible={selectedBible}
          onSuccess={() => {
            closeEditModal();
            refetch(); // Refresh the list after update
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This action cannot be undone. The Bible reading entry will be permanently removed."
        msg="Delete Bible Reading?"
        subMsg={`Are you sure you want to delete the Bible reading for ${selectedBible?.date ? formatDate(selectedBible.date) : "this date"}?`}
      />
    </div>
  );
};

export default BibleList;
