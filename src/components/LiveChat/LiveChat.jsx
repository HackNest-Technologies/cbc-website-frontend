import livechatimage from "../../assets/images/livechatimage.jpg";
import logo from "../../assets/images/cbc-logo.webp";
import SIgnUpForm from "./SIgnUpForm";

const LiveChat = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 pt-[20px]   w-full md:gap-[24px]  xl:pb-[20px]">
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

          {/* Form here */}
          <SIgnUpForm />

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
