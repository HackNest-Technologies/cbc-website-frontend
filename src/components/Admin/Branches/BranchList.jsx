import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import Spinner from "../../Loader/Spinner";
import {
  useGetBranchesQuery,
  useDeleteBranchMutation,
} from "../../../redux/apiSlice";

const BranchList = ({data =[]}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const navigate = useNavigate();
  const [deleteBranch] = useDeleteBranchMutation();
  const { data: branches = [], isLoading, refetch } = useGetBranchesQuery();

  const handleDelete = async () => {
    const { id } = selectedBranch;
    await deleteBranch(id).unwrap();
    await refetch();
    closeModal();
  };

  const openModal = (branch) => {
    setSelectedBranch(branch);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBranch(null);
  };

  const handleEdit = (branch) => {
    navigate("/admin/edit-branch", { state: { branch } });
  };

  const handleAddBranch = () => {
    navigate("add-branch");
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
      {/* Header with stats - Similar to BibleList */}
      <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-50 rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Church Branches</h2>
            <p className="text-gray-600">
              Manage all church branch locations and their pastors
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FD9F2B]">
                {data?.length || 0}
              </div>
              <div className="text-sm text-gray-600">Total Branches</div>
            </div>
            <button
              onClick={handleAddBranch}
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
              Add Branch
            </button>
          </div>
        </div>
      </div>

      {/* Branches Grid - Updated to match BibleList card style */}
      <div className="space-y-6">
        {data?.map((branch) => (
          <div
            key={branch.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-gray-300"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Branch Image/Icon Section */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 w-32 h-32 flex items-center justify-center border border-gray-200">
                    {branch.head_pastor_image ? (
                      <img
                        src={branch.head_pastor_image}
                        alt={branch.head_pastor_name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : branch.image ? (
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <svg
                          className="w-12 h-12 mx-auto text-[#FD9F2B]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mt-2 text-sm text-gray-700 font-medium block">
                          {branch.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Branch Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {branch.name}
                        </h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                          {branch.is_headquarters ? "Headquarters" : "Branch"}
                        </span>
                      </div>
                      
                      {/* Address */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="line-clamp-2">{branch.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Head Pastor Info */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">
                      Head Pastor
                    </h4>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      {branch.head_pastor_image && (
                        <img
                          src={branch.head_pastor_image}
                          alt={branch.head_pastor_name}
                          className="w-10 h-10 rounded-full object-cover border border-gray-300"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">
                          {branch.head_pastor_name}
                        </p>
                        {branch.head_pastor_description && (
                          <p className="text-sm text-gray-600 mt-1">
                            {branch.head_pastor_description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Using same styling as BibleList */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleEdit(branch)}
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
                    {!branch.is_headquarters && (
                      <button
                        onClick={() => openModal(branch)}
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State - Similar to BibleList */}
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
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No branches yet
          </h3>
          <p className="mt-1 text-gray-500">
            Get started by adding your first church branch location.
          </p>
          <div className="mt-6">
            <button
              onClick={handleAddBranch}
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
              Add First Branch
            </button>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This action cannot be undone. All branch data will be permanently removed."
        msg={"Delete Branch?"}
        subMsg="Are you sure you want to delete this branch? This will remove all associated data."
        confirmText="Delete Branch"
      />
    </div>
  );
};

export default BranchList;