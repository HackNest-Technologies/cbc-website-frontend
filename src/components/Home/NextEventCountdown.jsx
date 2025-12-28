import { useLayoutEffect, useState } from "react";
import { useGetEventQuery } from "../../redux/apiSlice"; 
import updateEventCountDown from "../../utils/Home/updateEventCountdown.js";


const TimeUnit = ({ time }) => (
	<span className="time text-[30px] bg-gradient-to-b from-[#fc8d336c] to-[#0000001A] border border-zinc-200 rounded-[1.57px] p-1 inline-flex items-center text-center justify-center lg:text-[40px] lg:h-[62px] font-digital w-10 sm:w-12 xl:text-[49px] lg:rounded-[2.57px] lg:w-[51px] xl:h-[82px]">
		{time}
	</span>
);

const NextEventCountdown = () => {
	const { data: events, isLoading } = useGetEventQuery();
	const [targetDate, setTargetDate] = useState(null);
	const [countdown, setCountdown] = useState({
		days: [0, 0],
		hours: [0, 0],
		minutes: [0, 0],
	});

	// Find the next upcoming event
	useLayoutEffect(() => {
		if (events && events.length > 0) {
			// Get current date
			const now = new Date();
			
			// Find the next upcoming event (start_date > current date)
			const upcomingEvents = events
				.filter(event => {
					const eventStartDate = new Date(event.start_date);
					return eventStartDate > now;
				})
				.sort((a, b) => new Date(a.start_date) - new Date(b.start_date)); // Sort by earliest date
			
			if (upcomingEvents.length > 0) {
				// Use the earliest upcoming event
				const nextEvent = upcomingEvents[0];
				setTargetDate(new Date(nextEvent.start_date));
			} else {
				// If no upcoming events, use the most recent event
				const sortedEvents = [...events].sort((a, b) => 
					new Date(b.start_date) - new Date(a.start_date)
				);
				setTargetDate(new Date(sortedEvents[0].start_date));
			}
		}
	}, [events]);

	useLayoutEffect(() => {
		if (!targetDate) return;
		
		// Update countdown every 1 minute
		const interval = setInterval(
			() => updateEventCountDown(targetDate, setCountdown),
			60_000,
		);

		// Update countdown immediately
		updateEventCountDown(targetDate, setCountdown);

		return () => clearInterval(interval);
	}, [targetDate]);

	// If no events or loading, show a fallback
	if (isLoading) {
		return (
			<section className="container mx-auto p6 py-12  xl:pt-[200px]">
				<div className="space-y-3">
					<h3 className="flex gap-4 justify-center">
						<span className="flex flex-col items-center">
							<span className="text-[30.14px] flex gap-1">
								<TimeUnit time={"0"} />
								<TimeUnit time={"0"} />
							</span>
							<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">DAYS</span>
						</span>
						<span className="flex flex-col items-center">
							<span className="text-[30.14px] flex gap-1">
								<TimeUnit time={"0"} />
								<TimeUnit time={"0"} />
							</span>
							<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">HOURS</span>
						</span>
						<span className="flex flex-col items-center">
							<span className="text-[30.14px] flex gap-1">
								<TimeUnit time={"0"} />
								<TimeUnit time={"0"} />
							</span>
							<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">MINUTES</span>
						</span>
					</h3>
					<p className="leading-[100%] font-satoshi capitalize text-center text-xl md:text-[32px]">
						Loading next event...
					</p>
				</div>
			</section>
		);
	}

	if (!targetDate || events?.length === 0) {
		return (
			<section className="container mx-auto p6 py-12 lg:pt-[200px]">
				<div className="space-y-3">
					<h3 className="flex gap-4 justify-center">
						<span className="flex flex-col items-center">
							<span className="text-[30.14px] flex gap-1">
								<TimeUnit time={"0"} />
								<TimeUnit time={"0"} />
							</span>
							<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">DAYS</span>
						</span>
						<span className="flex flex-col items-center">
							<span className="text-[30.14px] flex gap-1">
								<TimeUnit time={"0"} />
								<TimeUnit time={"0"} />
							</span>
							<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">HOURS</span>
						</span>
						<span className="flex flex-col items-center">
							<span className="text-[30.14px] flex gap-1">
								<TimeUnit time={"0"} />
								<TimeUnit time={"0"} />
							</span>
							<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">MINUTES</span>
						</span>
					</h3>
					<p className="leading-[100%] font-satoshi capitalize text-center text-xl md:text-[32px]">
						No upcoming events
					</p>
				</div>
			</section>
		);
	}

	// Find the event title for display
	const currentEvent = events?.find(event => 
		event.start_date === targetDate.toISOString().split('T')[0] ||
		new Date(event.start_date).getTime() === targetDate.getTime()
	);

	return (
		<section className="container mx-auto p6 py-12 lg:pt-[100px] xl:pt-[200px]">
			<div className="space-y-3">
				<h3 className="flex gap-4 justify-center">
					<span className="flex flex-col items-center">
						<span className="text-[30.14px] flex gap-1">
							<TimeUnit time={countdown.days[0]} />
							<TimeUnit time={countdown.days[1]} />
						</span>
						<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">DAYS</span>
					</span>
					<span className="flex flex-col items-center">
						<span className="text-[30.14px] flex gap-1">
							<TimeUnit time={countdown.hours[0]} />
							<TimeUnit time={countdown.hours[1]} />
						</span>
						<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">HOURS</span>
					</span>
					<span className="flex flex-col items-center">
						<span className="text-[30.14px] flex gap-1">
							<TimeUnit time={countdown.minutes[0]} />
							<TimeUnit time={countdown.minutes[1]} />
						</span>
						<span className="time-text text-base leading-[100%] md:text-[24.64px] font-inter lg:text-xl xl:text-[24.64px] lg:py-2">MINUTES</span>
					</span>
				</h3>
				<p className="till leading-[100%] font-satoshi capitalize text-center text-xl md:text-[32px]">
					Till {currentEvent?.title || "the next event"}
				</p>
			</div>
		</section>
	);
};

export default NextEventCountdown;