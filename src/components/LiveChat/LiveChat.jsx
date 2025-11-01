import React from "react";
import livechatimage from "../../assets/images/livechatimage.jpg";
import logo from "../../assets/images/cbc-logo.webp";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import { Link } from "react-router-dom";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import SubmitBtn from "../shared/SubmitBtn";

const LiveChat = () => {
  return (
    <section className=" flex flex-col justify-center items-start pt-[20px] pb-[108.378px] md:grid md:grid-cols-2  md:p-[24px] md:items-start px-2">
      <div className=" mx-auto relative rounded-[16px] md:rounded-[20px] w-full max-w-[400px] h-[250px] md:max-w-[480px]   md:h-[800px] lg:w-[620px] lg:h-[600px]">
        <img
          src={livechatimage}
          alt="Live Chat image"
          className=" rounded-[16px] md:h-[800px] lg:w-[620px] lg:h-[600px]"
        />
        <img
          src={logo}
          alt="Logo"
          className="absolute top-4 left-4 w-[45px] h-[45px]  md:w-[69px] md:hidden md:h-[69px]"
        />
        <p className="absolute left-0 bottom-0 text-white font-satoshi text-[24px] capitalize">
          Raising a People of <br /> Power, Purpose & <br /> Dominion
        </p>
      </div>
      <div className="relative w-full max-w-[624px] mx-auto ml-[20px] items-start">
        <img
          src={logo}
          alt="LOGO"
          className=" absolute top-4 left-4 hidden md:block h-[45px] w-[69px] md:h-[69px] "
        />
        <form className="pt-[60px] ">
          <div className="gap-[8px] md:mt-[64px] w-[361px]">
            <p className="font-satoshi text-[21.986px] font-normal uppercase md:text-[28px] md:text-bold ">
              Sign Up
            </p>
            <p className="gap-2 w-[361px] font-inter text-[14px] font-normal text-[#666]">
              Enter your personal information details
            </p>
          </div>
          <div className="flex flex-col space-y-1 pr-5">
            <label
              htmlFor="Name"
              className="text-black font-inter text-[16px] font-normal capitalize mt-[32px]"
            >
              Name
            </label>
            <input
              id="Name"
              className="py-[12.171px] px-[4.23px] rounded-[78.521px] border border-[#E5E5E5]"
              placeholder="E.g Wisdomibu@gmail.com"
            />
          </div>
          <div className="flex flex-col space-y-1 pr-5">
            <label
              htmlFor="Email"
              className="text-black font-inter text-[16px] font-normal capitalize mt-[32px]"
            >
              Email
            </label>
            <input
              id="Name"
              className="py-[12.171px] px-[4.23px] rounded-[78.521px] border border-[#E5E5E5]"
              placeholder="E.g Wisdomibu@gmail.com"
            />
          </div>
          <div className="flex flex-col space-y-1 pr-5  w-full relative">
            <label
              htmlFor="password"
              className="text-black font-inter text-[16px] font-normal capitalize mt-[32px]"
            >
              Set Password
            </label>
            <input
              id="Name"
              className="py-[12.171px] px-[4.23px] rounded-[78.521px] border border-[#E5E5E5]"
              placeholder="*************"
            />
            <img
              src={eyeIcon}
              alt="eye"
              className=" absolute right-4 top-1/2 -translate-y-1/2 mr-4 pt-14"
            />
          </div>
          <div className="flex items-start gap-2 mt-[2px]">
            <button className=" text-[#FF4D00]">
              <FaTimesCircle />
            </button>
            <p className="text-[#FF4D00] font-inter text-[14px] font-normal">
              Must be at least 8 characters
            </p>
          </div>
          <div className="flex items-start gap-2 mt-[2px]">
            <button className=" text-[#079455] rounded-[7890px]">
              <FaCheckCircle />
            </button>
            <p className="text-black font-inter text-[14px] font-normal">
              Must contain one special character
            </p>
          </div>
          <div className="flex items-start gap-2 mt-[10px]">
            <button className="#">
              <MdCheckBoxOutlineBlank />
            </button>
            <p className="text-black font-inter text-[14px] font-medium">
              I agree to the <span className="text-[#FD9F2B]">Terms</span> and{" "}
              <span className="text-[#FD9F2B]">Privacy Policy</span>
            </p>
          </div>
          <div className=" flex flex-col mt-[18.85px] items-center mr-8">
            <button
              className="text-white py-[12.542px] rounded-[39.26px] shadow-[0_24.341px_14.919px_rgba(255,185,30,0.35),0_10.993px_10.993px_rgba(255,185,30,0.28),0_2.356px_6.282px_rgba(255,225,159,0.28)] block w-full px-8"
              style={{
                background:
                  "radial-gradient(133.33% 122.42% at 52.23% 0%, #FFB91E 0%, #FC8E33 54.74%) ",
              }}
            >
              Sign Up
            </button>
            <p className="mt-[37.8px] text-black font-inter text-[10.993px] font-normal">
              Already have an account?{" "}
              <span className="text-[#FC8E33]">Log in</span>
            </p>
          </div>
        </form>
        <footer className="flex flex-col justify-center items-end text-[#595858] lg:hidden lg:flex-row lg:gap-[42px]">
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
      <footer className="hidden lg:flex flex-row justify-center items-center text-[#595858] gap-[42px]">
        <p className="mt-[18.5px] text-[12px] lg:text-[16px] font-normal capitalize">
          © 2025 Calvary Bible Church. All rights reserved
        </p>
        <p className="mt-[6.28px] text-[12px] lg:text-[16px] font-normal capitalize">
          Terms & Conditions
        </p>
        <p className="mt-[6.28px] text-[12px] lg:text-[16px] font-normal capitalize">
          Privacy Policy
        </p>
      </footer>
    </section>
  );
};

export default LiveChat;
