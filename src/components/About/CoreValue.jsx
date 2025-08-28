import pillarCard from "../../assets/images/Subtract.webp";
import pillarCardTwo from "../../assets/images/Subtract-2.webp";
const CoreValue = () => {
  return (
    <section className="">
      <div className="pt-16 pl-6">
        <div className="relative w-full pl-[35px]">
          <img src={pillarCard} alt="" />
          <div className="rounded-[16px] absolute bottom-0 right-0 pl-5  pr-6 w-[64%] md:top-[250px] md:pl-10">
            <h3 className=" text-base font-bold font-satoshi leading-[200%] md:text-[40px]  md:font-semibold">
              Our Core Values
            </h3>
            <ul className="list-disc">
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base ">
                Prayer
              </li>
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base">
                Worship
              </li>
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base">
                Community
              </li>
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base">
                Discipleship
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16 pr-6">
        <div className="relative w-full md:pr-[35px]">
          <img src={pillarCardTwo} alt="" />
          <div className="rounded-[16px] absolute top-[110px] min-[420px]:top-[140px] left-0 pl-6 w-[64%] md:top-[300px] ">
            <h3 className=" text-base font-bold font-satoshi leading-[110%] md:text-[40px]  md:font-semibold">
              What We Do
            </h3>
            <p className="text-sm text-inter text-black/70 leading-[120%] py-[8px] md:text-base md:leading-[145%] md:w-[401px] md:py-5">
              From small groups to community outreach, prayer gatherings, and
              global missions, we live out our calling to be salt and light
              wherever we are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
