import aboutImg from "../../assets/images/about.webp";
import CircularText from "../../utils/CircularText";
import OverView from "./OverView";
import "./About.css"


const AboutChurch = () => {
  return (
    <section>
      {/* Background container */}
      <div className="bg-[#E8E8E8] h-[150px] relative md:h-[210px] lg:h-[267px]">
        {/* Image positioned absolutely within the background */}
        <div className="container mx-auto absolute px-6 left-0 right-0 top-[50px]  pt-[60px] md:pt-[100px] md:px-0">
          <img
            src={aboutImg}
            className="generalBg-heading w-full h-full object-cover rounded-[8px] md:rounded-[16px] md:h-[348px] lg:h-[495px]"
            alt="About Calvary Bible Church"
          />
          <div className="absolute bottom-[30px] px-[20px] text-[#ffffff]">
            <h2 className="about-text text-base leading-[120%] uppercase font-satoshi md:text-[48px] xl:text-[clamp(28px,4.5vw,75px)] lg:leading-[100%]">
              ABOUT
            </h2>
            <h2 className="about-text text-base leading-[120%] uppercase font-satoshi md:text-[48px] xl:text-[clamp(28px,4.5vw,75px)] lg:leading-[100%]">
              calvary bible church
            </h2>
          </div>
         
          <div
            className="absolute bottom-[-30px] right-[40px]  
             md:bottom-[-60px] md:right-[30px] 
             lg:bottom-[-100px] lg:right-[60px]"
          >
           <CircularText/>
          </div>
        </div>
      </div>

      <div className="overview-padding pt-[200px] pb-[110px] px-6 md:flex md:px-0 md:pt-[400px] container mx-auto md:gap-10 md:pb-[230px] lg:pt-[550px]">
        <div className="lg:w-2/5">
          <h2 className="overview text-[32px] font-semibold font-satoshi pt-[50px] md:text-[52px] md:pt-0 lg:text-[clamp(28px,4vw,52px)]">
            Overview
          </h2>
        </div>

        <div className="lg:w-3/5">
          <p className="about-paragraph text-sm font-inter pt-5 leading-[145%] md:text-base lg:text-[clamp(13px,0.8vw,16px)]">
            Calvary Bible church is a vibrant Bible-Centered church devoted to
            proclaiming Christ’s finished work at Calvary and nurturing
            transformative faith in everyday life. We are deeply rooted in the
            Word of God as brethren gather together for powerful worship,
            life-changing house fellowships and communion with the Holy Spirit.
            Our Church Shift teams carry the Gospel into prisons, hospitals and
            neighborhoods where it is needed most – reaching  the unreached with
            the light of Christ. We are a people who believe in a wholesome
            expression of the gospel, ensuring that faith is expressed in word
            and in deed. At Calvary Bible Church, every believer belongs, grows
            and has a testimony that endures in Christ.
          </p>
        </div>
      </div>

      <OverView />
    </section>
  );
};

export default AboutChurch;
