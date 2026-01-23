import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import Spinner from "../../Loader/Spinner";
import {
  useGetFellowshipQuery,
  useDeleteFellowshipMutation,
} from "../../../redux/apiSlice";

const FellowshipList = ({ data = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFellowship, setSelectedFellowship] = useState(null);
  const navigate = useNavigate();
  const [deleteFellowship] = useDeleteFellowshipMutation();
  const { isLoading } = useGetFellowshipQuery();

  const handleDelete = async () => {
    const { id } = selectedFellowship;
    await deleteFellowship(id).unwrap();
    closeModal();
  };

  const openModal = (fellowship) => {
    setSelectedFellowship(fellowship);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFellowship(null);
  };

  const handleEdit = (fellowship) => {
    navigate("/admin/edit-fellowship", { state: { fellowship } });
  };

  const handleAddFellowship = () => {
    navigate("add-fellowship");
  };

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
      <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-50 rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Fellowships</h2>
            <p className="text-gray-600">
              Manage all church fellowship groups and their coordinators
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FD9F2B]">
                {data?.length || 0}
              </div>
              <div className="text-sm text-gray-600">Total Fellowships</div>
            </div>
            <button
              onClick={handleAddFellowship}
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
              Add Fellowship
            </button>
          </div>
        </div>
      </div>

      {/* Fellowships Grid */}
      <div className="space-y-6">
        {data?.map((fellowship) => (
          <div
            key={fellowship.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-gray-300"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Fellowship Icon Section */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 w-32 h-32 flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-[#FD9F2B]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="mt-2 text-sm text-gray-700 font-medium block">
                        {fellowship.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fellowship Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {fellowship.name}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          Fellowship
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coordinator Information */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">
                      Coordinator Information
                    </h4>
                    <div className="space-y-4">
                      {/* Coordinator Name */}
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <svg
                          className="w-5 h-5 text-[#FD9F2B] mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">Name</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {fellowship.coordinator_name || "Not specified"}
                          </p>
                        </div>
                      </div>

                      {/* Coordinator Phone */}
                      <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <svg
                          className="w-5 h-5 text-[#FD9F2B] mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">Phone Number</p>
                          <p className="text-sm text-gray-600 mt-1">
                            {fellowship.coordinator_phone || "Not specified"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleEdit(fellowship)}
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
                      onClick={() => openModal(fellowship)}
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
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border border-gray-200">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No fellowships yet
          </h3>
          <p className="mt-1 text-gray-500">
            Get started by adding your first fellowship group.
          </p>
          <div className="mt-6">
            <button
              onClick={handleAddFellowship}
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
              Add First Fellowship
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This action cannot be undone. All fellowship data will be permanently removed."
        msg={"Delete Fellowship?"}
        subMsg="Are you sure you want to delete this fellowship? This will remove all associated data."
        confirmText="Delete Fellowship"
      />
    </div>
  );
};

export default FellowshipList;