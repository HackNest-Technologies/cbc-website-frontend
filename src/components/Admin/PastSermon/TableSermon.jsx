import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import Spinner from "../../Loader/Spinner";
import {
  useGetPastSermonQuery,
  useDeletePastSermonMutation,
} from "../../../redux/apiSlice";

const TableSermon = ({ data = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPastSermon, setSelectedPastSermon] = useState(null);
  const navigate = useNavigate();
  const [deletepastSermon] = useDeletePastSermonMutation();
  const { isLoading, refetch } = useGetPastSermonQuery();

  const handleDelete = async () => {
    const { id } = selectedPastSermon;
    await deletepastSermon(id).unwrap();
    await refetch(); // Manually trigger refetch
    closeModal();
  };

  const openModal = (pastSermon) => {
    setSelectedPastSermon(pastSermon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPastSermon(null);
  };

  const handleEdit = (pastSermon) => {
    navigate("/admin/edit-pastsermon", { state: { pastSermon } });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;

    let videoId = "";

    // youtu.be/VIDEO_ID
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }

    // youtube.com/watch?v=VIDEO_ID
    else if (url.includes("watch?v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    }

    // youtube.com/shorts/VIDEO_ID
    else if (url.includes("shorts/")) {
      videoId = url.split("shorts/")[1]?.split("?")[0];
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  console.log(data, "Get pastsermon data ");

  return (
    <div className="p-4 md:px-0">
      {/* Video pastSermons Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {data?.map((pastSermon) => (
          <div
            key={pastSermon.id}
            className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Video Thumbnail/Player */}
            <div className="relative pt-[56.25%] bg-gray-900">
              {getYouTubeEmbedUrl(pastSermon.video_url) ? (
                <iframe
                  src={getYouTubeEmbedUrl(pastSermon.video_url)}
                  className="absolute inset-0 w-full h-full"
                  title={pastSermon.series_title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : pastSermon.cover_image ? (
                <img
                  src={pastSermon.cover_image}
                  alt={pastSermon.series_title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* pastSermon Details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                    {pastSermon.series_title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {new Date(pastSermon.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full whitespace-nowrap">
                  {pastSermon.minister}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  onClick={() => handleEdit(pastSermon)}
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
                  onClick={() => openModal(pastSermon)}
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
        ))}
      </div>

      {/* Empty State */}
      {data?.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No video pastSermons yet
          </h3>
          <p className="mt-1 text-gray-500">
            Get started by adding your first video pastSermon.
          </p>
          ``
        </div>
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        warningMsg="This can't be undone, this blog post would be removed from the blog"
        msg={"Delete Video pastSermon?"}
        subMsg="This action cannot be undone. The video will be permanently removed."
      />
    </div>
  );
};

export default TableSermon;
