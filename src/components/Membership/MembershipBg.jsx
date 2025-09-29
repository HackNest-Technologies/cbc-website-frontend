import tvLogo from "../../assets/images/tvLogo.png"
const MembershipBg = () => {
  return (
   <section>
      <div className="bg-[#E8E8E8] h-[150px] relative md:h-[210px]">
        {/* Image positioned absolutely within the background */}
        <div className="container mx-auto absolute left-0 right-0 top-[65px]  pt-[60px] md:pt-[100px] md:top-[70px] md:px-0">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 md:gap-4">
              <button className="text-[18.27px] leading-[100%] font-bold font-satoshi uppercase text-white w-[176px] h-[42px] bg-[#FC8E33] rounded-[32.63px] p-[5.22px] md:w-[270px] md:text-[28px] md:h-[65px] md:rounded-[50px] md:p-[8px]">
                New Convert
              </button>
              <img
                src={tvLogo}
                className="w-[45px] h-[45px]  md:w-[69px] md:h-[69px]"
              />
            </div>
          </div>
        </div>
      </div>
     
    </section>  )
}

export default MembershipBg