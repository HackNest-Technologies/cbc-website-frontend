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
    <section className="container mx-auto pt-[100px]">
      {/* Main Content */}
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Main Video Player */}
          <div className="lg:col-span-5">
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
          <div className="lg:col-span-1 mx-auto flex w-[79px] flex-col items-center gap-11px">
            <div className="flex h-[72px] pt-[5px] pr-[9px] pb-[6px] pl-[9px] justify-center items-center self-stretch bg-[#FFB91E]/30 rounded-[15px]">
              <img
                src={liveChat}
                alt="Live Chat"
                className="w-[61px] h-[61px] aspect-square"
              />
            </div>
            <Link to="/liveChat">
              <p className="text-black font-satoshi font-bold uppercase text-[14px] leading-normal w-[72px] h-[19px] m-4">
                LIVE CHAT
              </p>
            </Link>

            <div className="flex h-[72px] pt-[5px] pr-[9px] pb-[6px] pl-[9px] justify-center items-center self-stretch bg-[#FFB91E]/30 rounded-[15px]">
              <img
                src={streamline}
                alt="Live Chat"
                className="w-[61px] h-[61px] aspect-square"
              />
            </div>
            <p className="text-black font-satoshi font-bold uppercase text-[14px] leading-normal w-[72px] h-[19px] m-4 text-center">
              GIVE
            </p>

            <div className="flex h-[72px] pt-[5px] pr-[9px] pb-[6px] pl-[9px] justify-center items-center self-stretch bg-[#FFB91E]/30 rounded-[15px]">
              <img
                src={solar}
                alt="Live Chat"
                className="w-[61px] h-[61px] aspect-square"
              />
            </div>
            <p className="text-black font-satoshi font-bold uppercase text-[14px] leading-normal w-[72px] h-[19px] m-4 text-center">
              SHARE
            </p>

            <div className="flex h-[72px] pt-[5px] pr-[9px] pb-[6px] pl-[9px] justify-center items-center self-stretch bg-[#FFB91E]/30 rounded-[15px]">
              <img
                src={humbleicons}
                alt="Live Chat"
                className=" w-[61px] h-[61px] aspect-square "
              />
            </div>
            <p className="text-black font-satoshi font-bold uppercase text-[14px] leading-normal w-[72px] h-[19px] m-4 text-center">
              OFF VIDEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
