import closeImg from "../../../assets/images/closeIcon.png";

const PopupWrapper = ({ title, children, onClose }) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/40 px-5 h-full z-[9999] overflow-hidden">
      <section className="bg-[#E8E8E8] w-full rounded-[30px] md:w-[897px] max-h-[754px] overflow-y-auto hide-scrollbar">
        {/* Header */}
        <div className="pt-[36px] pb-[12px] px-[16px] flex justify-between items-center md:px-[36px]">
          <h2 className="text-[24px] font-satoshi font-bold uppercase py-[10px] leading-[100%] md:text-[28px]">
            {title}
          </h2>
          <div onClick={onClose} className="cursor-pointer">
            <img src={closeImg} className="w-[33px] h-auto md:w-[50px]" alt={`Close ${title}`} />
          </div>
        </div>
        
        {/* Orange border */}
        <p className="border-b-[2px] border-[#FD9F2B] border-dotted md:border-[2.5px]"></p>

        {/* Content */}
        {children}
      </section>
    </section>
  );
};

export default PopupWrapper;