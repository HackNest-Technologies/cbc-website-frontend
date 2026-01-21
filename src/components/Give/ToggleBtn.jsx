import { useState } from "react";
import Accounts from "../Give/naira/Accounts";
import ForeignAcc from "../Give/foreign/ForeignAcc";
const ToggleBtn = () => {

  const [isActive, setIsActive] = useState("naira");

  const toggleBtn = (toggleType) => {
    
    setIsActive(toggleType);
    console.log(toggleType, "mode");
  };
  return (
    <>
      <section className="margin-height px-6 mb-10 mt-10 md:flex md:justify-center lg:mt-5 lg:mb-12 ">
        <div className="border rounded-[10.87px]  p-[8.15px] flex justify-between items-center md:w-[560px] md:p-[15px] md:rounded-[20px]">
          <span
            className={`py-[5.43px]  px-[16.3px] text-inter font-semibold text-sm leading-[100%] cursor-pointer md:text-[24px]  ${
              isActive === "naira" ? "bg-[#FD9F2B] py-[5.43px]  px-[16.3px] font-inter rounded-[8px] text-white md:rounded-[12px] md:py-[10px] md:px-[30px] " : ""
            }`}
            onClick={() => toggleBtn("naira")}
          >
            Naira accounts
          </span>
          <span
            className={`py-[5.43px]  px-[16.3px] text-inter font-semibold text-sm leading-[100%] cursor-pointer md:text-[24px]  ${
              isActive === "dollar" ? "bg-[#FD9F2B] py-[5.43px]  px-[16.3px] font-inter rounded-[8px] text-white md:rounded-[12px] md:py-[10px] md:px-[30px] " : ""
            }`}
            onClick={() => toggleBtn("dollar")}>
            Domiciliary account
          </span>
        </div>
      </section>

      {isActive === "naira" ? <Accounts /> : <ForeignAcc />}
    </>
  );
};

export default ToggleBtn;
