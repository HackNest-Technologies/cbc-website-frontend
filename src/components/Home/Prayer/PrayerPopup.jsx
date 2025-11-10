import closeImg from "../../../assets/images/closeIcon.png";
import PrayerForm from "./PrayerForm";
const PrayerPopup = ({ onclose }) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/40 px-5 h-full z-[9999] overflow-hidden">
      <section className="bg-[#E8E8E8] w-full rounded-[30px] overflow-auto md:w-[897px]  h-[754px] overflow-y-auto hide-scrollbar">
        <div className="pt-[36px] pb-[12px] px-[36px]  flex justify-between items-center md:px-[36px]">
          <h2 className="text-[24px] font-satoshi font-bold uppercase py-[10px] leading-[100%] md:text-[28px]">
            Submit Prayer request
          </h2>
          <div onClick={onclose}>
            <img src={closeImg} className="w-[33px] h-auto md:w-[50px]" />
          </div>
        </div>
        <p className="border-b-[2px] border-[#FD9F2B] border-dotted md:border-[2.5px]"></p>

        <section className="p-[36px]">
          <PrayerForm/>
        </section>
      </section>
    </section>
  );
};

export default PrayerPopup;
