import { useState, useRef } from "react";
import sermonBanner from "../../assets/images/service-banner.png";
import video from "../../assets/videos/video.mp4";
import { IoPlaySharp } from "react-icons/io5";

// Individual Sermon Card Component
const SermonItem = ({ sermon }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  return (
    <div className="w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Video/Image Container */}
      <div className="relative aspect-video bg-gray-900">
        {/* Cover Image - Hidden when video is playing */}
        {!isPlaying && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sermonBanner})` }}
          >
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-30">
              <button
                onClick={handlePlay}
                className="w-20 h-20 rounded-full bg-black bg-opacity-90 flex items-center justify-center hover:bg-opacity-100 transition-all transform hover:scale-105"
              >
                <IoPlaySharp className="text-white text-[25px]" />
              </button>
            </div>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${
            isPlaying ? "block" : "hidden"
          }`}
          controls={isPlaying}
          onPause={handlePause}
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sermon Details - You can uncomment this when you have the data */}
      <div className="w-full">
        <div className="">
          <div className="flex items-center">
            <h2 className=" text-[#000000] py-4 font-inter font-semibold text-[24px] leading-[100%] capitalize">
              Building a deep relationship with Jesus
            </h2>
            {/* {sermon.} */}
          </div>
          <div className="flex  justify-between items-center py-2 border-t-1 border-b-1 border-[#DADADA]">
            <p className="text-base font-inter leading-[100%]">Series:</p>
            {/* {sermon.minister} */}
            <p className="text-base font-inter leading-[100%]">The power in the blood Of Jesus</p>
          </div>

           <div className="flex  justify-between items-center py-4">
            <p className="text-base font-inter leading-[100%]">April 13,2025</p>
            {/* {sermon.date} */}
            <p className="text-base font-inter leading-[100%]">Pst. Olumide Emmanuel</p>
                        {/* {sermon.pastorName} */}

          </div>
        </div>
      </div>
    </div>
  );
};

// Main SermonCard Component
const SermonCard = () => {
  // Mock data for testing - replace with actual API data later
  const mockSermons = [
    { id: 1, title: "Sermon 1" },
    { id: 2, title: "Sermon 2" },
    { id: 3, title: "Sermon 3" },
    { id: 4, title: "Sermon 4" },
    { id: 5, title: "Sermon 5" },
    { id: 6, title: "Sermon 6" },
  ];

  return (
    <section className="container mx-auto px-6 md:px-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSermons.map((sermon) => (
          <SermonItem key={sermon.id} sermon={sermon} />
        ))}
      </div>
    </section>
  );
};

export default SermonCard;
