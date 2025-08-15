import logo from "../../assets/images/cbc-logo.webp";
import FooterList from "./FooterList";

const DesktopFooter = () => {
  return (
    <section className="hidden lg:block ">
      <div className="relative">
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-full lg:top-[10px] xl:top-[20px] 2xl:top-[20px]">
          <img
            src={logo}
            alt="Logo"
            className="object-cover lg:w-[170px] xl:w-[201px] 2xl:w-[230px] h-auto"
          />
        </div>

        {/* SVG background with text */}
        <div className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1630 1004"
            preserveAspectRatio="none"
            className="w-full mt-[100px] h-[1104px]"
          >
            {/* Black background */}
            <path
              d="M648.121 0C664.643 0 677.661 13.5972 682.065 29.5215C696.957 83.3578 751.049 123.251 815.5 123.251C879.951 123.251 934.043 83.3578 948.935 29.5215C953.339 13.5972 966.357 0 982.879 0H1630V1004H0V0H648.121Z"
              fill="black"
            />

            {/* Outlined text */}
          </svg>

          <div className="w-full absolute bottom-0 lg:left-[-40px] 2xl:left-[-80px]  overflow-hidden">
            <div className="translate-y-[90px]">
              <h1 className="font-satoshi stroke-white text-transparent text-[204px] leading-[240px] capitalize tracking-wide">
                Calvary Bible
              </h1>
              <h1
                className="font-satoshi stroke-white text-transparent text-[clamp(10rem,13vw,204px)] leading-[clamp(2.5rem,17vw,240px)] capitalize tracking-wide">
                Church
              </h1>
            </div>
          </div>

          <div className="w-full absolute bottom-0 overflow-hidden">
            <div className="text-white pb-10  px-10 flex justify-end gap-10  translate-y-[20px]">
              <p className="font-inter text-base">
                &copy; 2025 Calvary bible church. All rights reserved
              </p>
              <p className="font-inter text-base">Terms & conditions</p>
              <p className="font-inter text-base">Privacy policy</p>
            </div>
          </div>

          {/* Footer links */}
          <footer className="absolute top-[150px] left-0 right-0 bottom-0 z-10">
            <FooterList />
          </footer>
        </div>
      </div>
    </section>
  );
};

export default DesktopFooter;
