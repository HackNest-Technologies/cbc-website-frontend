import { FaArrowRight } from "react-icons/fa6";

const Overseer = ({ overseer }) => {
  return (
    <section className="container mx-auto relative px-6 pt-[50px] pb-3 md:px-0 overflow-hidden lg:pt-[120px]">
      {/* Heading behind card */}
      <h2 className="absolute top-[24px] text-[40px] leading-[100%] font-satoshi md:text-[96px] md:top-[-20px] lg:text-[136px] lg:leading-[100%] lg:top-[30px]">
        Our Leadership
      </h2>

      {/* Card */}
      <div className="relative bg-[#FFF0CD] rounded-[14.154px] overflow-hidden p-[16px] md:flex md:gap-6 md:p-[16px] lg:p-[20px] ">
        <div className="md:w-1/2">
          <img
            src={overseer.thumbnail}
            alt={overseer.pastorName}
            className="rounded-[10px] w-full object-cover md:h-full md:rounded-[10.62px] lg:rounded-[15px]"
          />
        </div>

        <div className="md:w-4/6">
          <h3 className="text-[24px] font-semibold font-satoshi capitalize mt-4 md:mt-0 md:leading-[100%]  lg:text-[32px] lg:leading-[100%]">
            {overseer.pastorName}
          </h3>

          <p className="py-3 text-sm font-inter text-black/70 lg:text-base lg:leading-[30px] lg:pt-[40px] 2xl:pt-[100px]">{overseer.description}</p>
          <a href="https://www.olumideemmanuel.org/" className="flex  gap-2 items-center lg:absolute bottom-[15px] lg:gap-3">
            <span className="text-base text-[#333] font-inter leading-[150%] underline lg:text-xl lg:leading-[150%]">
              Learn more
            </span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overseer;
