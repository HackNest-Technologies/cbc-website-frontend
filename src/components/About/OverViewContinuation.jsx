import overviewFrame from "../../assets/images/overviewFrame.png";
import overviewFrameOne from "../../assets/images/overviewFrame-1.png";
import "./About.css"

const OverViewContinuation = () => {
  return (
    <section className="relative py-[150px] pb-[40px]">
      <div className="bear-svg w-full h-full  absolute pr-6 bottom-[110px] z-[-1000] md:bottom-[300px] lg:bottom-[450px] xl:bottom-[500px] 2xl:bottom-[550px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 371 253"
          fill="none"
          className="lg:hidden"
        >
          <path
            d="M-41 161.495H214.998C216.663 161.495 218.012 162.844 218.012 164.509V248.986C218.012 250.651 219.362 252 221.026 252L366.986 252C368.651 252 370 250.65 370 248.986V0"
            stroke="#FD9F2B"
            strokeWidth="2"
            strokeDasharray="2.67 2.67"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1420 894"
          fill="none"
          className="hidden"
        >
          <path
            d="M-118 571H849.356V891L1417 891V0"
            stroke="#FD9F2B"
            strokeWidth="5"
            strokeDasharray="10 10"
          />
        </svg>
      </div>
      <div>
        <div className="flex justify-between relative transform  bottom-1/2 -translate-y-[30%] md:-translate-y-[10%] lg:-translate-y-0 2xl:-translate-y-[-20%]  container mx-auto">
          <div className="w-[220px] md:w-[432px] lg:w-[635px]">
            <h2 className="bear-text px-[25px] text-base font-semibold  leading-[100%] font-satoshi md:text-[36px] lg:text-[clamp(28px,3.8vw,52px)] lg:px-0">
              Bear one another’s burdens, and so fulfill the law of Christ.
            </h2>

            <p className="bear-paragraph px-[25px] pt-2 text-sm font-inter text-black/70 md:text-base md:pt-[30px]  lg:text-[clamp(16px,1.3vw,24px)] xl:leading-[30px] lg:px-0">
              At Calvary Bible Church, prayer is our first response and our
              steadfast anchor. We believe in standing in the gap for each other
              in love, and seeking God’s face in every need and desire. 
            </p>
          </div>

          <div className="relative pr-[33px] md:bg-transparent md:pr-[50px] lg:ml-[250px] lg:pr-0">
            <img
              src={overviewFrameOne}
              alt=""
              className="w-[132px] h-auto rounded-[4px] object-cover md:w-[300px] lg:w-[497px] 2xl:w-[597px]"
            />

            <img
              src={overviewFrame}
              alt=""
              className="bearBottom-img w-[95px] h-auto rounded-[4px] object-cover absolute top-[100px] left-[-20px] md:w-[254.11px] md:top-[210px] md:left-[-40px] lg:w-[358px] lg:top-[320px] lg:left-[-140px] 2xl:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverViewContinuation;
