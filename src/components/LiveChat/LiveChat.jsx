import React from "react";
import livechatimage from "../../assets/images/livechatimage.jpg";
import logo from "../../assets/images/cbc-logo.webp";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import { Link } from "react-router-dom";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

const LiveChat = () => {
  return (
    <section className="bg-white px-2  pt-[8px] pb-[16px]  space-y-[14.76px] rounded-[3.69px] md:max-w-[805.5px] lg:max-w-full mx-auto md:space-y-8 md:py-[24px] md:px-[32px] md:rounded-[8px] grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <div className="relative w-full h-screen">
        <img
          src={livechatimage}
          alt="Live Chat Image"
          className="w-full h-full object-cover rounded-[14px] bg-black"
        />
        <p className=" absolute bottom-4 left-4 md:left-8 text-white text-[65px] sm:text-[48px] md:text-[48px] lg:text-[48px] font-normal leading-[1.1] capitalize break-words whitespace-normal  font-satoshi max-w-[462px] mb-[15px]">
          Raising a<br />
          People of <br />
          Power, Purpose <br />& Dominion
        </p>
      </div>
      <div>
        <img
          src={logo}
          alt=""
          className="flex flex-start shrink-0 h-[85.858px] w-[98.062px] aspect-[98.06/85.86]"
        />
        <div className="flex flex-col items-start gap-[32px] w-[592px] mt-[101.4px]">
          <div className="flex flex-start flex-col w-[361px] gap-[8px]">
            <p className="text-black font-satoshi text-[28px] font-bold uppercase">
              Log In
            </p>
            <p className="text-[#666] font-inter text-[14px] font-normal leading-[19.6px]">
              Enter your personal information details
            </p>
          </div>
          <form className="flex flex-col items-start gap-[16px] w-full">
            <div className="flex flex-col items-start gap-[8px] w-full">
              <label
                htmlFor="email"
                className="text-black font-inter text-[16px font-normal leading-[30px] capitalize"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="flex py-[15.5px] px-[24px] items-center gap-[16px] w-full rounded-[100px] border border-[#E5E5E5]"
              />
            </div>
            <div className="relative  flex flex-col items-start gap-[8px] w-full">
              <label
                htmlFor="password"
                className="text-black font-inter text-[16px] font-normal leading-[30px] capitalize w-full required"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                className="flex h-[48px] py-[15.5px] px-[24px] pr-[48px] items-center self-stretch rounded-[100px] border border-[#DCDCDC]"
                placeholder="............."
              />
              <img
                src={eyeIcon}
                alt="eyeIcon"
                className="absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
              />
            </div>
            <div className="flex justify-between items-start w-full">
              <label className="text-[#666] items-center font-inter text-[14px] font-normal leading-normal flex gap-[8px]">
                <MdCheckBoxOutlineBlank className="rounded-4 borber border-[#E5E5E5]" />
                Remember me
              </label>
              <button
                type="button"
                className="text-[#666] text-rightfont-inter text-[14px] font-normal leading-normal underline tracking-[0.28px] decoration-solid underline-offset-[auto] decoration-[auto] hover:text-black"
              >
                Forgot password
              </button>
            </div>
          </form>
          <button
            type="submit"
            className="flex w-[592px] h-[58px] py-4 px-6 justify-center items-center gap-[31px] shrink-0 rounded-[50px] bg-[radial-gradient(133.33%_122.42%_at_52.23%_0%,_#FFB91E_0%,_#FC8E33_54.74%)] shadow-[0_31px_19px_0_rgba(255,185,30,0.35),_0_14px_14px_0_rgba(255,185,30,0.28),_0_3px_8px_0_rgba(255,225,159,0.28)]"
          >
            <p className="text-white shadow-none [text-shadow:0_2px_2px_rgba(0,0,0,0.25)] font-inter font-medium leading-[27px] tracking-[-0.36px]">
              Log in
            </p>
          </button>
          <div className="flex items-center justify-center gap-2 text-sm text-[#666] w-full">
            <span className="text-[#000929] font-inter font-medium leading-[22.4px]">
              Don’t have an account?
            </span>
            <button
              type="button"
              className="text-[#FC8E33] font-medium underline hover:opacity-80"
            >
              Create Account
            </button>
          </div>
        </div>
        <footer className="inline-flex items-center gap-[42px] mt-[100px]">
          <div className="text-black items-center font-inter text-[16px] font-normal leading-[30px] capitalize">
            <p>&copy; 2025 Calvary Bible Church. All rights reserved</p>
          </div>
          <div className="text-black items-center font-inter text-[16px] font-normal leading-[30px] capitalize">
            <p>Terms & Condition</p>
          </div>
          <p className="text-black items-center font-inter text-[16px] font-normal leading-[30px] capitalize">
            Privacy Policy
          </p>
        </footer>
      </div>
    </section>
  );
};

export default LiveChat;
