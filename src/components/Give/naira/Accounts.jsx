import copy from "../../../assets/images/solar_copy.png";
import accounts from "../../../data/giveData";
import { useState } from "react";

const Accounts = () => {
  const filteredNaira = accounts.filter((account) => account.naira === true);
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
    <section>
      <section className="container mx-auto px-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:px-0 lg:grid-cols-4 ">
        {filteredNaira.map((naira) => (
          <div
            key={naira.id}
            className="bg-[#FFECC0] h-[156px] p-[12px] rounded-[8.15px] flex flex-col justify-between md:h-[292px] md:rounded-[15px] md:py-[23px] md:px-[16px]"
          >
            <div>
              {naira.type && (
                <span className="text-[12px] font-bold italic font-inter leading-[100%] bg-white py-[5.43px] px-[16px] rounded-[8.15px] md:text-[16px] md:px-[30px] md:py-[10px] md:rounded-[15px] lg:text-[24px]">
                  {naira.type}
                </span>
              )}
              <div className="mt-2 md:mt-[20px]">
                <img
                  src={naira.bankImg}
                  alt="bank logo"
                  className={`w-[60px] h-[60px] rounded-[8.15px] object-cover md:w-[111px] md:h-[111px] ${
                    naira.noBg ? "" : "bg-white py-2"
                  }`}
                />
              </div>
            </div>

            {copied === naira.id && (
              <span className="text-sm  text-right font-inter text-green-600 md:text-base">
                Copied!
              </span>
            )}
            <div className="flex justify-between items-center md:gap-2">
              <span className="text-base font-inter leading-[100%] md:text-[32.54px]">
                {naira.number}
              </span>

              <div className="flex items-center gap-2">
                <img
                  src={copy}
                  alt="copy logo"
                  className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] cursor-pointer"
                  onClick={() => handleCopy(naira.id, naira.number)}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Accounts;
