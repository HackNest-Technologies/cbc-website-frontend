import giveWithLove from "../../assets/images/giveLove.png";

import Ellipse from "../../assets/images/Ellipse448.png";
import paystack from "../../assets/images/paystack.png";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <section className="px-6 pt-10 container mx-auto md:px-0 md:pt-[150px] md:mb-[60px] lg:pt-[200px] lg:mb-0">
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
            src={giveWithLove}
            alt=""
            className="w-[71px] object-cover h-[71px] absolute top-[-15px] right-0 md:w-[214px] md:h-[193px] md:top-[-40px] lg:w-[305px]  lg:h-[275px]"
          />

          <img
            src={Ellipse}
            alt=""
            className="w-[24px] h-[24px] absolute top-[10px] left-[15px] md:w-[65px] md:h-[65px] md:top-[30px] md:left-[30px] lg:w-[93px] lg:h-[93px]"
          />
          <div className="w-[80vw] absolute bottom-[12px] px-[16px] md:w-[60vw] md:left-[30px] md:bottom-[15%] lg:w-[45vw]  lg:bottom-[2vw]">
            <h4 className="text-[24px] mb-2 leading-[100%] font-satoshi md:mb-0 md:text-[40px] lg:text-[62.32px] ">
              Give Online
            </h4>
            <p className="text-[14px] leading-[120%]  font-inter md:text-base md:py-3 lg:text-lg lg:py-6">
              Use the form below to give via card, transfer, or mobile options.
              Every gift goes directly into ministry efforts as we transform
              lives, raise disciples, and reach the nations with the Gospel.
            </p>

            <div className="border mt-4 flex justify-center py-2  px-6 w-full rounded-[25.93px] md:mb-5 md:w-full md:h-[56px] lg:rounded-[100px] lg:h-[83px]">
              <Link to="/" className="flex justify-center items-center gap-4">
                <span className="text-center text-inter leading-[100%] text-[8px]  md:text-[17px] lg:text-[25px] ">
                  Pay with
                </span>
                <img
                  src={paystack}
                  alt=""
                  className="w-[70px] object-cover h-auto  md:h-[51px] md:w-[188px] lg:w-[268px] "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Payment;
