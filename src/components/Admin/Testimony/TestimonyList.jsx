

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import Spinner from "../../Loader/Spinner";
import {
  useGetTestimoniesQuery,
  useDeleteTestimonyMutation,
} from "../../../redux/apiSlice";

const TestimonyList = ({ data = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const navigate = useNavigate();
  const [deleteTestimony] = useDeleteTestimonyMutation();
  const { isLoading, refetch } = useGetTestimoniesQuery();
  console.log(data,"View the reason why get testimonies is not working")

  const handleDelete = async () => {
    const { id } = selectedTestimony;
    await deleteTestimony(id).unwrap();
    await refetch(); // Manually trigger refetch
    closeModal();
  };

  const openModal = (testimony) => {
    setSelectedTestimony(testimony);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setSelectedTestimony(null);
  };

  const handleEdit = (testimony) => {
    navigate("/admin/edit-testimony", { state: { testimony } });
  };

 

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  console.log(data, "Get testimonies data");

  return (
    <div className="p-4 md:px-0">
      {/* Header with stats */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Testimonies</h2>
            <p className="text-gray-600">
              Manage all testimonies submitted by users
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {data?.length || 0}
              </div>
              <div className="text-sm text-gray-600">Total Testimonies</div>
            </div>
           
          </div>
        </div>
      </div>

      {/* Testimonies Grid/List */}
      <div className="space-y-6  grid grid-cols-3 gap-3">
        {data?.map((testimony) => (
          <div
            key={testimony.id}
            className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all hover:shadow-md ${
              testimony.featured ? "border-l-4 border-l-yellow-400" : ""
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Testifier Info & Image */}
                <div className="flex-shrink-0">
                  {testimony.file ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                      <img
                        src={testimony.file}
                        alt={`${testimony.testifier_first_name} ${testimony.testifier_last_name}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/100?text=No+Image";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center border-2 border-gray-200">
                      <span className="text-2xl font-bold text-blue-600">
                        {testimony.testifier_last_name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Testimony Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">
                        {testimony.testifier_first_name}
                        {testimony.testifier_last_name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {testimony.testifier_email_address}
                      </p>
                      {testimony.featured && (
                        <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      )}
                    </div>
                   
                  </div>

                  {/* Testimony Body */}
                  <div className="mb-4">
                    <p className="text-gray-700 line-clamp-3">
                      {testimony.body}
                    </p>
                    {testimony.body?.length > 200 && (
                      <button
                        onClick={() => {
                          // You could implement a modal to show full text
                          alert(testimony.body);
                        }}
                        className="text-blue-600 text-sm hover:underline mt-2"
                      >
                        Read more
                      </button>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    

                    <button
                      onClick={() => handleEdit(testimony)}
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
                      onClick={() => openModal(testimony)}
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
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No testimonies yet
          </h3>
          <p className="mt-1 text-gray-500">
            No testimonies have been submitted yet.
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/create-testimony")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
              Create Testimony
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This action cannot be undone. The testimony will be permanently removed."
        msg="Delete Testimony?"
        subMsg={`Are you sure you want to delete ${selectedTestimony?.testifier_first_name} ${selectedTestimony?.testifier_last_name}'s testimony?`}
      />
    </div>
  );
};

export default TestimonyList;
