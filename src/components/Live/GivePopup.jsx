import streamline from "../../assets/images/streamline_give-gift.svg";
import accounts from "../../data/giveData";
import copy from "../../assets/images/solar_copy.png";
import { useState } from "react";

import "../Home/Hero.css";

const GivePopup = ({ onClose }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section className="flex flex-col rounded-[16px] border-[2px] border-dashed border-[#FC8E33] w-full h-auto md:h-[300px] lg:h-[70vh] lg:border-[3px]">
      {/* Header */}
      <div className="flex p-[16px] justify-between items-center border-b-[2px] border-dashed border-[#FC8E33]">
        <div className="flex items-center gap-[8px]">
          <img src={streamline} alt="logo" className="w-[30px] h-[28px]" />
          <p className="text-black text-[18px] font-bold uppercase">Give</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="px-[18px] rounded-[36px] bg-black"
        >
          <p className="text-white text-[16px] uppercase py-[5px]">Close</p>
        </button>
      </div>

      {/* Accounts */}
      <div className="hide-scrollbar flex flex-col gap-[12px] px-[12px] py-[16px] overflow-y-auto flex-1 ">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-white rounded-[12px] px-[16px] py-[14px] shadow-sm border border-[#F1F1F1]"
          >
            {/* Bank name */}
            <p className="text-[11px] uppercase text-gray-500 font-medium mb-[4px]">
              {account.bankName}
            </p>

            {/* Account name (fixed) */}
            <p className="text-[15px] font-bold text-black mb-[6px]">
              Truth of Calvary Ministries
            </p>


            {/* Currency + Account number */}
            <div className="flex items-center gap-[8px]">
              <span className="px-[10px] py-[2px] text-[11px] font-semibold rounded-full bg-[#FC8E33] text-white">
                {account.currency || account.type?.toUpperCase()}
              </span>

              

              <div className="flex justify-between items-center md:gap-2">
                <p className="text-[15px] font-medium tracking-wide text-gray-800">
                  {account.number}
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={copy}
                    alt="copy logo"
                    className="w-[20px] h-[20px] md:w-[16px] md:h-[16px] cursor-pointer"
                    onClick={() => handleCopy(account.id, account.number)}
                  />
                </div>
              </div>
               {copied === account.id && (
                <span className="text-[10px]  text-right font-inter text-green-600 md:text-xs">
                  Copied!
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GivePopup;
