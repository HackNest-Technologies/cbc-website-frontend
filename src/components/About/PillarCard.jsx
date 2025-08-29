import pillarCard from "../../assets/images/Subtract.webp";
import pillarCardTwo from "../../assets/images/Subtract-2.webp";
import pillarDesk from "../../assets/images/Subtractdesk-1.webp";
import pillarDeskTwo from "../../assets/images/Subtractdesk-2.webp";

const PillarCard = () => {
  return (
    <section className="">
      <div className="pt-16 pl-6 lg:pl-[6.8%]">
        <div className="relative w-full">
          <img
            src={pillarCard}
            alt=""
            className="object-cover w-full lg:hidden"
          />
          <img
            src={pillarDesk}
            alt=""
            className="object-cover w-full hidden lg:block"
          />

          <div className="rounded-[16px] absolute bottom-0 right-0 px-2  pr-6 w-[64%] md:top-[300px] lg:pr-[6.8%] lg:w-1/2 lg:top-[360px] 2xl:top-[500px]">
            <h3 className=" text-base font-bold font-satoshi leading-[110%] md:text-[40px] md:leading-[110%] md:font-semibold lg:text-[52px]">
              Those who worship Him, must worship in spirit and in truth.
            </h3>
            <p className="text-sm text-inter text-black/70 leading-[120%] py-[5px] md:text-base md:pt-10 lg:text-[24px] lg:leading-[30px] xl:w-[580px]">
              Worship is a life-changing encounter, and the greatest thing a man
              can give to God. Join us as we declare His greatness with
              gratitude.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 pr-6 lg:pr-[6.8%]">
        <div className="relative w-full">
          <img
            src={pillarCardTwo}
            alt=""
            className="object-cover w-full lg:hidden"
          />
          <img
            src={pillarDeskTwo}
            alt=""
            className="object-cover w-full hidden lg:block"
          />

          <div className="rounded-[16px] absolute top-[110px] min-[420px]:top-[140px] left-0 pl-6 w-[64%]  md:top-[300px] lg:pl-[6.8%] lg:w-1/2 lg:top-[400px] 2xl:top-[500px]">
            <h3 className=" text-base font-bold font-satoshi leading-[110%] md:text-[40px]  md:font-semibold lg:text-[52px]">
              Where two or three are gatthered, He is there
            </h3>
            <p className="text-sm text-inter text-black/70 leading-[120%] py-[8px] md:text-base md:pt-10 lg:text-[24px] lg:leading-[30px] xl:w-[580px]">
              Every gathering is a family united in purpose. We embrace one
              another , and create a community where people thrive and lives are
              transformed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarCard;
