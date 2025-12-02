import video from "../../assets/videos/video.mp4";
import liveChat from "../../assets/images/liveChat.svg";
import streamline from "../../assets/images/streamline_give-gift.svg";
import solar from "../../assets/images/solar_share-outline.svg";
import humbleicons from "../../assets/images/humbleicons_chat.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import cancel from "../../assets/images/cancel.png";
import { FaArrowRight } from "react-icons/fa";
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
          <div className="lg:col-span-3 ****** ">
            {/* <div className="flex flex-row md:flex-col gap-[8px] md:gap-[11px] w-[237px] h-[47px] md:w-[59px] md:h-[330px] lg:w-[84px] lg:h-[441px]  ">
              <div className=" flex flex-col items-center gap-[8px] md:gap-[11px] w-[58px] h-[47px] md:w-[60px] md:h-[74px] lg:w-[84px] lg:h-[104px]  ">
                <Link to="/livechat">
                  <div className=" justify-center items-center bg-[#FFB91E]/28 w-[32px] h-[27px] pt-[1.9px] pr-[5.3px] pb-[2.3px] pl-[3.4px] rounded-[5.7px] md:w-[60px] md:h-[51.4px] md:pt-[3.5px] md:pr-[10px] md:pb-[4.3px] md:pl-[6.4px] md:rounded-[10.7px] lg:w-[84px] lg:h-[72px] lg:pt-[5px] lg:pr-[14px] lg:pb-[6px] lg:pl-[9px] lg:rounded-[15px]">
                    <img
                      src={liveChat}
                      alt="live chat"
                      className="w-[23.2px] h-[23.2px] md:w-[43.5px] md:h-[43.5px] lg:w-[61px] lg:h-[61px] "
                    />
                  </div>
                </Link>
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
            </div> */}
            <section className="flex flex-col rounded-[16px] border-[2px] border-dashed border-[#FC8E33] w-full h-auto md:h-[300px]  lg:h-[430px] lg:border-[5px] *****">
              <div className="first child flex flex-col items-start gap-[24px] w-full flex-1 overflow-hidden ">
                <div className="flex p-[16px] justify-between items-center  border-dashed border-b-[2px] w-full lg:border-b-[5px] border-[#FC8E33] the livechat part">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={liveChat}
                      alt="logo"
                      className="w-[30px] h-[28px]"
                    />
                    <p className="text-black font-satoshi text-[18px] font-bold uppercase">
                      Live chat
                    </p>
                  </div>

                  <button
                    type="button"
                    className="flex px-[18.3px] items-center gap-[8.07px] rounded-[36.7px] bg-black ml-auto"
                  >
                    <img src={cancel} className="w-[16px] h-[16px]" />
                    <p className="text-white text-right font-inter text-[16px] font-normal py-[5.38px]  leading-[1.4] uppercase">
                      close
                    </p>
                  </button>
                </div>
                <div className="flex flex-col items-start gap-[8px] self-stretch py-[8px] md:py-[16px] px-[8px] overflow-y-auto flex-1 max-h-[300px] md:max-h-[400px] lg:max-h-none****">
                  <div className="flex items-center gap-[8px] self-stretch holding the whole first section">
                    <div className=" flex gap-[10px] items-center ml-0.5 ">
                      <div className="flex justify-end items-center pt-[6.84px] pl-[5.4px] md:pt-[6.84px] md:pr-[3.52px] md:pb-[2.15px] md:pl-[5.47px] md:justify-center rounded-[34.2px] bg-[#BCBCBC]">
                        <p className="items-start">WI</p>
                      </div>
                      <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                        Femi Balogun
                      </p>
                    </div>
                    <div className=" flex  pt-[16px] items-start gap-[9px]  holding the chat section">
                      <p className="text-black font-satoshi text-[16px] font-normal leading-[1.4] capitalize">
                        In Jesus’ name, I declare the restoration of my family!
                      </p>
                    </div>
                  </div>
                  {/* CHAT2 */}
                  <div className="flex items-center gap-[8px] self-stretch holding the whole first section">
                    <div className=" flex gap-[10px] items-center ml-0.5 ">
                      <div className="flex justify-end items-center pt-[6.84px] pl-[5.4px] md:pt-[6.84px] md:pr-[3.52px] md:pb-[2.15px] md:pl-[5.47px] md:justify-center rounded-[34.2px] bg-[#BCBCBC]">
                        <p className="items-start">WI</p>
                      </div>
                      <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                        Femi Balogun
                      </p>
                    </div>
                    <div className=" flex  pt-[16px] items-start gap-[9px]  holding the chat section">
                      <p className="text-black font-satoshi text-[16px] font-normal leading-[1.4] capitalize">
                        In Jesus’ name, I declare the restoration of my family!
                      </p>
                    </div>
                  </div>
                  {/* CHAT 3 */}
                  <div className="flex items-center gap-[8px] self-stretch holding the whole first section">
                    <div className=" flex gap-[10px] items-center ml-0.5 ">
                      <div className="flex justify-end items-center pt-[6.84px] pl-[5.4px] md:pt-[6.84px] md:pr-[3.52px] md:pb-[2.15px] md:pl-[5.47px] md:justify-center rounded-[34.2px] bg-[#BCBCBC]">
                        <p className="items-start">WI</p>
                      </div>
                      <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                        Femi Balogun
                      </p>
                    </div>
                    <div className=" flex  pt-[16px] items-start gap-[9px]  holding the chat section">
                      <p className="text-black font-satoshi text-[16px] font-normal leading-[1.4] capitalize">
                        In Jesus’ name, I declare the restoration of my family!
                      </p>
                    </div>
                  </div>
                  {/* CHAT 4*/}
                  <div className="flex items-center gap-[8px] self-stretch holding the whole first section">
                    <div className=" flex gap-[10px] items-center ml-0.5 ">
                      <div className="flex justify-end items-center pt-[6.84px] pl-[5.4px] md:pt-[6.84px] md:pr-[3.52px] md:pb-[2.15px] md:pl-[5.47px] md:justify-center rounded-[34.2px] bg-[#BCBCBC]">
                        <p className="items-start">WI</p>
                      </div>
                      <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                        Femi Balogun
                      </p>
                    </div>
                    <div className=" flex  pt-[16px] items-start gap-[9px]  holding the chat section">
                      <p className="text-black font-satoshi text-[16px] font-normal leading-[1.4] capitalize">
                        In Jesus’ name, I declare the restoration of my family!
                      </p>
                    </div>
                  </div>
                  {/* CHAT 5 */}
                  <div className="flex items-center gap-[8px] self-stretch holding the whole first section">
                    <div className=" flex gap-[10px] items-center ml-0.5 0">
                      <div className="flex justify-end items-center pt-[6.84px] pl-[5.4px] md:pt-[6.84px] md:pr-[3.52px] md:pb-[2.15px] md:pl-[5.47px] md:justify-center rounded-[34.2px] bg-[#BCBCBC]">
                        <p className="items-start">WI</p>
                      </div>
                      <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                        Femi Balogun
                      </p>
                    </div>
                    <div className=" flex  pt-[16px] items-start gap-[9px]  holding the chat section">
                      <p className="text-black font-satoshi text-[16px] font-normal leading-[1.4] capitalize">
                        In Jesus’ name, I declare the restoration of my family!
                      </p>
                    </div>
                  </div>

                  {/* CHAT 6 */}
                  <div className="flex items-center gap-[8px] self-stretch holding the whole first section">
                    <div className=" flex gap-[10px] items-center ml-0.5 ">
                      <div className="flex justify-end items-center pt-[6.84px] pl-[5.4px] md:pt-[6.84px] md:pr-[3.52px] md:pb-[2.15px] md:pl-[5.47px] md:justify-center rounded-[34.2px] bg-[#BCBCBC]">
                        <p className="items-start">WI</p>
                      </div>
                      <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                        Femi Balogun
                      </p>
                    </div>
                    <div className=" flex  pt-[16px] items-start gap-[9px]  holding the chat section">
                      <p className="text-black font-satoshi text-[16px] font-normal leading-[1.4] capitalize">
                        In Jesus’ name, I declare the restoration of my family!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col px-[8px] py-[16px] items-center gap-[8px] border-t-2 border-dashed border-t-[#FC8E33] lg:border-t-5  w-full LowerChild of the section">
                <div className=" flex justify-center items-center gap-[15px]holding text and arrow">
                  <div className="flex items-center gap-[12px] holding only the text">
                    <p className="text-[#333] font-satoshi text-[16px] font-normal leading-[1.4] underline capitalize">
                      SEND
                    </p>
                  </div>
                  <Link to="/" className="">
                    <FaArrowRight className="h-[24px] w-[24px] pl-[10px]" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
