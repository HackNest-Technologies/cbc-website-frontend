// import { useState, useRef } from "react";
// import sermonBanner from "../../assets/images/service-banner.png";
// import { IoPlaySharp } from "react-icons/io5";
// import { useGetPastSermonQuery } from "../../redux/apiSlice";
// import Pagination from "../shared/Pagination";
// import Spinner from "../Loader/Spinner";

// // Helper function to get YouTube thumbnail or embed URL
// const getYouTubeThumbnail = (url) => {
//   if (!url) return null;

//   let videoId = "";

//   // youtu.be/VIDEO_ID
//   if (url.includes("youtu.be")) {
//     videoId = url.split("youtu.be/")[1]?.split("?")[0];
//   }
//   // youtube.com/watch?v=VIDEO_ID
//   else if (url.includes("watch?v=")) {
//     videoId = url.split("v=")[1]?.split("&")[0];
//   }
//   // youtube.com/shorts/VIDEO_ID
//   else if (url.includes("shorts/")) {
//     videoId = url.split("shorts/")[1]?.split("?")[0];
//   }
//   // youtube.com/embed/VIDEO_ID
//   else if (url.includes("embed/")) {
//     videoId = url.split("embed/")[1]?.split("?")[0];
//   }

//   if (!videoId) return null;

//   // Return highest quality thumbnail
//   return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
// };

// const getYouTubeEmbedUrl = (url) => {
//   if (!url) return null;

//   let videoId = "";

//   // youtu.be/VIDEO_ID
//   if (url.includes("youtu.be")) {
//     videoId = url.split("youtu.be/")[1]?.split("?")[0];
//   }
//   // youtube.com/watch?v=VIDEO_ID
//   else if (url.includes("watch?v=")) {
//     videoId = url.split("v=")[1]?.split("&")[0];
//   }
//   // youtube.com/shorts/VIDEO_ID
//   else if (url.includes("shorts/")) {
//     videoId = url.split("shorts/")[1]?.split("?")[0];
//   }

//   return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
// };

