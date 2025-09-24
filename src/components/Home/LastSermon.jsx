import logo from "../../assets/images/cbc-logo.webp";
import rectangularBg from "../../assets/images/rectangular-bg.png";
import sermonBanner from "../../assets/images/service-banner.png";
import streamIcon from "../../assets/images/stream-icon.svg";
import Button from "../shared/Button.jsx";
import WhiteBgBtn from "../shared/WhiteBgBtn.jsx";

const LastSermon = () => {
  const serviceInfo = [
    {
      title: "Importance of prayer",
      description: "Building a deep relationship with Jesus",
      preacher: "Pastor. Olumide Emmanuel",
    },
  ];

  const InfoBlock = ({ title, description, preacher }) => (
    <div className="space-y-2">
      <h4 className="uppercase leading-[100%] pb-1 border-b-[#D6D6D6] border-b-[0.46px] text-[7.38px] sm:text-base font-satoshi">
        sermon series
      </h4>
      <p className="text-sm leading-[100%] font-inter sm:text-[32px] sm:pt-3">
        {description}
      </p>
      <h4 className="uppercase leading-[100%] pb-1 border-b-[#D6D6D6] border-b-[0.46px] text-[7.38px] sm:text-base font-satoshi">
        sermon series
      </h4>
      <p className="text-sm leading-[100%] font-inter sm:text-[32px] sm:pt-3">
        {title}
      </p>
      <h4 className="uppercase leading-[100%] pb-1 border-b-[#D6D6D6] border-b-[0.46px] text-[7.38px] sm:text-base font-satoshi">
        Preacher
      </h4>
      <p className="text-sm leading-[100%] font-inter sm:text-[32px] sm:pt-3">
        {preacher}
      </p>
    </div>
  );

  return (
    <section className="relative sm:mt-8">
      <div className="absolute h-[837.42px] md:h-[1500px] w-full -top-30 md:-top-60 -z-50">
        <img src={rectangularBg} alt="" className="min-w-full h-full block" />
        <div className="relative">
          <img
            src={logo}
            alt=""
            className="absolute w-[73px] md:w-[138px] left-[60%] bottom-13 md:bottom-22"
          />
        </div>
      </div>

      <div className="container mx-auto py-6 px-4 pb-24">
        <div className="relative space-y-[22.14px]">
          <h3 className="text-center leading-[100%] font-satoshi text-[18.45px] uppercase sm:text-[26px] md:text-[40px] md:pb-4 ">
            Lastest Sermon
          </h3>

          {/* TODO: Consume API for last sermon */}
          <div className="bg-white px-2  pt-[8px] pb-[16px]  space-y-[14.76px] rounded-[3.69px] md:max-w-[805.5px] lg:max-w-full mx-auto md:space-y-8 md:py-[24px] md:px-[32px] md:rounded-[8px] lg:grid grid-cols-2 gap-4 items-center">
            <img
              src={sermonBanner}
              alt="Last sermon"
              className="rounded-[11.1px]"
            />

            <div className="space-y-[14.76px] sm:space-y-8">
              <div className="space-y-2 sm:space-y-4.5">
                {serviceInfo.map((info, index) => (
                  <div key={index}>
                    <InfoBlock key={info.title} {...info} />
                  </div>
                ))}
              </div>

              <div className=" flex space-x-2 items-center space-y-2 sm:space-x-4">
                <Button
                  text="Watch Live"
                  spanclass="sm:text-base md:text-lg"
                  icon={
                    <img
                      src={streamIcon}
                      alt="Stream live"
                      className="sm:w-[30px] sm:h-[30px] object-cover"
                    />
                  }
                  className="sm:text-lg sm:w-[220px] sm:justify-center sm:h-[58px] md:text-[18px]"
                />

                <WhiteBgBtn link="/past-sermon" text="All sermons"  className="sm:text-lg sm:w-[220px] sm:justify-center sm:h-[58px] md:text-[18px] md:rounded-[500px] md:py-[3px]"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSermon;
