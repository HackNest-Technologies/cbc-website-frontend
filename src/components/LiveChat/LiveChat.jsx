import livechatimage from "../../assets/images/livechatimage.jpg";
import logo from "../../assets/images/cbc-logo.webp";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import SubmitBtn from "../shared/SubmitBtn";

const LiveChat = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-7  w-full md:gap-[24px]  xl:pb-[20px]">
      <div className="rounded-[16px] md:rounded-[20px] min-h-full liveBg  md:h-screen h-[342px] relative flex items-end w-full">
        <img
          src={logo}
          alt="logo"
          className="absolute w-[69px] h-[60px] block md:hidden  top-4 left-4"
        />
        <p className="text-white text-[24px] md:text-5xl lg:text-[65px] p-4 pb-8">
          Raising A People of Power, Purpose & Dominion
        </p>
      </div>

      {/* FORM */}
      <div className="flex flex-col gap-10 overflow-auto p-4 md:py-4 md:px-0  w-full">
        <img
          src={logo}
          alt="logo"
          className="hidden md:block  md:w-[69px] md:h-[60px]"
        />
        <div>
          <span className="mb-[25px] block">
            <h3 className="text-[22px] md:text-[28px] font-satoshi font-bold">
              SIGN UP
            </h3>
            <p className="text-[#666666] text-[14px]">
              Enter your personal information details
            </p>
          </span>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="userName" className="text-[16px] text-[#292929]">
                Name
              </label>
              <input
                id="userName"
                type="text"
                name="userName"
                className="py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5]"
                placeholder="E.g Wisdom Ibu..."
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[16px] text-[#292929]">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5]"
                placeholder="E.g WisdomIbu@gmail.com"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-[16px] text-[#292929]">
                Set Password
              </label>
              <div className="py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5] relative  focus-within:outline-2 focus-within:outline-black">
                <input
                  id="Name"
                  placeholder="*************"
                  className="outline-none"
                />
                <img
                  src={eyeIcon}
                  alt="eye"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 mt-5">
              <span className="flex items-start gap-2">
                <button className=" text-[#FF4D00]">
                  <FaTimesCircle />
                </button>
                <p className="text-[#FF4D00] font-inter text-[14px] font-normal">
                  Must be at least 8 characters
                </p>
              </span>
              <span className="flex items-start gap-2">
                <button className=" text-[#079455] rounded-[7890px]">
                  <FaCheckCircle />
                </button>
                <p className="text-black font-inter text-[14px] font-normal">
                  Must contain one special character
                </p>
              </span>
              <span className="flex items-start gap-2 ">
                <button className="#">
                  <input type="checkbox" />
                </button>
                <p className="text-black font-inter text-[14px] font-medium">
                  I agree to the <span className="text-[#FD9F2B]">Terms</span>{" "}
                  and <span className="text-[#FD9F2B]">Privacy Policy</span>
                </p>
              </span>
            </div>

            <div>
              <SubmitBtn
                text="Sign Up"
                className="w-full h-[45px] md:h-[58px] rounded-[50px]"
              />
            </div>

            <div className=" flex flex-col mt-[18.85px] items-center mr-8">
              <p className="mt-[37.8px] text-black font-inter text-[10.993px] font-normal">
                Already have an account?{" "}
                <span className="text-[#FC8E33]">Log in</span>
              </p>
            </div>
          </form>

          <footer className="flex flex-col justify-center items-end text-[#595858]  lg:flex-row lg:gap-[42px] lg:gap-x-4 ">
            <p className="mt-[18.5px] text-[12px] md:text-[14px] lg:text-[16px] font-normal capitalize  items-center mr-6">
              © 2025 Calvary bible church. All rights reserved
            </p>
            <p className="mt-[6.28px] text-[12px] md:text-[14px] lg:text-[16px] font-normal capitalize  items-center mr-6">
              Terms & conditions
            </p>
            <p className="mt-[6.28px] text-[12px] md:text-[14px] lg:text-[16px] font-normal capitalize  items-center mr-6">
              Privacy policy
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
