import pastorAndWife from "../../assets/images/pastor-and-wife.png";

const OurLeadership = () => (
	<section className="container mx-auto p-6 space-y-[32.14px]">
		<h3 className="font-satoshi text-[26.71px] mobile:text-[40px] tablet:text-[62.32px]">
			Our Leadership
		</h3>

		<div className="bg-[#E5E5E5] p-4 rounded-[7.35px] space-y-4 mobile:flex mobile:flex-row-reverse justify-between mobile:p-6 mobile:gap-4 tablet:h-[535px]">
			<img
				src={pastorAndWife}
				alt="Pastor and his wife"
				className="mobile:w-[370.56px] mobile:h-[381.56px] tablet:w-[539px] tablet:h-[555px] mobile:translate-y-[80%] tablet:translate-y-[10%]"
			/>
			<div className="space-y-4 mobile:space-y-8 flex-1 tablet:max-w-[472px] tablet:flex flex-col justify-between">
				<h4 className="font-satoshi tablet:text-[32px]">
					PASTOR OLUMIDE EMMANUEL
				</h4>
				<p className="leading-[120%]">
					Pastor Olumide Emmanuel has been the heart and soul of Calvary Bible
					Church for over 35 years. As the founding Overseer, he has transformed
					a small gathering into a vibrant, Bible-centered community where
					members are inspired to live out their faith as true value creators.
					He is a prolific author with more than 100 books to his name, and an
					esteemed speaker in demand globally. His teachings emphasize practical
					applications of faith, encouraging people to become resilient,
					purpose-driven leaders who address real-world challenges with
					integrity and hope. Under his leadership, Calvary Bible Church thrives
					as a beacon of light in the city. Pastor Emmanuel continues to foster
					a culture of empowerment and growth, equipping each member to fulfill
					their God-given purpose and make a meaningful impact in their
					communities.
				</p>
				<button
					type="button"
					className="bloc w-fit p-2 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#EEF4FF] border border-zinc-300"
				>
					View Our Leadership
				</button>
			</div>
		</div>
	</section>
);

export default OurLeadership;
