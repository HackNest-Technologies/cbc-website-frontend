import { Link } from "react-router-dom";
import streamIcon from "../../assets/images/stream-icon.svg";
import turningPointImg from "../../assets/images/the-turning-point.png";
import Button from "../shared/Button.jsx";

const Hero = () => {
	return (
		<section className="home-hero pt-[424.88px] pb-12 space-y-4 mobile:space-y-8 relative">
			<div className="container p-6 mx-auto mobile:space-y-8">
				<div className="text-white space-y-2 mobile:space-y-4 mobile:w-[673px]">
					<h1 className="font-semibold text-[32px] font-satoshi leading-full mobile:text-[64px]">
						Raising a People of Power, Purpose & Dominion
					</h1>
					<p className="leading-full mobile:w-[578px] mobile:text-2xl">
						Worship and serve god with us for six months, and experience a major
						testimony in your life!
					</p>
				</div>

				<div className="space-y-2 space-x-2 mobile:space-x-6">
					<Button
						text="Watch Live"
						icon={<img src={streamIcon} alt="Stream live" />}
						variant="solid"
						className="mobile:text-lg mobile:w-[220px] mobile:justify-center mobile:h-[58px]"
					/>
					<Link className="rounded-full p-2 bg-gradient-to-b from-white to-[#EEF4FF] border border-t-[#F0F6FF] border-b-white mobile:py-4 mobile:text-lg mobile:w-[220px] mobile:inline-block mobile:text-center mobile:h-[58px]">
						I'm New
					</Link>
				</div>
			</div>

			<img
				src={turningPointImg}
				alt="The turning point illustration"
				className="w-[87px] mobile:w-[165px] animate-spin [animation-duration:_7s] absolute -bottom-[43.5px] mobile:-bottom-[82.5px] right-6"
			/>
		</section>
	);
};

export default Hero;
