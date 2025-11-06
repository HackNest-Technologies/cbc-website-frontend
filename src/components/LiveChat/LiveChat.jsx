// import React from "react";
// import livechatimage from "../../assets/images/livechatimage.jpg";
// import logo from "../../assets/images/cbc-logo.webp";
// import eyeIcon from "../../assets/images/eyeIcon.svg";
// import { Link } from "react-router-dom";
// import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
// import { FaCheckCircle } from "react-icons/fa";
// import { FaTimesCircle } from "react-icons/fa";
// import SubmitBtn from "../shared/SubmitBtn";

// const LiveChat = () => {
//   return (
//     <section className=" flex flex-col justify-center items-start pt-[20px] pb-[108.378px] md:grid md:grid-cols-2  md:p-[24px] md:items-start px-2">
//       <div className=" mx-auto relative rounded-[16px] md:rounded-[20px] w-full max-w-[400px] h-[250px] md:max-w-[480px]   md:h-[800px] lg:w-[620px] lg:h-[600px]">
//         <img
//           src={livechatimage}
//           alt="Live Chat image"
//           className=" rounded-[16px] md:h-[800px] lg:w-[620px] lg:h-[600px]"
//         />
//         <img
//           src={logo}
//           alt="Logo"
//           className="absolute top-4 left-4 w-[45px] h-[45px]  md:w-[69px] md:hidden md:h-[69px]"
//         />
//         <p className="absolute left-0 bottom-0 text-white font-satoshi text-[24px] capitalize">
//           Raising a People of <br /> Power, Purpose & <br /> Dominion
//         </p>
//       </div>
//       <div className="relative w-full max-w-[624px] mx-auto ml-[20px] items-start">
//         <img
//           src={logo}
//           alt="LOGO"
//           className=" absolute top-4 left-4 hidden md:block h-[45px] w-[69px] md:h-[69px] "
//         />
//         <form className="pt-[60px] ">
//           <div className="gap-[8px] md:mt-[64px] w-[361px]">
//             <p className="font-satoshi text-[21.986px] font-normal uppercase md:text-[28px] md:text-bold ">
//               Sign Up
//             </p>
//             <p className="gap-2 w-[361px] font-inter text-[14px] font-normal text-[#666]">
//               Enter your personal information details
//             </p>
//           </div>
//           <div className="flex flex-col space-y-1 pr-5">
//             <label
//               htmlFor="Name"
//               className="text-black font-inter text-[16px] font-normal capitalize mt-[32px]"
//             >
//               Name
//             </label>
//             <input
//               id="Name"
//               className="py-[12.171px] px-[4.23px] rounded-[78.521px] border border-[#E5E5E5]"
//               placeholder="E.g Wisdomibu@gmail.com"
//             />
//           </div>
//           <div className="flex flex-col space-y-1 pr-5">
//             <label
//               htmlFor="Email"
//               className="text-black font-inter text-[16px] font-normal capitalize mt-[32px]"
//             >
//               Email
//             </label>
//             <input
//               id="Name"
//               className="py-[12.171px] px-[4.23px] rounded-[78.521px] border border-[#E5E5E5]"
//               placeholder="E.g Wisdomibu@gmail.com"
//             />
//           </div>
//           <div className="flex flex-col space-y-1 pr-5  w-full relative">
//             <label
//               htmlFor="password"
//               className="text-black font-inter text-[16px] font-normal capitalize mt-[32px]"
//             >
//               Set Password
//             </label>
//             <input
//               id="Name"
//               className="py-[12.171px] px-[4.23px] rounded-[78.521px] border border-[#E5E5E5]"
//               placeholder="*************"
//             />
//             <img
//               src={eyeIcon}
//               alt="eye"
//               className=" absolute right-4 top-1/2 -translate-y-1/2 mr-4 pt-14"
//             />
//           </div>
//           <div className="flex items-start gap-2 mt-[2px]">
//             <button className=" text-[#FF4D00]">
//               <FaTimesCircle />
//             </button>
//             <p className="text-[#FF4D00] font-inter text-[14px] font-normal">
//               Must be at least 8 characters
//             </p>
//           </div>
//           <div className="flex items-start gap-2 mt-[2px]">
//             <button className=" text-[#079455] rounded-[7890px]">
//               <FaCheckCircle />
//             </button>
//             <p className="text-black font-inter text-[14px] font-normal">
//               Must contain one special character
//             </p>
//           </div>
//           <div className="flex items-start gap-2 mt-[10px]">
//             <button className="#">
//               <MdCheckBoxOutlineBlank />
//             </button>
//             <p className="text-black font-inter text-[14px] font-medium">
//               I agree to the <span className="text-[#FD9F2B]">Terms</span> and{" "}
//               <span className="text-[#FD9F2B]">Privacy Policy</span>
//             </p>
//           </div>
//           <div className=" flex flex-col mt-[18.85px] items-center mr-8">
//             <button
//               className="text-white py-[12.542px] rounded-[39.26px] shadow-[0_24.341px_14.919px_rgba(255,185,30,0.35),0_10.993px_10.993px_rgba(255,185,30,0.28),0_2.356px_6.282px_rgba(255,225,159,0.28)] block w-full px-8"
//               style={{
//                 background:
//                   "radial-gradient(133.33% 122.42% at 52.23% 0%, #FFB91E 0%, #FC8E33 54.74%) ",
//               }}
//             >
//               Sign Up
//             </button>
//             <p className="mt-[37.8px] text-black font-inter text-[10.993px] font-normal">
//               Already have an account?{" "}
//               <span className="text-[#FC8E33]">Log in</span>
//             </p>
//           </div>
//         </form>
//         <footer className="flex flex-col justify-center items-end text-[#595858] lg:hidden lg:flex-row lg:gap-[42px]">
//           <p className="mt-[18.5px] text-[12px] md:text-[14px] lg:text-[16px] font-normal capitalize  items-center mr-6">
//             © 2025 Calvary bible church. All rights reserved
//           </p>
//           <p className="mt-[6.28px] text-[12px] md:text-[14px] lg:text-[16px] font-normal capitalize  items-center mr-6">
//             Terms & conditions
//           </p>
//           <p className="mt-[6.28px] text-[12px] md:text-[14px] lg:text-[16px] font-normal capitalize  items-center mr-6">
//             Privacy policy
//           </p>
//         </footer>
//       </div>
//       <footer className="hidden lg:flex flex-row justify-center items-center text-[#595858] gap-[42px]">
//         <p className="mt-[18.5px] text-[12px] lg:text-[16px] font-normal capitalize">
//           © 2025 Calvary Bible Church. All rights reserved
//         </p>
//         <p className="mt-[6.28px] text-[12px] lg:text-[16px] font-normal capitalize">
//           Terms & Conditions
//         </p>
//         <p className="mt-[6.28px] text-[12px] lg:text-[16px] font-normal capitalize">
//           Privacy Policy
//         </p>
//       </footer>
//     </section>
//   );
// };

