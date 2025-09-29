import { useLayoutEffect, useState } from "react";
import updateEventCountDown from "../../utils/Home/updateEventCountdown.js";

const TimeUnit = ({ time }) => (
	<span className=" text-[30px] bg-gradient-to-b from-[#fc8d336c] to-[#0000001A] border border-zinc-200 rounded-[1.57px] p-1 inline-flex items-center justify-center font-orbitron w-10 sm:w-12 lg:text-[49px] lg:rounded-[2.57px] lg:w-[51px] lg:h-[82px]">
		{time}
	</span>
);

const NextEventCountdown = () => {
	const [date] = useState(new Date("September 25 2025"));
	const [countdown, setCountdown] = useState({
		days: [0, 0],
		hours: [0, 0],
		minutes: [0, 0],
	});

	useLayoutEffect(() => {
		// Update countdown every 1 minute
		const interval = setInterval(
			() => updateEventCountDown(date, setCountdown),
			60_000,
		);

		// Update countdown immediately
		updateEventCountDown(date, setCountdown);

		return () => clearInterval(interval);
	}, [date]);

	return (
		<section className="container mx-auto p6 py-12 lg:pt-[200px]">
			<div className="space-y-3">
				<h3 className="flex gap-4 justify-center">
					<span className="flex flex-col items-center">
						<span className="text-[30.14px] flex gap-1">
							<TimeUnit time={countdown.days[0]} />
							<TimeUnit time={countdown.days[1]} />
						</span>
						<span className="text-base leading-[100%] md:text-[24.64px] font-inter lg:py-2">DAYS</span>
					</span>
					<span className="flex flex-col items-center">
						<span className="text-[30.14px] flex gap-1">
							<TimeUnit time={countdown.hours[0]} />
							<TimeUnit time={countdown.hours[1]} />
						</span>
						<span className="text-base leading-[100%] md:text-[24.64px] font-inter lg:py-2">HOURS</span>
					</span>
					<span className="flex flex-col items-center">
						<span className="text-[30.14px] flex gap-1">
							<TimeUnit time={countdown.minutes[0]} />
							<TimeUnit time={countdown.minutes[1]} />
						</span>
						<span className="text-base leading-[100%] md:text-[24.64px] font-inter lg:py-2">MINUTES</span>
					</span>
				</h3>
				<p className="leading-[100%] font-satoshi capitalize text-center text-xl md:text-[32px]">
					Till the entrepreneurship academy
				</p>
			</div>
		</section>
	);
};

export default NextEventCountdown;
