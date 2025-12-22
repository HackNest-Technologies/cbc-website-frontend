import { useState } from "react";
import {
  useGetStreamLinksQuery,
  useDeleteStreamLinkMutation,
} from "../../../redux/apiSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Loader/Spinner";
import ConfirmModal from "../ConfirmModal";
import AddBtn from "../PastSermon/AddBtn";

const ShowLiveLinks = () => {
  const navigate = useNavigate();
  const { data: streams, isLoading, error, refetch } = useGetStreamLinksQuery();
  const [deleteStreamLink] = useDeleteStreamLinkMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStream, setSelectedStream] = useState(null);

  const handleEdit = (stream) => {
    navigate("/admin/edit-livestream", { state: { stream } });
  };

  const handleDeleteClick = (stream) => {
    setSelectedStream(stream);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedStream?.id) return;

    try {
      await deleteStreamLink(selectedStream.id).unwrap();
      await refetch();
      alert("Stream deleted successfully!");
      closeModal();
    } catch (error) {
      console.error("Error deleting stream:", error);
      alert("Failed to delete stream");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStream(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg">Error loading stream links</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Live Stream Links
      </h1>

      <div className="pb-10">
        <AddBtn
          linkTo="add-livestream"
          addMsg="Add Product"
        />
      </div>
      {streams?.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No stream links found</div>
          <p className="mt-2 text-gray-600">
            Add your first stream link to get started
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {streams?.map((stream) => (
            <div
              key={stream.id}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex justify-end gap-3 pt-3 border-t">
                <button
                  onClick={() => handleEdit(stream)}
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
                  onClick={() => handleDeleteClick(stream)}
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

              <div className="space-y-4">
                {/* Video URL */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">
                    Video Stream URL
                  </h4>
                  {stream.video_url ? (
                    <div className="p-3 bg-blue-50 rounded border border-blue-100">
                      <p className="text-sm text-blue-800 break-all">
                        {stream.video_url}
                      </p>
                      <a
                        href={stream.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline mt-2 inline-block"
                      >
                        Open in new tab →
                      </a>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 italic">
                      No video URL provided
                    </p>
                  )}
                </div>

                {/* Audio URL */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">
                    Audio Stream URL
                  </h4>
                  {stream.audio_url ? (
                    <div className="p-3 bg-green-50 rounded border border-green-100">
                      <p className="text-sm text-green-800 break-all">
                        {stream.audio_url}
                      </p>
                      <a
                        href={stream.audio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-green-600 hover:underline mt-2 inline-block"
                      >
                        Open in new tab →
                      </a>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 italic">
                      No audio URL provided
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDeleteConfirm}
        warningMsg="This action cannot be undone. The stream link will be permanently removed."
        msg="Delete Stream Link?"
        subMsg={`Are you sure you want to delete stream #${selectedStream?.id}?`}
      />
    </div>
  );
};

export default ShowLiveLinks;
