import rectangularBg2 from "../../assets/images/rectangular-bg-2.png";
import rectangularBg from "../../assets/images/rectangular-bg.png";
import sermonBanner from "../../assets/images/service-banner.png";
import streamIcon from "../../assets/images/stream-icon.svg";
import Button from "../shared/Button.jsx";

const serviceInfo = [
	{
		title: "Sermon Series",
		description: "Building a deep relationship with Jesus",
	},
	{ title: "Sermon Series", description: "Importance of prayer" },
	{ title: "Preacher", description: "Pastor. olumide Emmanuel" },
];

const InfoBlock = (props) => (
	<div className="space-y-2">
		<h4 className="uppercase pb-1 border-b-[#D6D6D6] border-b-[0.46px] text-[7.38px] mobile:text-base font-satoshi">
			{props.title}
		</h4>
		<p className="text-sm leading-full mobile:text-[32px]">
			{props.description}
		</p>
	</div>
);

const LastSermon = () => (
	<section className="relative mobile:mt-8">
		<img
			src={rectangularBg}
			alt=""
			className="absolute left-0 w-full mobile:hidden -bottom-11 z-0 "
		/>
		<img
			src={rectangularBg2}
			alt=""
			className="absolute left-0 w-full max-mobile:hidden -bottom-30 z-0 h-[1450px]"
		/>

		<div className="container mx-auto p-6 pb-24">
			<div className="relative space-y-[22.14px]">
				<h3 className="text-center leading-full text-[18.45px] mobile:text-[40px] font-satoshi">
					Last Sermon
				</h3>

				{/* TODO: Consume API for last sermon */}
				<div className="bg-white p-2 mobile:p-4 space-y-[14.76px] rounded-[3.69px] mobile:max-w-[805.5px] tablet:max-w-full mx-auto mobile:space-y-8 tablet:grid grid-cols-2 gap-4 items-center">
					<img
						src={sermonBanner}
						alt="Last sermon"
						className="rounded-[11.1px]"
					/>

					<div className="space-y-[14.76px] mobile:space-y-8">
						<div className="space-y-2 mobile:space-y-4.5">
							{serviceInfo.map((info) => (
								<InfoBlock key={info.title} {...info} />
							))}
						</div>

						<div className="space-x-2 space-y-2 mobile:space-x-4">
							<Button
								variant="solid"
								icon={<img src={streamIcon} alt="Stream live" />}
								text="Watch Now"
								className="mobile:w-[220px] mobile:h-[58px] justify-center mobile:text-lg"
							/>
							<Button
								text="All Sermons"
								className="mobile:w-[220px] mobile:h-[58px] justify-center mobile:text-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default LastSermon;