// // Individual Sermon Card Component
// const SermonItem = ({ sermon }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [imageError, setImageError] = useState(false);

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handleClose = () => {
//     setIsPlaying(false);
//   };

//   const youtubeThumbnail = sermon.video_url
//     ? getYouTubeThumbnail(sermon.video_url)
//     : null;
//   const youtubeEmbedUrl = sermon.video_url
//     ? getYouTubeEmbedUrl(sermon.video_url)
//     : null;

//   // Format date from "2025-10-10" to "October 13, 2025" format
//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       });
//     } catch (error) {
//       return "Invalid date";
//     }
//   };

//   return (
//     <div className="w-[100%] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       {/* Video/Image Container */}
//       <div className="relative aspect-video bg-gray-900">
//         {isPlaying && youtubeEmbedUrl ? (
//           // YouTube Iframe when playing
//           <div className="relative w-full h-full">
//             <button
//               onClick={handleClose}
//               className="absolute top-2 right-2 z-10 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90"
//               aria-label="Close video"
//             >
//               ✕
//             </button>
//             <iframe
//               src={youtubeEmbedUrl}
//               className="w-full h-full"
//               title={sermon.series_title || "Sermon Video"}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               frameBorder="0"
//             />
//           </div>
//         ) : (
//           // Thumbnail with play button
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${
//                 !imageError && youtubeThumbnail
//                   ? youtubeThumbnail
//                   : sermon.cover_image || sermonBanner
//               })`,
//             }}
//           >
//             <img
//               src={
//                 !imageError && youtubeThumbnail
//                   ? youtubeThumbnail
//                   : sermon.cover_image || sermonBanner
//               }
//               alt={sermon.series_title || "Sermon thumbnail"}
//               className="hidden"
//               onError={() => setImageError(true)}
//             />

//             {/* Play Button Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//               <button
//                 onClick={handlePlay}
//                 className="w-20 h-20 rounded-full bg-black bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all transform hover:scale-105 group"
//                 aria-label="Play sermon video"
//                 disabled={!youtubeEmbedUrl}
//               >
//                 <IoPlaySharp className="text-white text-[25px] ml-1" />
//                 {!youtubeEmbedUrl && (
//                   <span className="absolute -top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                     Video unavailable
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Sermon Details */}
//       <div className="w-full">
//         <div className="px-6 py-4">
//           <div className="flex items-center min-h-[60px]">
//             <h2 className="text-[#000000] font-inter font-semibold text-[24px] leading-[120%] capitalize line-clamp-2">
//               {sermon.series_title || "Sermon Title"}
//             </h2>
//           </div>

//           <div className="flex justify-between items-center py-3 border-t border-b border-[#DADADA] mt-3">
//             <p className="text-base font-inter font-medium text-gray-600">
//               Series:
//             </p>
//             <p className="text-base font-inter text-gray-800 text-right max-w-[60%] line-clamp-1">
//               {sermon.series_title || "Series Title"}
//             </p>
//           </div>

//           <div className="flex justify-between items-center py-3">
//             <p className="text-base font-inter text-gray-700">
//               {sermon.date ? formatDate(sermon.date) : "Date not available"}
//             </p>
//             <p className="text-base font-inter text-gray-800 text-right max-w-[60%] line-clamp-1">
//               {sermon.minister || "Minister's Name"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main SermonCard Component
// const SermonCard = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Use the actual API query with pagination
//   const {
//     data: sermonsResponse,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useGetPastSermonQuery({
//     page: currentPage,
//     per_page: itemsPerPage,
//   });

//   // Handle pagination change
//   const handlePageChange = (newPage) => {
//     if (newPage >= 1) {
//       setCurrentPage(newPage);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Extract sermons from response
//   let sermons = [];
//   let totalPages = 1;
//   let totalSermons = 0;

//   if (sermonsResponse) {
//     if (Array.isArray(sermonsResponse)) {
//       sermons = sermonsResponse;
//       totalSermons = sermonsResponse.length;
//       totalPages = Math.ceil(totalSermons / itemsPerPage);
//     } else if (sermonsResponse.data && Array.isArray(sermonsResponse.data)) {
//       sermons = sermonsResponse.data;
//       totalSermons = sermonsResponse.total || sermons.length;
//       totalPages =
//         sermonsResponse.total_pages || Math.ceil(totalSermons / itemsPerPage);
//     }
//   }

//   // Loading state
//   if (isLoading) {
//     return (
//       <section className="container mx-auto px-6 md:px-0 min-h-[400px] flex flex-col items-center justify-center">
//         <Spinner />
//       </section>
//     );
//   }

//   // Error state
//   if (isError) {
//     console.error("Error fetching sermons:", error);
//     return (
//       <section className="container mx-auto px-6 md:px-0 min-h-[400px] flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto">
//           <p className="text-red-500 text-lg mb-2">Error loading sermons</p>
//           <p className="text-gray-600 mb-4">
//             {error?.data?.message || "Please try again later"}
//           </p>
//           <button
//             onClick={refetch}
//             className="px-6 py-2 bg-[#F3A900] text-white rounded-lg hover:bg-[#e09900] transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </section>
//     );
//   }

//   // Empty state
//   if (!sermons || sermons.length === 0) {
//     return (
//       <section className="container mx-auto px-6 md:px-0">
//         <div className="text-center py-12">
//           <svg
//             className="w-16 h-16 mx-auto text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
//             />
//           </svg>
//           <h3 className="mt-4 text-lg font-medium text-gray-900">
//             No sermons available
//           </h3>
//           <p className="mt-1 text-gray-500">
//             Check back later for new sermons.
//           </p>
//           <button
//             onClick={refetch}
//             className="mt-4 px-6 py-2 bg-[#F3A900] text-white rounded-lg hover:bg-[#e09900] transition-colors"
//           >
//             Refresh
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section className="container mx-auto px-6 md:px-0">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sermons.map((sermon) => (
//             <SermonItem key={sermon.id || sermon._id} sermon={sermon} />
//           ))}
//         </div>
//       </section>

//       <div className="mt-12">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </>
//   );
// };

// export default SermonCard;

import { useState, useEffect } from "react";
import sermonBanner from "../../assets/images/service-banner.png";
import { IoPlaySharp } from "react-icons/io5";
import { useGetPastSermonQuery } from "../../redux/apiSlice";
import Pagination from "../shared/Pagination";
import Spinner from "../Loader/Spinner";

// Helper function to get YouTube thumbnail or embed URL
const getYouTubeThumbnail = (url) => {
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
  // youtube.com/embed/VIDEO_ID
  else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1]?.split("?")[0];
  }

  if (!videoId) return null;

  // Return highest quality thumbnail
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

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

  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
};

// Individual Sermon Card Component
const SermonItem = ({ sermon }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  const youtubeThumbnail = sermon.video_url
    ? getYouTubeThumbnail(sermon.video_url)
    : null;
  const youtubeEmbedUrl = sermon.video_url
    ? getYouTubeEmbedUrl(sermon.video_url)
    : null;

  // Format date from "2025-10-10" to "October 13, 2025" format
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  return (
    <div className="w-[100%] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Video/Image Container */}
      <div className="relative aspect-video bg-gray-900">
        {isPlaying && youtubeEmbedUrl ? (
          // YouTube Iframe when playing
          <div className="relative w-full h-full">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 z-10 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              src={youtubeEmbedUrl}
              className="w-full h-full"
              title={sermon.series_title || "Sermon Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        ) : (
          // Thumbnail with play button
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                !imageError && youtubeThumbnail
                  ? youtubeThumbnail
                  : sermon.cover_image || sermonBanner
              })`,
            }}
          >
            <img
              src={
                !imageError && youtubeThumbnail
                  ? youtubeThumbnail
                  : sermon.cover_image || sermonBanner
              }
              alt={sermon.series_title || "Sermon thumbnail"}
              className="hidden"
              onError={() => setImageError(true)}
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                onClick={handlePlay}
                className="w-20 h-20 rounded-full bg-black bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all transform hover:scale-105 group"
                aria-label="Play sermon video"
                disabled={!youtubeEmbedUrl}
              >
                <IoPlaySharp className="text-white text-[25px] ml-1" />
                {!youtubeEmbedUrl && (
                  <span className="absolute -top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Video unavailable
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sermon Details */}
      <div className="w-full">
        <div className="px-6 py-4">
          <div className="flex items-center min-h-[60px]">
            <h2 className="text-[#000000] font-inter font-semibold text-[24px] leading-[120%] capitalize line-clamp-2">
              {sermon.series_title || "Sermon Title"}
            </h2>
          </div>

          <div className="flex justify-between items-center py-3 border-t border-b border-[#DADADA] mt-3">
            <p className="text-base font-inter font-medium text-gray-600">
              Series:
            </p>
            <p className="text-base font-inter text-gray-800 text-right max-w-[60%] line-clamp-1">
              {sermon.series_title || "Series Title"}
            </p>
          </div>

          <div className="flex justify-between items-center py-3">
            <p className="text-base font-inter text-gray-700">
              {sermon.date ? formatDate(sermon.date) : "Date not available"}
            </p>
            <p className="text-base font-inter text-gray-800 text-right max-w-[60%] line-clamp-1">
              {sermon.minister || "Minister's Name"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main SermonCard Component with Search Support
const SermonCard = ({ searchQuery = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Use the API query with pagination AND search
  const {
    data: sermonsResponse,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPastSermonQuery({
    page: currentPage,
    per_page: itemsPerPage,
    q: searchQuery, // Add search query parameter
  });

    console.log(sermonsResponse,"sermns reponse")


  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Show search indicator
  const showSearchIndicator = searchQuery.trim() !== "";

  // Extract sermons from response - handle both formats
  let sermons = [];
  let totalPages = 1;
  let totalSermons = 0;

  if (sermonsResponse) {
    // Check if response is the search format (array) or paginated format (object)
    if (Array.isArray(sermonsResponse)) {
      // Search response format: array of sermon objects
      // Server-side pagination should handle this, but fallback to client-side if needed
      sermons = sermonsResponse;
      totalSermons = sermonsResponse.length;
      totalPages = Math.ceil(totalSermons / itemsPerPage);
    } else if (sermonsResponse.data && Array.isArray(sermonsResponse.data)) {
      // Regular paginated response format
      sermons = sermonsResponse.data;
      totalSermons = sermonsResponse.total || sermons.length;
      totalPages =
        sermonsResponse.total_pages || Math.ceil(totalSermons / itemsPerPage);
    } else if (
      sermonsResponse.sermons &&
      Array.isArray(sermonsResponse.sermons)
    ) {
      // Alternative response format
      sermons = sermonsResponse.sermons;
      totalSermons = sermonsResponse.total || sermons.length;
      totalPages =
        sermonsResponse.total_pages || Math.ceil(totalSermons / itemsPerPage);
    }
  }

  // Handle pagination change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <section className="container mx-auto px-6 md:px-0 min-h-[400px] flex flex-col items-center justify-center">
        <Spinner />
        {showSearchIndicator && (
          <p className="mt-4 text-gray-600">Searching for "{searchQuery}"...</p>
        )}
      </section>
    );
  }

  // Error state
  if (isError) {
    console.error("Error fetching sermons:", error);
    return (
      <section className="container mx-auto px-6 md:px-0 min-h-[400px] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <p className="text-red-500 text-lg mb-2">Error loading sermons</p>
          <p className="text-gray-600 mb-4">
            {error?.data?.message || "Please try again later"}
          </p>
          <button
            onClick={refetch}
            className="px-6 py-2 bg-[#F3A900] text-white rounded-lg hover:bg-[#e09900] transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // Empty state
  if (!sermons || sermons.length === 0) {
    return (
      <section className="container mx-auto px-6 md:px-0">
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

          {showSearchIndicator ? (
            <>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No sermons found for "{searchQuery}"
              </h3>
              <p className="mt-1 text-gray-500">
                Try different search terms or browse all sermons
              </p>
            </>
          ) : (
            <>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No sermons available
              </h3>
              <p className="mt-1 text-gray-500">
                Check back later for new sermons.
              </p>
            </>
          )}

          <button
            onClick={refetch}
            className="mt-4 px-6 py-2 bg-[#F3A900] text-white rounded-lg hover:bg-[#e09900] transition-colors"
          >
            Refresh
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container mx-auto px-6 md:px-0">
        {/* Search Results Header */}
        {showSearchIndicator && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-gray-600">
              Found {totalSermons} sermon{totalSermons !== 1 ? "s" : ""}
              {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <SermonItem key={sermon.id || sermon._id} sermon={sermon} />
          ))}
        </div>
      </section>

      <div className="mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default SermonCard;
