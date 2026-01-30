import { useState } from "react";
import SermonCard from "../components/PastSermon/SermonCard";
import SermonHeader from "../components/PastSermon/SermonHeader";
import SermonInput from "../components/PastSermon/SermonInput";
const PastSermonPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <section>
      <SermonHeader />
      <SermonInput onSearch={handleSearch}/>
      <SermonCard searchQuery={searchQuery} />
    </section>
  );
};

export default PastSermonPage;
