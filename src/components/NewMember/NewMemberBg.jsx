import question from "../../assets/images/question.png";
const NewMemberBg = () => {
  return (
    <section>
      <div className="bg-[#E8E8E8] h-[150px] relative md:h-[210px]">
        {/* Image positioned absolutely within the background */}
        <div className="container mx-auto absolute left-0 right-0 top-[65px]  pt-[60px] md:pt-[100px] md:top-[70px] md:px-0">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 md:gap-4">
              <button className="text-[18.27px] leading-[100%] font-bold font-satoshi uppercase text-white w-[176px] h-[42px] bg-[#FC8E33] rounded-[32.63px] p-[5.22px] md:w-[270px] md:text-[28px] md:h-[65px] md:rounded-[50px] md:p-[8px]">
                New Member
              </button>
              <img
                src={question}
                className="w-[45px] h-[45px]  md:w-[69px] md:h-[69px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-[65px] md:flex md:justify-center md:pt-[75px]">
        <h2 className="text-[24px] text-center leading-[120%] font-satoshi uppercase md:w-[688px] md:text-[40px] md:leading-[100%] lg:text-[60px] lg:w-[975px]">Find your church home at calvary bible church</h2>
      </div>
    </section>
  );
};

export default NewMemberBg;
