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
            <div className="flex md:block gap-[8px]">
              <div className="flex">
                <div className="flex flex-col item-center  mx-[8px] md:mb-[11px]">
                  <Link to="/livechat">
                    <img
                      src={liveChat}
                      alt="Give Icon"
                      className="pt-[4px] pb-[4px]  pr-[10px] pl-[6px] rounded-[10px]  bg-[#FFB91E]/28 w-[60px] h-[51px] mb-[2px]"
                    />
                    <p className="text-black text-center font-satoshi text-[12px] font-normal leading-normal mt-[8px] uppercase lg:text-[14px]lg:font-medium md:mt-[11px]">
                      <strong>LIVE CHAT</strong>
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col item-center mx-[8px]  md:mb-[11px] ">
                  <img
                    src={streamline}
                    alt="Give Icon"
                    className="pt-[4px] pb-[4px]  pr-[10px] pl-[6px] rounded-[10px]  bg-[#FFB91E]/28 w-[60px] h-[51px] "
                  />
                  <p className="text-black text-center font-satoshi text-[12px] font-normal leading-normal mt-[8px] uppercase lg:text-[14px] lg:font-medium w-auto max-w-full md:mt-[11px]">
                    <strong>GIVE</strong>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col item-center  mx-[8px] md:mb-[11px]">
                  <img
                    src={solar}
                    alt="Give Icon"
                    className="pt-[4px] pb-[4px]  pr-[10px] pl-[6px] rounded-[10px]  bg-[#FFB91E]/28 w-[60px] h-[51px]"
                  />
                  <p className="text-black text-center font-satoshi text-[12px] font-normal leading-normal uppercase mt-[8px] lg:text-[14px] lg:font-medium w-auto max-w-full md:mt-[11px]">
                    <strong>SHARE</strong>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col item-center mx-[8px]  md:mb-[11px]">
                  <img
                    src={humbleicons}
                    alt="Give Icon"
                    className="pt-[4px] pb-[4px]  pr-[10px] pl-[6px] rounded-[10px]  bg-[#FFB91E]/28 w-[60px] h-[51px]"
                  />
                  <p className="text-black text-center font-satoshi text-[12px] font-normal leading-normal uppercase mt-[8px] lg:text-[14px] lg:font-medium mb-4 w-auto max-w-full md:mt-[11px]">
                    <strong>OFF VIDEO</strong>
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
