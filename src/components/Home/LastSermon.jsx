import rectangularBg2 from "../../assets/images/rectangular-bg-2.png";
import rectangularBg from "../../assets/images/rectangular-bg.png";
import sermonBanner from "../../assets/images/service-banner.png";
import streamIcon from "../../assets/images/stream-icon.svg";
import Button from "../shared/Button.jsx";

const LastSermon = () => {
	const serviceInfo = [
		{
			title: "Sermon Series",
			description: "Building a deep relationship with Jesus",
		},
		{ title: "Sermon Series", description: "Importance of prayer" },
		{ title: "Preacher", description: "Pastor. olumide Emmanuel" },
	];

	const InfoBlock = ({ title, description }) => (
		<div className="space-y-2">
			<h4 className="uppercase pb-1 border-b-[#D6D6D6] border-b-[0.46px] text-[7.38px] sm:text-base font-satoshi">
				{title}
			</h4>
			<p className="text-sm leading-full sm:text-[32px]">{description}</p>
		</div>
	);

	return (
		<section className="relative sm:mt-8">
			<img
				src={rectangularBg}
				alt=""
				className="absolute left-0 w-full sm:hidden -bottom-11 z-0 "
			/>
			<img
				src={rectangularBg2}
				alt=""
				className="absolute left-0 w-full max-sm:hidden -bottom-30 z-0 h-[1450px]"
			/>

			<div className="container mx-auto p-6 pb-24">
				<div className="relative space-y-[22.14px]">
					<h3 className="text-center leading-full text-[18.45px] sm:text-[40px] font-satoshi">
						Last Sermon
					</h3>

					{/* TODO: Consume API for last sermon */}
					<div className="bg-white p-2 sm:p-4 space-y-[14.76px] rounded-[3.69px] sm:max-w-[805.5px] md:max-w-full mx-auto sm:space-y-8 md:grid grid-cols-2 gap-4 items-center">
						<img
							src={sermonBanner}
							alt="Last sermon"
							className="rounded-[11.1px]"
						/>

						<div className="space-y-[14.76px] sm:space-y-8">
							<div className="space-y-2 sm:space-y-4.5">
								{serviceInfo.map((info) => (
									<InfoBlock key={info.title} {...info} />
								))}
							</div>

							<div className="space-x-2 space-y-2 sm:space-x-4">
								<Button
									variant="solid"
									icon={<img src={streamIcon} alt="Stream live" />}
									text="Watch Now"
									className="sm:w-[220px] sm:h-[58px] justify-center sm:text-lg"
								/>
								<Button
									text="All Sermons"
									className="sm:w-[220px] sm:h-[58px] justify-center sm:text-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LastSermon;
