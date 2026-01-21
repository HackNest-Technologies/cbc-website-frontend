import { useState } from "react";
import AdminInput from "../../AdminInput";
import AddBtn from "../../PastSermon/AddBtn";
import DisplayDevotional from "./DisplayDevotional";
const DevotionalMangement = () => {

      const [search, setSearch] = useState("");
 const handleSearch = (e) => {
      setSearch(e.target.value);
    };
  return (
<section>
      <AdminInput search={search} handleSearch={handleSearch} />
      {/* <AddBtn
        linkTo="add-devotional"
        title="Devotional"
        addMsg="Add Devotional"
      /> */}
    
      <DisplayDevotional search={search} />
    </section>  )
}

export default DevotionalMangement