// export default LiveChat;

import livechatimage from "../../assets/images/livechatimage.jpg";
import logo from "../../assets/images/cbc-logo.webp";
import eyeIcon from "../../assets/images/eyeIcon.svg";
import { Link } from "react-router-dom";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import SubmitBtn from "../shared/SubmitBtn";

import React from "react";

// const LiveChat = () => {
//   return (
// <section>
// <section className="grid grid-cols-1 md:grid-cols-2 px-[10px] pt-[20px] pb-[108px] md:p-[24px] h-[100%] bg-red-500">
//   <div className=" flex  relative h-full rounded-[16px] md:rounded-[20px] items-center bg-red-500">
//     <img
//       src={livechatimage}
//       alt="Live Image"
//       className="w-full h-[100%]  rounded-[16px]"
//     />
//     <img
//       src={logo}
//       alt="Logo"
//       className=" absolute top-4 rigth-4 w-[45px] h-[45px]  md:w-[69px] md:h-[69px]"
//     />
//     <p></p>
//   </div>

//   {/* FORM DIV */}
//   <div></div>
// </section>

const LiveChat = () => {
  return (
    // pt-[20px] pb-[108px]    px-[16px] md:p-[24px]
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-7  w-full md:gap-[24px] px-[0.5px]">
      <div className="rounded-[16px] md:rounded-[20px] min-h-full liveBg  md:h-screen h-[342px] relative flex items-end w-full">
        {/* <img
            src={livechatimage}
            alt="live chat image"
            className="rounded-[20px] opacity-[4] h-full"
          /> */}
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
                  {/* <MdCheckBoxOutlineBlank /> */}
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
