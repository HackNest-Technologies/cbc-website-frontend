import logo from "../../assets/images/cbc-logo.webp";
import FooterList from "./FooterList";
import "../Footer/DesktopFooter.css"

const DesktopFooter = () => {
  return (
    <section className="hidden md:block md:pt-[100px] lg:mt-[100px]">
      <div className="relative">
        {/* Logo */}
        <div className="logo-height absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-full lg:top-[10px] xl:top-[20px] 2xl:top-[20px]">
          <img
            src={logo}
            alt="Logo"
            className="object-cover w-[130px] lg:w-[170px] xl:w-[201px] 2xl:w-[230px] h-auto"
          />
        </div>

        {/* SVG background with text */}
        <div className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1630 1004"
            preserveAspectRatio="none"
            className="hidden lg:block w-full"
          >
            {/* Black background */}
            <path
              d="M648.121 0C664.643 0 677.661 13.5972 682.065 29.5215C696.957 83.3578 751.049 123.251 815.5 123.251C879.951 123.251 934.043 83.3578 948.935 29.5215C953.339 13.5972 966.357 0 982.879 0H1630V1004H0V0H648.121Z"
              fill="black"
            />
            {/* Outlined text */}
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1055 650"
            fill="none"
            className="hidden md:block lg:hidden"
          >
            <path
              d="M414.94 0C428.162 0 438.564 10.8892 442.115 23.625C452.572 61.1303 486.984 88.6475 527.824 88.6475C568.664 88.6473 603.076 61.1301 613.533 23.625C617.084 10.8892 627.486 0 640.708 0H1055V650H0V0H414.94Z"
              fill="black"
            />
          </svg>

          <div className="w-full absolute bottom-0 left-[-35px] lg:left-[-60px] 2xl:left-[-80px]  overflow-hidden">
            <div className="translate-y-[30px] hidden md:block lg:hidden">
              <h1 className="font-satoshi stroke-white-tab text-transparent text-[95px] leading-[105px]  capitalize tracking-wide">
                Calvary Bible
              </h1>
              <h1 className="font-satoshi stroke-white-tab text-transparent text-[clamp(4rem,8vw,95px)]  leading-[clamp(1.5rem,10vw,100px)] capitalize tracking-wide">
                Church
              </h1>
            </div>

             <div className="translate-y-[90px] hidden lg:block">
              <h1 className="font-satoshi stroke-white text-transparent text-[204px] leading-[240px] capitalize tracking-wide">
                Calvary Bible
              </h1>
              <h1 className="font-satoshi stroke-white text-transparent  text-[clamp(10rem,13vw,204px)] leading-[clamp(2.5rem,17vw,240px)] capitalize tracking-wide">
                Church
              </h1>
            </div>
          </div>

          <div className="w-full absolute bottom-0 overflow-hidden">
            <div className="text-white pb-10 px-10 flex justify-end gap-5  lg:gap-10  translate-y-[20px]">
              <p className="font-inter text-xs lg:text-base ">
                &copy; 2025 Calvary bible church. All rights reserved
              </p>
              <p className="font-inter text-xs lg:text-base">Terms & conditions</p>
              <p className="font-inter text-xs lg:text-base">Privacy policy</p>
            </div>
          </div>

          {/* Footer links */}
          <footer className="absolute top-[80px] lg:top-[150px] left-0 right-0 bottom-0 z-10">
            <FooterList />
          </footer>
        </div>
      </div>
    </section>
  );
};

export default DesktopFooter;
