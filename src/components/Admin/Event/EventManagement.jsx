import { useState } from "react";
import AdminInput from "../AdminInput";
import AddEvent from "./AddEvent";
import DisplayEvent from "./DisplayEvent";
import AddBtn from "../PastSermon/AddBtn";
const EventManagement = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <AddBtn linkTo="add-event" title="Past Sermon" addMsg="Add New Event"/>
      <DisplayEvent search={search} />
    </section>
  );
};

export default EventManagement;
