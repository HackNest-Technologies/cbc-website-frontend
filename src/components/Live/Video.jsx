import video from "../../assets/videos/video.mp4";
import liveChat from "../../assets/images/liveChat.svg";
import streamline from "../../assets/images/streamline_give-gift.svg";
import solar from "../../assets/images/solar_share-outline.svg";
import humbleicons from "../../assets/images/humbleicons_chat.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// Mock data to replace the empty API
const mockVideos = [
  {
    id: "1",
    video_url:
      "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    audio_url:
      "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3",
    title: "Nature Scene",
    description: "Beautiful tree with yellow flowers",
  },
  {
    id: "2",
    video_url:
      "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-34517-large.mp4",
    audio_url:
      "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3",
    title: "Mountain Drive",
    description: "Scenic drive through mountain highway",
  },
  {
    id: "3",
    video_url:
      "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    audio_url:
      "https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3",
    title: "Ocean Waves",
    description: "Peaceful ocean waves crashing",
  },
  {
    id: "4",
    video_url:
      "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-umbrella-at-the-beach-3455-large.mp4",
    audio_url:
      "https://assets.mixkit.co/music/preview/mixkit-summer-bossa-491.mp3",
    title: "Beach Day",
    description: "Relaxing day at the beach",
  },
];

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(mockVideos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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
          <div className="lg:col-span-1 ">
            <div className="  flex md:block justify-center  md:gap-0 ">
              <div className="flex flex-col items-center md:mb-[11px]">
                <Link to="/livechat">
                  <div className=" flex items-center justify-center bg-[#FFB91E]/28 w-[32px] h-[27px] md:w-[60px] md:h-[51px] lg:w-[84px] lg:h-[72px] rounded-[5.7px] md:rounded-[10px] pt-[2px] pr-[5.3px] pb-[2.2px] pl-[3.4px] md:pt-[4px] md:pb-[4px]  md:pr-[10px] md:pl-[6px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] ">
                    <img
                      src={liveChat}
                      alt="Give Icon"
                      className="w-[24px] h-[24px] md:w-[44px] md:h-[44px] lg:w-[61px] lg:h-[61px] object-cover"
                    />
                  </div>

                  <p className="text-black text-center font-satoshi text-[12px] font-normal w-[70px] leading-normal mt-[8px] uppercase lg:text-[14px] lg:font-medium md:mt-[11px]">
                    LIVE CHAT
                  </p>
                </Link>
              </div>
              <div className="flex">
                <div className="flex flex-col item-center   md:mb-[11px] ">
                  <div className=" flex items-center justify-center bg-[#FFB91E]/28 w-[32px]  h-[27px] md:w-[60px] md:h-[51px] lg:w-[84px] lg:h-[72px] rounded-[5.7px] md:rounded-[10px] pt-[2px] pr-[5.3px] pb-[2.2px] pl-[3.4px] md:pt-[4px] md:pb-[4px]  md:pr-[10px] md:pl-[6px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] ">
                    <img
                      src={streamline}
                      alt="Give Icon"
                      className="w-[14px] h-[14px] md:w-[27px] md:h-[27px] lg:w-[38px] lg:h-[38px] object-cover "
                    />
                  </div>

                  <p className="text-black text-center font-satoshi text-[12px] font-normal leading-normal w-[70px] mt-[8px] uppercase lg:text-[14px] lg:font-medium md:mt-[11px]">
                    GIVE
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col item-center   md:mb-[11px]">
                  <div className=" flex items-center justify-center bg-[#FFB91E]/28  w-[32px]  h-[27px] md:w-[60px] md:h-[51px]  lg:w-[84px] lg:h-[72px] rounded-[5.7px] md:rounded-[10px] pt-[2px] pr-[5.3px] pb-[2.2px] pl-[3.4px] md:pt-[4px] md:pb-[4px]  md:pr-[10px] md:pl-[6px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] ">
                    <img
                      src={solar}
                      alt="Give Icon"
                      className="w-[16px] h-[16px] md:w-[20px] md:h-[24px] lg:w-[42px] lg:h-[42px] object-cover"
                    />
                  </div>
                  <div className="gap-4 md:gap-0">
                    <p className="text-black text-center font-satoshi text-[12px] font-normal w-[70px] leading-normal uppercase mt-[8px] lg:text-[14px] lg:font-medium  md:mt-[11px]">
                      SHARE
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col item-center  md:mb-[11px]">
                  <div className=" flex items-center justify-center bg-[#FFB91E]/28 w-[32px] h-[27px] md:w-[60px] md:h-[51px]   lg:w-[84px] lg:h-[72px] rounded-[5.7px] md:rounded-[10px] pt-[2px] pr-[5.3px] pb-[2.2px] pl-[3.4px] md:pt-[4px] md:pb-[4px]  md:pr-[10px] md:pl-[6px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] ">
                    <img
                      src={humbleicons}
                      alt="Give Icon"
                      className="w-[23px] h-[23px] md:w-[43px] md:h-[43px] lg:w-[61px] lg:h-[61px] object-cover"
                    />
                  </div>
                  <p className="text-black text-center font-satoshi text-[12px] font-normal leading-normal uppercase mt-[8px] lg:text-[14px] lg:font-medium w-[70px] mb-4 md:mt-[11px]">
                    OFF VIDEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
