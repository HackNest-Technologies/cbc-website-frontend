import { Link } from "react-router-dom";
import streamIcon from "../../assets/images/stream-icon.svg";
import turningPointImg from "../../assets/images/the-turning-point.png";
import Button from "../shared/Button.jsx";

const Hero = () => {
	return (
		<section className="home-hero pt-[424.88px] pb-12 space-y-4 sm:space-y-8 relative">
			<div className="container p-6 mx-auto space-y-8">
				<div className="text-white space-y-2 md:space-y-4 md:w-[673px]">
					<h1 className="font-semibold text-[32px] font-satoshi leading-full sm:text-[64px] md:text-[75px]">
						Raising a People of Power, Purpose & Dominion
					</h1>
					<p className="leading-full sm:w-[578px] sm:text-2xl">
						Worship and serve god with us for six months, and experience a major
						testimony in your life!
					</p>
				</div>

				<div className="space-y-2 space-x-2 md:space-x-6">
					<Button
						text="Watch Live"
						icon={<img src={streamIcon} alt="Stream live" />}
						variant="solid"
						className="sm:text-lg sm:w-[220px] sm:justify-center sm:h-[58px]"
					/>
					<Link className="rounded-full p-2 bg-gradient-to-b from-white to-[#EEF4FF] border border-t-[#F0F6FF] border-b-white sm:py-4 sm:text-lg sm:w-[220px] sm:inline-block sm:text-center sm:h-[58px]">
						I'm New
					</Link>
				</div>
			</div>

			<img
				src={turningPointImg}
				alt="The turning point illustration"
				className="w-[87px] md:w-[165px] animate-spin [animation-duration:_7s] absolute -bottom-[43.5px] sm:-bottom-[82.5px] right-6"
			/>
		</section>
	);
};

export default Hero;
