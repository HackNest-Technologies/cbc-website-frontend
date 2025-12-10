import video from "../../assets/videos/video.mp4";
import liveChat from "../../assets/images/liveChat.svg";
import streamline from "../../assets/images/streamline_give-gift.svg";
import solar from "../../assets/images/solar_share-outline.svg";
import humbleicons from "../../assets/images/humbleicons_chat.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Video = () => {
  // const [selectedVideo, setSelectedVideo] = useState(mockVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const liveChatButton = () => {
    if (!user) {
      return navigate("/user-login");
    }
    navigate("/admin-livestream");
  };

  return (
    <section className="container mx-auto pt-[100px] px-6 md:px-0">
      {/* Main Content */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Main Video Player */}
          <div className="md:col-span-5">
            <div className="bg-black rounded-xl overflow-hidden shadow-lg">
              <div className="relative pt-[56.25%]">
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
          <div className="lg:col-span-1  ">
            <div className="flex flex-row md:flex-col gap-[8px] md:gap-[11px] w-[237px] h-[47px] md:w-[59px] md:h-[330px] lg:w-[84px] lg:h-[441px]  ">
              <div className=" flex flex-col items-center gap-[8px] md:gap-[11px] w-[58px] h-[47px] md:w-[60px] md:h-[74px] lg:w-[84px] lg:h-[104px]  ">
                <p onClick={liveChatButton}>
                  <div className=" justify-center items-center bg-[#FFB91E]/28 w-[32px] h-[27px] pt-[1.9px] pr-[5.3px] pb-[2.3px] pl-[3.4px] rounded-[5.7px] md:w-[60px] md:h-[51.4px] md:pt-[3.5px] md:pr-[10px] md:pb-[4.3px] md:pl-[6.4px] md:rounded-[10.7px] lg:w-[84px] lg:h-[72px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] lg:rounded-[15px]">
                    <img
                      src={liveChat}
                      alt="live chat"
                      className="w-[23.2px] h-[23.2px] md:w-[43.5px] md:h-[43.5px] lg:w-[61px] lg:h-[61px] "
                    />
                  </div>
                </p>
                <p className="text-[#000] font-satoshi uppercase font-normal text-[12px] w-[58px] h-[12px] lg:text-[14px] lg:font-bold lg:w-[72px] lg:h-[19px]">
                  live Chat
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-[8px]  w-[47.2px] h-[47.4px] md:gap-[11px] md:w-[60px] md:h-[74px] lg:w-[84px] lg:h-[104px] ">
                <div className=" flex justify-center items-center bg-[#FFB91E]/28 w-[32px] h-[27px] pt-[1.9px] pr-[5.3px] pb-[2.3px] pl-[3.4px] rounded-[5.7px] md:w-[60px] md:h-[51.4px] md:pt-[3.5px] md:pr-[10px] md:pb-[4.3px] md:pl-[6.4px] md:rounded-[10.7px] lg:w-[84px] lg:h-[72px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] lg:rounded-[15px] ">
                  <img
                    src={streamline}
                    alt="Give Icon"
                    className="w-[14.4px] h-[14.4px] md:w-[27.1px] md:h-[27.1px] lg:w-[38px] lg:h-[38px] "
                  />
                </div>
                <p className="text-[#000] font-satoshi uppercase font-normal text-[12px] w-[27px] h-[12px] lg:text-[14px] lg:font-bold lg:w-[34px] lg:h-[19px]">
                  give
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-[8px]  w-[47.2px] h-[47.4px] md:gap-[11px] md:w-[60px] md:h-[74px] lg:w-[84px] lg:h-[104px]  ">
                <div className="flex justify-center items-center bg-[#FFB91E]/28 w-[32px] h-[27px] pt-[1.9px] pr-[5.3px] pb-[2.3px] pl-[3.4px] rounded-[5.7px] md:w-[60px] md:h-[51.4px] md:pt-[3.5px] md:pr-[10px] md:pb-[4.3px] md:pl-[6.4px] md:rounded-[10.7px] lg:w-[84px] lg:h-[72px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] lg:rounded-[15px] ">
                  <img
                    src={solar}
                    alt="SHARE"
                    className="w-[16px] h-[16px] md:w-[30px] md:h-[30px] lg:w-[42px] lg:h-[42px] "
                  />
                </div>
                <p className="text-[#000] font-satoshi uppercase font-normal text-[12px] w-[38px] h-[12px] lg:text-[14px] lg:font-bold lg:w-[46px] lg:h-[19px]">
                  share
                </p>
              </div>

              <div className=" flex flex-col items-center justify-center gap-[8px]  w-[47.2px] h-[47.4px] md:gap-[11px] md:w-[60px] md:h-[74px] lg:w-[84px] lg:h-[104px]">
                <div className="flex justify-center items-center bg-[#FFB91E]/28 w-[32px] h-[27px] pt-[1.9px] pr-[5.3px] pb-[2.3px] pl-[3.4px] rounded-[5.7px] md:w-[60px] md:h-[51.4px] md:pt-[3.5px] md:pr-[10px] md:pb-[4.3px] md:pl-[6.4px] md:rounded-[10.7px] lg:w-[84px] lg:h-[72px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] lg:rounded-[15px] ">
                  <img
                    src={humbleicons}
                    alt="SHARE"
                    className="w-[23.2px] h-[23.2px] md:w-[43.5px] md:h-[43.5px] lg:w-[61px] lg:h-[61px] "
                  />
                </div>
                <p className="text-[#000] font-satoshi uppercase font-normal text-[12px] w-[61px] h-[12px] lg:text-[14px] lg:font-bold lg:w-[75px] lg:h-[19px]">
                  off video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
