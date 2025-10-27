import closeImg from "../../../assets/images/closeIcon.png";
const PastorPopup = ({ pastor, onclose }) => {
  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/40 px-5 h-full z-[1000] overflow-hidden">
      <section className="bg-[#E8E8E8] p-[36px] w-full rounded-[30px] overflow-auto md:w-[897px] lg:w-[1028px]">
        <div className="flex justify-end">
          <div onClick={onclose}>
            <img src={closeImg} className="w-[33px] h-auto md:w-[50px] md:h-[50px] object-cover"/>
          </div>
        </div>

        <div className="md:flex py-3">
          <div className="w-[25%]">
            <img
              src={pastor.thumbnail}
              alt={pastor.pastorName}
              className="w-[196px] h-[196px] rounded-[10px] object-cover"
            />

            <p className="text-[24px] pt-7 font-inter font-semibold leading-[100%]">{pastor.pastorName}</p>
            <p className="text-base pt-2 pb-6 font-inter leading-[100%]">{pastor.role}</p>
          </div>

          <div  className="w-[60%]">
            <p className="text-base leading-[100%] font-inter">
              {pastor.description}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PastorPopup;
