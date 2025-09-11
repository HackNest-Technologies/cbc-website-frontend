import { Link } from "react-router-dom";
import question from "../assets/images/question.png";
import { FaArrowRight } from "react-icons/fa";
 
const AreYouNewPage = () => {
  return (
    <section>
      {/* Background container */}
      <div className="bg-[#E8E8E8] h-[150px] relative md:h-[210px] lg:h-[267px]">
        {/* Centered inner section */}
        <div className="container mx-auto absolute px-6 left-0 right-0 top-[50px] pt-[60px] md:pt-[100px] md:px-0">
          <section>
            <section className="relative bg-[#FC8E33] h-[180px] rounded-[8px] md:rounded-[16px] md:h-[360px] lg:h-[420px]">
              {/* Central text */}
              <h2 className="absolute inset-0 flex justify-center items-center text-center text-[20px] leading-[100%] text-white uppercase font-satoshi font-bold md:text-[53px] lg:text-[75px] lg:leading-[100%]">
                you’re new?
              </h2>

              {/* Floating texts */}
              <p className="absolute top-[8px] left-[15px] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[-25deg]">
                that's nice!
              </p>
              <p className="absolute  left-[45%] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[20deg]">
                amazing!
              </p>
              <p className="absolute  right-6 text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[15deg]">
                welcome!
              </p>
              <p className="absolute bottom-[40%] right-[2px] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[25deg] lg:bottom-[-0px] lg:rotate-[20deg] ">
                we love you!
              </p>
              <p className="absolute bottom-[8px] left-[50%] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[-28deg] lg:bottom-[-10px]">
                welcome!
              </p>
              <p className="absolute bottom-8 left-[0px] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[30deg] md:rotate-[21deg] md:bottom-[55px] lg:bottom-[20px]">
                thanks for coming!
              </p>
            </section>
          </section>
        </div>
      </div>

      {/* Second section */}
      <section className="px-6 pt-[200px] container mx-auto md:px-0 md:pt-[400px] md:mb-[60px] md:grid md:grid-cols-2 md:gap-4 lg:mb-0">
        <section className="relative">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 332 243"
              fill="none"
              className="lg:hidden"
            >
              <path
                d="M331 77.1464V236.815C331 239.678 328.678 242 325.815 242H6.18548C3.32162 242 1 239.678 1 236.815V6.18548C1 3.32162 3.32162 0.999987 6.18548 0.999987H244.913"
                stroke="#FD9F2B"
                strokeWidth="1.29637"
                strokeDasharray="2.59 2.59"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1277 601"
              fill="none"
              className="hidden lg:block"
            >
              <path
                d="M1274 260.125V578C1274 589.046 1265.05 598 1254 598H23C11.9543 598 3 589.046 3 578V23C3 11.9543 11.9543 3 23 3H942.435"
                stroke="#FD9F2B"
                strokeWidth="5"
                strokeDasharray="10 10"
              />
            </svg>
          </div>

          <div>
            <img
              src={question}
              alt=""
              className="w-[24px] h-[24px] absolute top-[10px] left-[15px] md:w-[65px] md:h-[65px] md:top-[30px] md:left-[30px] lg:w-[93px] lg:h-[93px]"
            />
            <div className=" absolute bottom-[10px] py-[40px] px-[20px]  md:left-[30px] md:bottom-[15%]   lg:bottom-[2vw]">
              <h4 className="text-[40px] mb-2 leading-[100%] font-satoshi font-bold md:mb-0 md:text-[60px] lg:text-[62.32px] ">
                New Member
              </h4>
              <div className="">
                <Link to="/new-member" className="flex items-center gap-4">
                  <span className="underline text-inter text-[24px] leading-[150%] md:text-[17px] lg:text-[25px]">
                    Click here
                  </span>
                  <FaArrowRight className="text-[#000000] text-[16px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[40px] md:pt-0">
          <section className="relative">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 332 243"
                fill="none"
                className="lg:hidden"
              >
                <path
                  d="M331 77.1464V236.815C331 239.678 328.678 242 325.815 242H6.18548C3.32162 242 1 239.678 1 236.815V6.18548C1 3.32162 3.32162 0.999987 6.18548 0.999987H244.913"
                  stroke="#FD9F2B"
                  strokeWidth="1.29637"
                  strokeDasharray="2.59 2.59"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1277 601"
                fill="none"
                className="hidden lg:block"
              >
                <path
                  d="M1274 260.125V578C1274 589.046 1265.05 598 1254 598H23C11.9543 598 3 589.046 3 578V23C3 11.9543 11.9543 3 23 3H942.435"
                  stroke="#FD9F2B"
                  strokeWidth="5"
                  strokeDasharray="10 10"
                />
              </svg>
            </div>

            <div>
              <img
                src={question}
                alt=""
                className="w-[24px] h-[24px] absolute top-[10px] left-[15px] md:w-[65px] md:h-[65px] md:top-[30px] md:left-[30px] lg:w-[93px] lg:h-[93px]"
              />
              <div className=" absolute bottom-[10px] py-[40px] px-[32px] md:left-[30px] md:bottom-[15%]  lg:bottom-[2vw]">
                <h4 className="text-[40px] mb-2 leading-[100%] font-bold font-satoshi md:mb-0 md:text-[60px] lg:text-[62.32px] ">
                  New Convert
                </h4>
                <div className="">
                  <Link to="/new-convert" className="flex items-center gap-4">
                    <span className="underline text-inter text-[24px] leading-[150%] md:text-[17px] lg:text-[25px]">
                      Click here
                    </span>
                    <FaArrowRight className="text-[#000000] text-[16px]" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

    </section>
  );
};

export default AreYouNewPage;
