import featImg1 from "../../assets/images/feature-1.png";
import featImg2 from "../../assets/images/feature-2.png";
import featImg3 from "../../assets/images/feature-3.png";

const Features = () => (
	<section className="container mx-auto p-6 grid-cols-1 grid gap-4 relative z-1 mobile:grid-cols-3">
		<img src={featImg1} alt="Bible Centered Teaching" />
		<img src={featImg2} alt="Loving Community" />
		<img src={featImg3} alt="Impactful Outreach" />
	</section>
);

export default Features;
