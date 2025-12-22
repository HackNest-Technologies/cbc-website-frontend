import { useState } from "react";
import AdminInput from "../AdminInput";
import AddBtn from "../PastSermon/AddBtn";
import DisplayTestimonies from "./DisplayTestimonies";

const TestimonyManagement = () => {
  const [search, setSearch] = useState("");
  
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
  return (
    <section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <AddBtn
        linkTo="add-testimony"
        title="Testimonies"
        addMsg="Add Testimony"
      />
    
      <DisplayTestimonies search={search} />
    </section>
  );
};

export default TestimonyManagement;
