import DisplayFellowship from "./DisplayFellowship";
import { useState } from "react";
import AdminInput from "../AdminInput";
const FellowshipManagement = () => {

    const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
<section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <DisplayFellowship search={search} />
    </section>  )
}

export default FellowshipManagement






