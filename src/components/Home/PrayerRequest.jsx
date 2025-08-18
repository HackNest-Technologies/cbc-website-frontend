import { LiaPraySolid } from "react-icons/lia";
import Button from "../shared/Button";

const PrayerRequest = () => (
	<section className="container p-6">
		<div className="border-2 border-dashed border-orange-300 p-4 pr-14 rounded-lg relative space-y-2">
			<LiaPraySolid className="absolute text-[100px] bg-white text-orange-200 -bottom-7.5 -right-7.5" />
			<div className="h-[23.93px] w-[23.93px] rounded-full border-2 border-orange-300 border-dashed"></div>
			<h4 className="text-2xl font-semibold font-satoshi">
				God Answers Prayers
			</h4>
			<p className="text-xs">
				Prayer is not our last resort—it is our first response. “Call to Me and
				I will answer you” (Jeremiah 33:3). When we pray, God answers in love,
				in power, and in time.
			</p>
			<Button text="Submit Prayer Request" variant="solid" />
		</div>
	</section>
);

export default PrayerRequest;
