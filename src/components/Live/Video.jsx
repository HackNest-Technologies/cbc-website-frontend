import video from "../../assets/videos/video.mp4";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import GuestLiveActions from "./GuestLiveActions";
import LiveChat from "./LiveChat";

const Video = () => {
  // const [selectedVideo, setSelectedVideo] = useState(mockVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLiveChatClick = () => {
      return navigate("/login");
  };

  return (
    <section className="container mx-auto pt-[100px] px-6 md:px-0">
      {/* Main Content */}
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-6 *******">
          {" "}
          {/* Main Video Player */}
          <div className="md:col-span-6 lg:col-span-7 ********">
            <div className="bg-black rounded-xl overflow-hidden shadow-lg">
              <div className="relative pt-[56.25%] ">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  // src={selectedVideo.video_url}
                  src={video}
                  controls
                  autoPlay={isPlaying}
                  poster="https://via.placeholder.com/800x450/1f2937/ffffff?text=Video+Preview"
                />
              </div>
            </div>
          </div>
          {/* Video List */}
          <div className="lg:col-span-3">
          
            {!user ? (
            <GuestLiveActions onLiveChatClick={handleLiveChatClick} />
          ) : (
            <LiveChat />
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
