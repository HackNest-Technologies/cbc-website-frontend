import { useState } from "react";
import AddBtn from "./AddBtn";
import AdminInput from "../AdminInput";
import DisplayPastSermon from "./DisplayPastSermon";

const ManagerPastSermon = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <AddBtn
        linkTo="/admin-pastsermon/add-pastsermon"
        title="Past Sermon"
        addMsg="Add Past Sermon"
      />
      <DisplayPastSermon search={search} />
    </section>
  );
};

export default ManagerPastSermon;
