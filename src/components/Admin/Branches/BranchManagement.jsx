import { useState } from "react";
import AdminInput from "../AdminInput";
import DisplayBranch from "./DisplayBranch";

const BranchManagement = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section>
      <AdminInput search={search} handleSearch={handleSearch} />
      <DisplayBranch search={search} />
    </section>
  );
};

export default BranchManagement;