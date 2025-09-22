import pastorAndWife from "../../assets/images/pastor-and-wife.png";
import { Link } from "react-router-dom";

const OurLeadership = () => (
  <section className="container mx-auto p-6 space-y-[32.14px]">
    <h3 className="font-satoshi text-[26.71px] leading-[100%] uppercase sm:text-[40px] md:text-[62.32px]">
      Our Leadership
    </h3>

    <div className="bg-[#E5E5E5] py-[14.68px] px-[16px]  rounded-[7.35px] space-y-4 sm:flex sm:flex-row-reverse justify-between sm:p-6 sm:gap-4 md:h-[535px]">
      <p className="text-[13.36px] leading-[100%] font-satoshi capitalize">
        pastor olumide emmanuel
      </p>
      <img
        src={pastorAndWife}
        alt="Pastor and his wife"
        className=" rounded-[9.18px] sm:w-[370.56px] sm:h-[381.56px] md:w-[539px] md:h-[555px] sm:translate-y-[80%] md:translate-y-[10%]"
      />
      <div className="space-y-4 sm:space-y-8 flex-1 md:max-w-[472px] md:flex flex-col justify-between">
        <h4 className="font-satoshi md:text-[32px]">PASTOR OLUMIDE EMMANUEL</h4>
        <p className="text-sm font-inter leading-[120%]">
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
            to="/about"
            className="w-[198px] h-[40px] py-[1.38px] flex items-center px-[16px] font-medium font-inter text-base rounded-[22.96px] bg-gradient-to-b from-[#FFFFFF] to-[#EEF4FF]"
            style={{
              border: "0.46px solid",
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
