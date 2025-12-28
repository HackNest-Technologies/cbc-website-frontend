import { BsArrowRight } from "react-icons/bs";
import map from "../../assets/images/map-with-pin.png";
import "./Hero.css";
const Address = () => {
  const address =
    "Rehoboth Multi-Purpose Hall, Calvary Bus Stop, Ikotun, 257 Ikotun - Idimu Rd, Ikotun, Lagos";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="container mx-auto sm:mx-0 mt-14 sm:mt-24 md:pt-[90px] xl:pt-[250px] 2xl:pt-[150px]">
      <div className="bg-[#FFB91E47] mr-14 p-6 pr-12 pt-12 sm:py-20 relative rounded-r-[11.27px] space-y-4 md:rounded-r-[30px] lg:py-[67px] lg:px-[6.5vw]">
        <img
          src={map}
          alt="Map with pointed location"
          className="absolute w-[117.97px] -right-[57.5px] -top-[57.5px] sm:w-[250px] sm:-right-[125px] sm:-top-[125px] md:w-[270px] object-cover md:-right-[150.5px] lg:w-[314px] lg:top-[-200px] lg:right-[-100.5px] xl:w-[400px] 2xl:w-[450px] xl:top-[-250px] xl:right-[-200.5px]"
        />

        <address className="address-text text-sm font-satoshi leading-[145%] not-italic sm:text-[32px] lg:text-[30px] xl:text-[48px] lg:w-[656px] xl:w-[1000px] ">
          {address}
        </address>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] leading-[150%] underline text-[#333333] font-inter sm:text-2xl lg:text-xs lg:w-[400px] xl:text-[20px] **inline-flex w-full py-2 px-4**"
        >
          Find us on Google Maps <BsArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Address;
