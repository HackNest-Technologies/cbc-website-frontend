import React from "react";
import logo from "../../assets/images/cbc-logo.webp";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import construction from "../../assets/images/construction.png";

const Construction = () => {
  return (
    <div>
      <div className="flex gap-4 justify-start items-center mt-10 ml-10">
        <Link to="/">
          <img
            src={logo}
            alt="Calvary bible church logo"
            className="w-[110px] h-auto object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-[32px] self-stretch">
        <div className="flex flex-col items-center w-[469px]">
          <h3 className="text-black text-center font-satoshi text-[48px] font-normal leading-none mb-5 capitalize">
            Coming Soon!
          </h3>
          <p className="text-black font-satoshi text-[16px]  text-center mb-5 lleading-none font-normal">
            This Marriage e-learning is currently being work on, please check
            back at a later date
          </p>
          <div className="flex gap-2 items-center">
            <Link to="/">
              <FaArrowLeft className="inline mr-1 text-lg" />
            </Link>
            <p className="text-[#333] text-[16px] font-normal font-inter leading-[150%] tracking-[-0.32px] underline underline-offset-auto  ">
              Go Back
            </p>
          </div>
          <img src={construction} alt="" className="w-[469px] h-[352px]" />
        </div>
      </div>
      <footer className=" inline-flex items-center gap-[42px] mt-20 ml-0 sm:ml-0 md:ml-0 lg:ml-[250px] xl:ml-[300px] w-full px-4">
        <div className="text-black items-center font-inter font-[16px] justify-between w-[367px] h-[30px]">
          <p>&copy; 2025 Calvary Bible Church. All rights reserved </p>
        </div>
        <div className="font-inter item-center font-[16px] capitalize text-black w-[147px] h-[30px]">
          <p>Terms & Condition</p>
        </div>
        <p className="item-center capitalize font-inter text-black font-[16px] h-[30px] w-[105px]">
          Privacy Policy
        </p>
      </footer>
    </div>
  );
};

export default Construction;
