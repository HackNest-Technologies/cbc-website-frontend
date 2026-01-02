import pastorAndWife from "../../assets/images/pastor-and-wife.png";
import { Link } from "react-router-dom";
import "./Hero.css";

const OurLeadership = () => (
  <section className="container mx-auto p-6 space-y-[32.14px] md:p-0 md:pt-[80px]">
    <h3 className="font-satoshi uppercase leading-tight text-[clamp(26px,3.5vw,62px)]">
      Our Leadership
    </h3>

    <div className="pastor-bg bg-[#E5E5E5] py-[14.68px] px-[16px]  rounded-[7.35px] space-y-4 sm:flex sm:flex-row-reverse justify-between md:py-[22px] md:px-[44px] sm:gap-4  md:w-full lg:px-[64px] lg:py-[32px] lg:h-[500px]">
      <div className="">
        <img
          src={pastorAndWife}
          alt="Pastor and his wife"
          className="pastor-image rounded-[9.18px] md:w-[350.56px] md:h-[381.56px] sm:translate-y-[80%] md:translate-y-[65%] lg:rounded-[20px] lg:w-[539px]  lg:h-[555px] lg:translate-y-[11%]"
        />
      </div>

      <div className="space-y-4 sm:space-y-8 lg:space-y-0 flex-1 md:flex flex-col justify-between lg:justify-normal">
        <h4
          className="
    font-satoshi
    capitalize
    leading-tight
    text-[clamp(14px,2.2vw,32px)]
  "
        >
          pastor olumide emmanuel
        </h4>

        {/* <p className="leader-paragraph text-sm font-inter leading-[120%] md:text-base lg:w-[472px] lg:py-[40px] "> */}
        <p
        className="
        font-inter
        leading-relaxed
       text-[clamp(14px,0.8vw,16px)]
        lg:max-w-[clamp(280px,40vw,472px)]
       py-[clamp(12px,4vh,40px)]
  "
>
          Pastor Olumide Emmanuel has been the heart and soul of Calvary Bible
          Church for over 35 years. As the founding Overseer, he has transformed
          a small gathering into a vibrant, Bible-centered community where
          members are inspired to live out their faith as true value creators.
          He is a prolific author with more than 100 books to his name, and an
          esteemed speaker in demand globally. His teachings emphasize practical
          applications of faith, encouraging people to become resilient,
          purpose-driven leaders who address real-world challenges with
          integrity and hope. Under his leadership, Calvary Bible Church thrives
          as a beacon of light in the city. Pastor Emmanuel continues to foster
          a culture of empowerment and growth, equipping each member to fulfill
          their God-given purpose and make a meaningful impact in their
          communities.
        </p>
       <div>
  <Link
    to="/leadership"
    className="
      inline-flex items-center justify-center
      font-inter font-medium
      text-[clamp(14px,1.2vw,18px)]
      h-[clamp(40px,6vh,58px)]
      px-[clamp(16px,2vw,32px)]
      rounded-[clamp(22px,3vw,34px)]
      bg-gradient-to-b from-[#FFFFFF] to-[#EEF4FF]
      transition-transform active:scale-95
    "
    style={{
      border: "1px solid #EEF4FF",
      borderImage:
        "linear-gradient(180deg, #F0F6FF 0%, #FFFFFF 100%), linear-gradient(0deg, #989898, #989898)",
      borderImageSlice: 1,
    }}
  >
    View Our Leadership
  </Link>
</div>

      </div>
    </div>
  </section>
);

export default OurLeadership;
