import { useState } from "react";
import AdminInput from "../AdminInput";
import AddEvent from "./AddEvent";
import DisplayEvent from "./DisplayEvent";
const EventManagement = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <AddEvent />
      <DisplayEvent search={search} />

    </section>
  );
};

export default EventManagement;
