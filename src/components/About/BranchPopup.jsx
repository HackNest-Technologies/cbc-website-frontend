import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import closeImg from "../../assets/images/closeIcon.png";
import { FaArrowRight } from "react-icons/fa";

const BranchPopup = ({ branchData, onclose }) => {
 const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    branchData.address
  )}`;
  
    
  return (
    <section className="fixed inset-0 flex items-center bg-black/40 px-5 h-full z-[1000] overflow-hidden">
      <section className="bg-[#E8E8E8] w-full py-[36px] px-[16px] rounded-[15px] overflow-auto">
        <div className=" flex justify-between">
          <img
            src={branchData.thumbnail}
            className="rounded-[15px] w-[116px]  h-[80px] object-cover "
          />
          <div onClick={onclose}>
            <img src={closeImg} className="w-[33px] h-auto" />
          </div>
        </div>
        <h3 className="text-[26px] font-satoshi font-bold uppercase py-[10px] leading-[100%]">
          {" "}
          {branchData.branch}
        </h3>
        <div>
          <div className="flex gap-3 items-center">
            <CiLocationOn />
            <p className="text-base leading-[100%] text-[#7F7F7F] py-[9px] font-inter">
              {branchData.address}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <IoCallOutline  />
            <p className="text-base leading-[100%] text-[#7F7F7F] py-[9px] font-inter">
              {branchData.contact}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center py-3">
          <img
            src={branchData.pastorImg}
            className="w-[54px] h-[54px] rounded-[51.88px] border-2 border-dotted  border-[#FD9F2B] p-[4px]"
          />
          <div>
            <h4 className="text-[24px] leading-[100%] font-inter font-semibold">
              {branchData.pastorName}
            </h4>
            <span className="text-base font-inter pt-1 ">
              {branchData.role}
            </span>
          </div>
        </div>

        <p className="text-base  leading-[100%] font-inter">
          {branchData.description}
        </p>
        {/*  Opens Google Maps in a new tab */}
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 items-center pt-4"
        >
          <p className="text-[#333333] text-xl underline font-inter leading-[150%]">
            Find on Google Maps
          </p>
          <FaArrowRight className="text-[#000000]" />
        </a>
      </section>
    </section>
  );
};

export default BranchPopup;


