import { Link } from "react-router-dom";
import streamIcon from "../../assets/images/stream-icon.svg";
import turningPointImg from "../../assets/images/the-turning-point.png";
import Button from "../shared/Button";

const Hero = () => {
	return (
		<section className="home-hero pt-[424.88px] px-6 pb-12 space-y-4 relative">
			<div className="text-white container mx-auto space-y-2">
				<h1 className="font-semibold text-[32px] font-satoshi leading-full">
					Raising a People of Power, Purpose & Dominion
				</h1>
				<p className="leading-full">
					Worship and serve god with us for six months, and experience a major
					testimony in your life!
				</p>
			</div>

			<div className="space-y-2 space-x-2">
				<Button
					text="Watch Live"
					icon={<img src={streamIcon} alt="Stream live" />}
					variant="solid"
				/>
				<Link className="rounded-full p-2 bg-gradient-to-b from-white to-[#EEF4FF] border border-t-[#F0F6FF] border-b-white">
					I'm New
				</Link>
			</div>

			<img
				src={turningPointImg}
				alt="The turning point illustration"
				className="w-[87px] animate-spin [animation-duration:_7s] absolute -bottom-[43.5px] right-6"
			/>
		</section>
	);
};

export default Hero;
