import icon1 from "../../assets/images/bible-icon.png";
import featImg1 from "../../assets/images/feature-1.png";
import featImg2 from "../../assets/images/feature-2.png";
import featImg3 from "../../assets/images/feature-3.png";
import icon3 from "../../assets/images/gift-icon.png";
import icon2 from "../../assets/images/group-icon.png";

const Features = () => {
	const features = [
		{
			title: "Bible centered teaching",
			bgImg: featImg1,
			icon: icon1,
		},
		{
			title: "Loving Community",
			bgImg: featImg2,
			icon: icon2,
		},
		{
			title: "Impactful Outreach",
			bgImg: featImg3,
			icon: icon3,
		},
	];

	const FeatureCard = ({ title, bgImg, icon }) => (
		<div
			style={{
				backgroundImage: `linear-gradient(#00000044, #00000044), url(${bgImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="py-6 px-4 text-white rounded-2xl h-[373px]"
		>
			<div className="flex flex-col justify-between h-full">
				<img src={icon} alt="" className="w-[58px] h-auto object-cover " />
				<h3 className="text-[34px] leading-[120%] font-satoshi w-[275px] capitalize">{title}</h3>
			</div>
		</div>
	);

	return (
		<section className="container mx-auto p-6 grid-cols-1 grid gap-4 relative  md:grid-cols-3">
			{features.map((feat) => (
				<FeatureCard {...feat} key={feat.title} />
			))}
		</section>
	);
};

export default Features;
