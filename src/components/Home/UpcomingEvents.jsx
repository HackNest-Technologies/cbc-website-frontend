import { BiCalendar } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import eventScene from "../../assets/images/event-scene.png";

const events = [
	{
		theme: "THE ENTREPRENEURSHIP ACADEMY",
		date: "Monday 20th- Saturday 25th January",
		time: "8am - 2pm",
		description:
			"There is a Divine Call to Create, Build, and Prosper for the Glory of God. At Calvary Bible Church, we believe that business is more than profit - it is a Kingdom Mandate. This is a space where visionaries, builders, and purpose-driven leaders are trained, equipped, and sent forth to “occupy until He comes” (Luke 19:13). Come, be equipped. come, be commissioned. The Earth awaits your manifestation.",
	},
	{
		theme: "THE ENTREPRENEURSHIP ACADEMY",
		date: "Monday 20th- Saturday 25th January",
		time: "8am - 2pm",
		description:
			"There is a Divine Call to Create, Build, and Prosper for the Glory of God. At Calvary Bible Church, we believe that business is more than profit - it is a Kingdom Mandate. This is a space where visionaries, builders, and purpose-driven leaders are trained, equipped, and sent forth to “occupy until He comes” (Luke 19:13). Come, be equipped. come, be commissioned. The Earth awaits your manifestation.",
	},
];

const EventCard = (props) => (
	<div className="bg-[#E5E5E5] p-[11.82px] space-y-[15.76px] rounded-[3.94px]">
		<img
			src={eventScene}
			alt=""
			className="object-contain rounded-[7.39px] w-full"
		/>

		<div className="space-y-2">
			<h4 className="border-b-[0.5px] border-b-[#565656] font-satoshi uppercase">
				{props.theme}
			</h4>
			<div className="space-y-[7.88px] italic text-[#777777]">
				<p className="flex items-center gap-2">
					<BiCalendar /> {props.date}
				</p>
				<p className="flex items-center gap-2">
					<BsClock /> {props.time}
				</p>
			</div>
			<hr className="border-t-[0.5px]" />
			<p className="line-clamp-4">{props.description}</p>
		</div>
	</div>
);

const UpcomingEvents = () => (
	<section className="container mx-auto p-6 space-y-4">
		<h2 className="font-satoshi">UPCOMING EVENTS</h2>

		<div className="space-y-4">
			{events.map((ev, i) => (
				<EventCard key={i} {...ev} />
			))}
			<p>
				<Link className="flex items-center gap-2 underline" href="/events">
					View All Events <BsArrowRight size={24} />
				</Link>
			</p>
		</div>
	</section>
);

export default UpcomingEvents;
