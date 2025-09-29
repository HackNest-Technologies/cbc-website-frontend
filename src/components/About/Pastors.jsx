import { FaArrowRight } from "react-icons/fa6";

const Pastors = ({ thumbnail, pastorName }) => {
  return (
    <section className="px-6 pt-8 md:px-0">
      <div>
        <img src={thumbnail} alt="" className="rounded-[9.66px] md:w-full md:rounded-[20.98px] " />
      </div>
      <div className="bg-[#FFF0CD] rounded-[12px] p-[15.9px] h-[88px] mt-3 md:h-[113px] md:p-[20px]">
        <h3 className="text-[24px] font-semibold font-satoshi leading-[100%] capitalize md:text-[28px]">
          {pastorName}
        </h3>
        <div className="flex  gap-3 items-center">
          <span className="font-base leading-[150%] text-[#333] font-inter underline md:text-xl md:my-2">
            Read bio
          </span>
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Pastors;
