import SermonCard from "../components/PastSermon/SermonCard";
import SermonHeader from "../components/PastSermon/SermonHeader";
import SermonInput from "../components/PastSermon/SermonInput";
const PastSermonPage = () => {
  return (
    <section>
      <SermonHeader />
      <SermonInput/>
      <SermonCard/>
    </section>
  );
};

export default PastSermonPage;
