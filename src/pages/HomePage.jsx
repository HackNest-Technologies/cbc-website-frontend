import Address from "../components/Home/Address.jsx";
import Features from "../components/Home/Features.jsx";
import FeedbackForm from "../components/Home/FeedbackForm.jsx";
import Hero from "../components/Home/Hero.jsx";
import LastSermon from "../components/Home/LastSermon.jsx";
import LearnMore from "../components/Home/LearnMore.jsx";
import NextEventCountdown from "../components/Home/NextEventCountdown.jsx";
import OurLeadership from "../components/Home/OurLeadership.jsx";
import PrayerRequest from "../components/Home/PrayerRequest.jsx";
import SneakPeek from "../components/Home/SneakPeek.jsx";
import Testimonies from "../components/Home/Testimonies.jsx";
import UpcomingEvents from "../components/Home/UpcomingEvents.jsx";
import WorshipWithUs from "../components/Home/WorshipWithUs.jsx";

const HomePage = () => {
	return (
		<main className="overflow-x-hidden">
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
