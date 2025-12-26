import { Link } from "react-router-dom";
import DblQuote from "../shared/DblQuote.jsx";

const LearnMore = () => (
  <section className="container mx-auto pt-16 sm:pt-26 flex p-6 gap-2 md:px-0 md:gap-3 lg:pt-[140px] lg:pb-[45px] xl:pb-[80px] ">
    <div>
      <DblQuote className="md:w-[60px] md:h-[105px] md:pb-10 lg:w-[30px] 2xl:w-[60px]" />
    </div>
    <div className="flex-1 space-y-4 pt-1.5 lg:max-w-[900px]  xl:max-w-[1081px] 2xl:max-w-[1400px]">
      <h3 className="font-satoshi text-xl leading-[120%] md:text-5xl lg:text-[35px] xl:text-[45px] 2xl:text-[52px]">
        Calvary Bible Church is a Christ-centered family — rooted in love for
        God and people.
      </h3>
      <p className="text-sm leading-[120%] font-inter text-justify sm:text-[20px] md:leading-[100%] lg:text-base xl:text-[24px]">
        Overwhelmed by the grace we've found in Jesus, we are worshippers at
        heart, lovers of the local church, and carriers of a divine mission to
        see His Kingdom, come and His will be done on earth.
      </p>
      <div>
        <Link
          to="/about"
          className={`border w-[120px] flex justify-center items-center border-[#989898] bg-gradient-to-b from-[#FFFFFF] to-[#EEF4FF]  rounded-[100px] font-medium font-inter px-4 py-2 text-sm hover:cursor-pointer active:scale-95 transition-transform sm:rounded-[50px] sm:w-[180px] sm:h-[58px] md:w-[220px] lg:h-[44px] lg:w-[170px] xl:h-[58px] xl:w-[220px]`}
        >
          Learn More
		</Link>
      </div>
    </div>
  </section>
);

export default LearnMore;
