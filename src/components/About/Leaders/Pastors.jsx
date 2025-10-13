import { FaArrowRight } from "react-icons/fa6";
import PastorPopup from "./PastorPopup";
import { useState } from "react";

const Pastors = ({ pastors }) => {
  const [popup, setPopup] = useState(null);
  const handleToggle = (id) => {
    setPopup(id);
  };

  const closePopup = () => {
    setPopup(null);
    console.log("click", popup);
  };

  return (
    <section className="px-6 pt-8 md:px-0">
      <div onClick={() => handleToggle(pastors.id)}>
        <img
          src={pastors.thumbnail}
          alt=""
          className="rounded-[9.66px] md:w-full md:rounded-[20.98px] "
        />
      </div>
      <div className="bg-[#FFF0CD] rounded-[12px] p-[15.9px] h-[88px] mt-3 md:h-[113px] md:p-[20px]">
        <h3 className="text-[24px] font-semibold font-satoshi leading-[100%] capitalize md:text-[28px]">
          {pastors.pastorName}
        </h3>
        <div className="flex  gap-3 items-center">
          <span className="font-base leading-[150%] text-[#333] font-inter underline md:text-xl md:my-2">
            Read bio
          </span>
          <FaArrowRight />
        </div>
      </div>
      {popup !== null && <PastorPopup pastor={pastors} onclose={closePopup} />}
    </section>
  );
};

export default Pastors;
