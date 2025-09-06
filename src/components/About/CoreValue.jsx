import pillarCard from "../../assets/images/Subtract.webp";
import pillarCardTwo from "../../assets/images/Subtract-2.webp";
import pillarDesk from "../../assets/images/Subtractdesk-1.webp";
import pillarDeskTwo from "../../assets/images/Subtractdesk-2.webp";
const CoreValue = () => {
  return (
    <section className="">
      <div className="pt-16 pl-6 lg:pl-[6.8%]">
        <div className="relative w-full md:pl-[35px] lg:pl-0">
          <img
            src={pillarCard}
            alt=""
            className="object-cover w-full lg:hidden"
          />
          <img
            src={pillarDesk}
            alt=""
            className="object-cover w-full hidden lg:block"
          />{" "}
          <div className="rounded-[16px] absolute bottom-0 right-0 pl-5  pr-6 w-[64%] md:top-[250px] md:pl-10  lg:w-1/2 lg:top-[450px] 2xl:top-[550px]">
            <h3 className=" text-base font-bold font-satoshi leading-[200%] md:text-[40px]  md:font-semibold lg:text-[52px]">
              Our Core Values
            </h3>
            <ul className="list-disc">
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base lg:text-[24px] ">
                Prayer
              </li>
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base lg:text-[24px]">
                Worship
              </li>
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base lg:text-[24px]">
                Community
              </li>
              <li className="text-sm text-inter text-black/70 leading-[120%] py-[3px] md:text-base lg:text-[24px]">
                Discipleship
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-16 pr-6  lg:pr-[6.8%]">
        <div className="relative w-full md:pr-[35px] lg:pr-0">
          <img
            src={pillarCardTwo}
            alt=""
            className="object-cover w-full lg:hidden"
          />
          <img
            src={pillarDeskTwo}
            alt=""
            className="object-cover w-full hidden lg:block"
          />{" "}
          <div className="rounded-[16px] absolute top-[110px] min-[420px]:top-[140px] left-0 pl-6 w-[64%] md:top-[300px] lg:w-1/2 lg:top-[450px] 2xl:top-[550px]  lg:pl-[6.8%]">
            <h3 className=" text-base font-bold font-satoshi leading-[110%] md:text-[40px]  md:font-semibold lg:text-[52px]">
              What We Do
            </h3>
            <p className="text-sm text-inter text-black/70 leading-[120%] py-[8px] md:text-base md:leading-[145%] md:w-[401px] md:py-5 lg:text-[24px]">
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
