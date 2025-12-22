import { useState } from "react";
import AdminInput from "../../AdminInput";
import AddBtn from "../../PastSermon/AddBtn";
import DisplayCategory from "./DisplayCategory";

const CategoryManagement = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <AddBtn
        linkTo="add-category"
        title="Book Category"
        addMsg="Add Category"
      />

      <DisplayCategory search={search} />
    </section>
  );
};

export default CategoryManagement;
