import { useState } from "react";
import AllEvents from "../components/Event/AllEvents";
import EventBg from "../components/Event/EventBg";

const EventPage = () => {
 const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      {/* Header with search */}
      <EventBg onSearch={handleSearch} />
      
      {/* Events list with pagination and search */}
      <AllEvents searchQuery={searchQuery} />
    </div>
  );

};

export default EventPage;
