const Statement = () => {
  return (
    <section className="relative py-[60px] overflow-hidden lg:py-[300px] 2xl:pt-[600px]">
      <div className="">
        <div className="w-full h-full absolute pr-6 bottom-[-80px] z-[-1000]  md:top-[10px] md:right-[20px] lg:top-[170px] lg:right-[-40px] xl:left-[5px] 2xl:top-[400px]">
          <div className="overflow-visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="71"
              viewBox="0 0 38 71"
              fill="none"
              className="md:hidden"
            >
              <circle
                cx="2.04319"
                cy="35.0432"
                r="34.406"
                stroke="#FD9F2B"
                strokeWidth="1.2743"
                strokeDasharray="2.55 2.55"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="192"
              viewBox="0 0 82 192"
              fill="none"
              className="hidden md:block"
            >
              <circle
                cx="-14.2424"
                cy="95.7576"
                r="94.0165"
                stroke="#FD9F2B"
                strokeWidth="3.48209"
                strokeDasharray="6.96 6.96"
              />
            </svg>
          </div>
        </div>

        <div className="w-full h-full  absolute pr-6 left-[35px] bottom-[-120px] md:top-[100px] md:left-[66px] lg:top-[250px] lg:left-[120px] xl:left-[90px] 2xl:top-[490px]">
          <div className="overflow-visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 356 108"
              fill="none"
              className="md:hidde"
            >
              <path
                d="M0.0859375 0.662109H329.874V106.429H392.57"
                stroke="#FD9F2B"
                strokeWidth="1.2743"
                strokeDasharray="2.55 2.55"
              />
            </svg>
          </div>
        </div>
        <div className="px-10 pt-[100px] md:flex container mx-auto md:px-0 md:pt-[150px] lg:pt-[140px]">
          <div className="md:w-2/5">
            <h2 className=" text-xl font-bold font-satoshi md:text-[36px] md:font-normal lg:text-[clamp(26px,4vw,52px)]">
              Vision Statement
            </h2>
          </div>
          <ol className="list-none pl-0 pt-4 space-y-2 md:w-3/5">
            <li className="flex items-start gap-3 md:gap-5">

              <span className="flex w-[14px] shrink-0 h-[14px] px-[4.078px] py-[1.064px] flex-col justify-center items-center gap-[1.418px] border border-[#fc8e33] text-[#fc8e33] rounded-full text-[8px] font-satoshi  font-bold leading-none md:text-[24px] md:px-[11.14px] md:rounded-[16px] md:py-[2.91px] md:w-[33.43px] md:h-[33.43px]">
                1
              </span>
              <p className="text-sm font-inter leading-[120%] md:text-base md:leading-[20px] lg:text-[clamp(14px,1.3vw,24px)] lg:leading-[30px]">
                <strong className="font-semibold">Recruitment Center</strong> :
                Recruiting men into God's Kingdom from the enemy's camp. (Psalm
                2:8)
              </p>
            </li>

            <li className="flex items-start gap-3 md:gap-5 ">
              <span className="flex w-[14px] shrink-0 h-[14px] px-[4.078px] py-[1.064px] flex-col justify-center items-center gap-[1.418px] border border-[#fc8e33] text-[#fc8e33] rounded-full text-[8px] font-satoshi  font-bold leading-none md:text-[24px] md:px-[11.14px] md:rounded-[16px] md:py-[2.91px] md:w-[33.43px] md:h-[33.43px]">
                2
              </span>
              <p className="text-sm font-inter leading-[120%] md:text-base md:leading-[20px] lg:text-[clamp(14px,1.3vw,24px)] lg:leading-[30px]">
                <strong className="font-semibold">Laundry Center</strong> :
                Preparing the saints for the second coming of Jesus Christ.
                (John 14:1-3)
              </p>
            </li>

            <li className="flex items-start gap-3 md:gap-5">
              <span className="flex w-[14px] shrink-0 h-[14px] px-[4.078px] py-[1.064px] flex-col justify-center items-center gap-[1.418px] border border-[#fc8e33] text-[#fc8e33] rounded-full text-[8px] font-satoshi  font-bold leading-none md:text-[24px] md:px-[11.14px] md:rounded-[16px] md:py-[2.91px] md:w-[33.43px] md:h-[33.43px]">
                3
              </span>
              <p className="text-sm font-inter leading-[120%] md:text-base md:leading-[20px] lg:text-[clamp(14px,1.3vw,24px)] lg:leading-[30px]">
                <strong className="font-semibold">Teaching Center</strong> :
                Opening the eyes of believers to the realities of Calvary’s
                finished work. (Hosea 4:6)
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Statement;
