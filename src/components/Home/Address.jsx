import { BsArrowRight } from "react-icons/bs";
import map from "../../assets/images/map-with-pin.png";

const Address = () => (
	<section className="container mx-auto sm:mx-0 mt-14 sm:mt-24">
		<div className="bg-[#FFB91E47] mr-14 p-6 pr-12 pt-12 sm:py-20 relative rounded-r-[11.27px] space-y-4">
			<img
				src={map}
				alt="Map with pointed location"
				className="absolute w-[117.97px] -right-[57.5px] -top-[57.5px] sm:w-[250px] sm:-right-[125px] sm:-top-[125px]"
			/>

			<address className="text-sm not-italic sm:text-[32px]">
				Rehoboth Multi-Purpose Hall, Calvary Bus Stop, Ikotun, 257 Ikotun -
				Idimu Rd, Ikotun, Lagos
			</address>
			<a
				href="#"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 text-[10px] underline text-[#333333] sm:text-2xl"
			>
				Find us on Google Maps <BsArrowRight />
			</a>
		</div>
	</section>
);

export default Address;
