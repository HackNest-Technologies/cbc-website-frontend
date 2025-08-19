import Button from "../shared/Button.jsx";
import DblQuote from "../shared/DblQuote.jsx";

const LearnMore = () => (
	<section className="container mx-auto pt-16 mobile:pt-26 flex p-6 gap-2">
		<div>
			<DblQuote />
		</div>
		<div className="flex-1 space-y-4 pt-1.5">
			<h3 className="font-satoshi text-xl leading-[120%] mobile:text-5xl tracking-normal">
				Calvary Bible Church is a Christ-centered family — rooted in love for
				God and people.
			</h3>
			<p className="text-justify mobile:text-[20px]">
				Overwhelmed by the grace we've found in Jesus, we are worshippers at
				heart, lovers of the local church, and carriers of a divine mission to
				see His Kingdom, come and His will be done on earth.
			</p>
			<Button
				className="mobile:w-[220px] mobile:h-[58px] mobile:text-lg"
				text="Learn More"
			/>
		</div>
	</section>
);

export default LearnMore;
