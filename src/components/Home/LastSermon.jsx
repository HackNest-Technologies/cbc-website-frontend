import rectangularBg from "../../assets/images/rectangular-bg.png";
import sermonBanner from "../../assets/images/service-banner.png";
import streamIcon from "../../assets/images/stream-icon.svg";
import Button from "../shared/Button";

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
		<h4 className="uppercase pb-1 border-b-[#D6D6D6] border-b-[0.46px] text-[7.38px] font-satoshi">
			{props.title}
		</h4>
		<p className="text-sm leading-full">{props.description}</p>
	</div>
);

const LastSermon = () => (
	<section className="container mx-auto p-6 pb-24 relative">
		<img
			src={rectangularBg}
			alt=""
			className="absolute left-0 w-full -bottom-11 z-0 "
		/>

		<div className="relative space-y-[22.14px]">
			<h3 className="text-center leading-full text-[18.45px] font-satoshi">
				Last Sermon
			</h3>

			{/* TODO: Consume API for last sermon */}
			<div className="bg-white p-2 pb-4 space-y-[14.76px] rounded-[3.69px]">
				<img
					src={sermonBanner}
					alt="Last sermon"
					className="rounded-[11.1px]"
				/>

				<div className="space-y-2">
					{serviceInfo.map((info) => (
						<InfoBlock key={info.title} {...info} />
					))}
				</div>

				<div className="space-x-2 space-y-2">
					<Button
						variant="solid"
						icon={<img src={streamIcon} alt="Stream live" />}
						text="Watch Now"
					/>
					<Button text="All Sermons" />
				</div>
			</div>
		</div>
	</section>
);

export default LastSermon;
