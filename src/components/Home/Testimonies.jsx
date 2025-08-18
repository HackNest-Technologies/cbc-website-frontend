import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import avatar from "../../assets/images/avatar.png";
import Button from "../shared/Button.jsx";
import DblQuote from "../shared/DblQuote.jsx";

const _testimonies = [
	{
		testifier: "Mr. Peter Parker",
		testimony:
			"Last year was very turbulent for me. In October, I lost my job without warning or explanation. It was a terrible period and it felt like the world was against me, But I held on to God. I went to the camp and prayed for three days. In November, to the glory of God, I got a new job! But that’s not all. For four years, I walked away from church. I fell deep into idolatry, believing churches were a scam. Still, God never gave up on me. I’ve rededicated my life to Christ, I’m back at Calvary Bible Church - and I’m here to stay! I’m thankful to our Senior Pastor, Pastor Olumide Emmanuel, for his prayers and encouragement. Sir, may God continue to strengthen your ministry. To anyone reading this: God is never late. Don’t compromise. What I lost then is nothing compared to what I’ve gained now.",
		image: avatar,
	},
	{
		testifier: "Mr. Walter White",
		testimony:
			"Two years ago, I became depressed when my ten-year marriage ended in divorce and my business collapsed under mounting debts. I felt ashamed, abandoned, and lost all hope in life. I withdrew from church, and drowned my pain in busyness and distractions. But God wasn’t finished with me. A faithful friend invited me to Calvary Bible Church, where I discovered kindness, grace, and a vision for restoration. Pastor Olumide Emmanuel’s message reminded me that true redemption is always available, and ignited new faith within me. I spent months in prayer, mentorship, and studying Scripture. Last year, my ex-wife and I began rebuilding our relationship through forgiveness. By the beginning of this year, we had launched a thriving venture, guided in every step by God’s wisdom. Today, our marriage is stronger, our business flourishes, and we dedicate every triumph to His glory.",
		image: avatar,
	},
];

const TestimonyCard = (props) => (
	<div className="p-4 border-2 border-dashed border-[#FD9F2B] rounded-[10px] space-y-2">
		<DblQuote height={53.65} />
		<p>{props.testimony}</p>
		<div className="flex gap-4 items-center">
			<div className="border-2 border-dashed border-[#FD9F2B] rounded-full aspect-square p-1 w-fit">
				<img
					src={props.image}
					alt={props.testifier}
					className="aspect-square rounded-full object-cover w-[44.77px]"
				/>
			</div>
			<p className="text-sm">{props.testifier}</p>
		</div>
	</div>
);

const Testimonies = () => (
	<section className="container p-6 space-y-6">
		<div className="space-y-6">
			<h3 className="font-satoshi text-2xl text-center uppercase">
				See what the lord is doing!
			</h3>

			{/* Control buttons */}
			<div className="flex justify-center gap-4">
				<button
					className="p-1 border rounded-full"
					aria-label="Carousel back button"
					type="button"
				>
					<BsArrowLeft size={16} />
				</button>
				<button
					className="p-1 border rounded-full"
					aria-label="Carousel next button"
					type="button"
				>
					<BsArrowRight size={16} />
				</button>
			</div>
		</div>

		<div className="space-y-3">
			{_testimonies.map((testimony) => (
				<TestimonyCard key={testimony.testifier} {...testimony} />
			))}
		</div>

		<div className="flex justify-center">
			<Button text="Share Your Testimony" variant="solid" />
		</div>
	</section>
);

export default Testimonies;
