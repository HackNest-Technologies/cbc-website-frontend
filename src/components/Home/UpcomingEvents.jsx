import { BiCalendar } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import eventScene from "../../assets/images/event-scene.png";

const UpcomingEvents = () => {
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

	const EventCard = ({ theme, date, time, description }) => (
		<div className="bg-[#E5E5E5] p-[11.82px] space-y-[15.76px] rounded-[3.94px] sm:min-w-[672px] md:grid md:grid-cols-2 gap-4 md:min-w-[1227px] md:items-center">
			<img
				src={eventScene}
				alt=""
				className="object-contain rounded-[7.39px] w-full"
			/>

			<div className="space-y-2">
				<h4 className="border-b-[0.5px] border-b-[#565656] font-satoshi uppercase sm:text-[32px]">
					{theme}
				</h4>
				<div className="space-y-[7.88px] italic text-[#777777]">
					<p className="flex items-center gap-2">
						<BiCalendar /> {date}
					</p>
					<p className="flex items-center gap-2">
						<BsClock /> {time}
					</p>
				</div>
				<hr className="border-t-[0.5px]" />
				<p className="line-clamp-4">{description}</p>
			</div>
		</div>
	);

	return (
		<section className="container mx-auto p-6 space-y-4 sm:mt-8">
			<div className="flex justify-between">
				<h2 className="font-satoshi mobile;text-[40px]">UPCOMING EVENTS</h2>
				<p className="max-sm:hidden">
					<Link className="flex items-center gap-2 underline" href="/events">
						View All Events <BsArrowRight size={24} />
					</Link>
				</p>
			</div>

			<div className="space-y-4 sm:flex sm:flex-nowrap sm:overflow-auto sm:max-w-full sm:gap-2">
				{events.map((ev, i) => (
					<EventCard key={i} {...ev} />
				))}
				<p className="sm:hidden">
					<Link className="flex items-center gap-2 underline" href="/events">
						View All Events <BsArrowRight size={24} />
					</Link>
				</p>
			</div>
		</section>
	);
};

export default UpcomingEvents;
