import PillarCard from "./PillarCard";
import pillarsData from "../../data/pillarsData";
import bank from "../../assets/images/bank.png";

const Pillars = () => {
  return (
    <>
      <section className="px-6  container mx-auto md:px-0 md:pt-20 lg:pt-0">
        <div>
          <h2 className="font-semibold font-satoshi text-xl leading-[100%] md:text-[40px] lg:text-[52px] ">
            7 Pillars of Calvary
          </h2>
          <p className="font-inter text-sm leading-[120%] py-6 capitalize md:text-base md:leading-[20px] lg:text-[24px] lg:leading-[30px] lg:w-[1077px]">
            The brand known as truth of Calvary Ministries, aka Calvary Bible
            Church and her network of Churches Globally has seven unique element
            and distinguishing features which is revealed in the fabrics of the
            entire ministry as follows
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-7 md:pt-16">
          {pillarsData.map((pillar) => (
            <div
              key={pillar.id}
              className="relative border-[0.26px]  w-full border-[#D3D5DA] p-[12px] rounded-[8px] my-3"
            >
              <div className="w-[230px] min-[420px]:w-[280px] lg:w-[445px]">
                <h2 className="font-satoshi text-base text-[#0B0A0F] pb-3 md:text-xl md:leading-[22px] lg:leading-[32px]">
                  {pillar.title}
                </h2>
                <p className="text-inter text-sm  text-[#474747] lg:text-base ">
                  {pillar.description}
                </p>
              </div>

              <img
                src={bank}
                className=" absolute right-0 bottom-[6px] w-[67px] object-cover md:w-[99px]"
              />
            </div>
          ))}
        </div>
      </section>
      <PillarCard />
    </>
  );
};

export default Pillars;
