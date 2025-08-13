import logo from "../../assets/images/cbc-logo.webp";
import  MobileList from "./MobileList";

const MobileFooter = () => {
  return (
    <section className="md:hidden">
      <div className="relative overflow-hidden">
        {/* Logo */}
        <div className="absolute left-[52%] transform -translate-x-1/2 -translate-y-1/2 rounded-full ">
          <img src={logo} alt="Logo" className="object-cover w-[60px] h-auto" />
        </div>

        {/* SVG background with text */}
        <div className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="396"
            // height="762"
            viewBox="0 0 396 762"
            fill="none"
            className="w-full h-full mt-20"
          >
            <path
              d="M148.896 0C157.665 8.95274e-05 164.492 7.38023 168.239 15.3076C174.276 28.079 187.443 36.9346 202.717 36.9346C217.991 36.9346 231.157 28.079 237.194 15.3076C240.941 7.38023 247.769 9.30184e-05 256.537 0H396V762H0V0H148.896Z"
              fill="black"
            />
          </svg>

          {/* <div className="w-full absolute bottom-0 lg:left-[-40px] 2xl:left-[-80px]  overflow-hidden">
            <div className="md:translate-y-[50px] 2xl:translate-y-[90px]">
              <h1 className="font-satoshi stroke-white text-transparent md:text-[130px] xl:text-[180px] 2xl:text-[204px] font-normal md:leading-[120px] xl:leading-[160px] 2xl:leading-[240px] capitalize tracking-wide">
                Calvary Bible
              </h1>
              <h1 className="font-satoshi stroke-white text-transparent md:text-[130px] xl:text-[180px]  2xl:text-[204px] font-normal md:leading-[120px] xl:leading-[160px]  2xl:leading-[240px] capitalize tracking-wide">
                Church
              </h1>
            </div>
          </div>

          <div className="w-full absolute bottom-0  overflow-hidden">
            <div className="text-white pb-10  pr-20 flex justify-end gap-10  translate-y-[20px]">
              <p className="font-inter text-base">
                &copy; 2025 Calvary bible church. All rights reserved
              </p>
              <p className="font-inter text-base">Terms & conditions</p>
              <p className="font-inter text-base">Privacy policy</p>
            </div>
          </div> */}

          {/* Footer links */}
          <footer className="absolute top-[150px] left-0 right-0 bottom-0 z-10">
            <MobileList />
          </footer>
        </div>
      </div>
    </section>
  );
};

export default MobileFooter;
