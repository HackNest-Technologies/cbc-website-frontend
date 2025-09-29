import copy from "../../../assets/images/solar_copy.png";
import accounts from "../../../data/giveData";
import { useState } from "react";
const ForeignAcc = () => {
  const dollar = accounts.filter((account) => account.naira === false);
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
      <section className="px-6 grid grid-cols-2 gap-3 md:flex  md:justify-center md:gap-10">
        {dollar.map((naira) => (
          <div>
            <div
              key={naira.id}
              className="bg-[#FFECC0] h-[156px] p-[12px] rounded-[8.15px] flex flex-col justify-between md:h-[292px] md:rounded-[15px] md:py-[23px] md:px-[16px] md:w-[300px]"
            >
              <div>
                <div className="mt-2 ">
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
            <div className="mt-2">
              {naira.type && (
                <div className="bg-[#FFB91E47] px-[15px] py-[5px] text-[14px] leading-[100%] rounded-[7.55px] font-inter md:rounded-[15px] md:py-[10px] md:px-[30px] md:text-[24px] md:w-[300px]">
                  {naira.type}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ForeignAcc;
