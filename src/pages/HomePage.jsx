import Address from "../components/Home/Address";
import Features from "../components/Home/Features";
import FeedbackForm from "../components/Home/FeedbackForm";
import Hero from "../components/Home/Hero";
import LastSermon from "../components/Home/LastSermon";
import LearnMore from "../components/Home/LearnMore";
import NextEventCountdown from "../components/Home/NextEventCountDown";
import OurLeadership from "../components/Home/OurLeadership";
import PrayerRequest from "../components/Home/PrayerRequest";
import SneakPeek from "../components/Home/SneakPeek";
import Testimonies from "../components/Home/Testimonies";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import WorshipWithUs from "../components/Home/WorshipWithUs";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<LearnMore />
			<Features />
			<LastSermon />
			<WorshipWithUs />
			<Address />
			<UpcomingEvents />
			<NextEventCountdown />
			<PrayerRequest />
			<SneakPeek />
			<OurLeadership />
			<Testimonies />
			<FeedbackForm />
		</main>
	);
};

export default HomePage;
