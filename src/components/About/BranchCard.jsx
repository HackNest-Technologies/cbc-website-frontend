import { useState } from "react";
import BranchPopup from "./BranchPopup";

const BranchCard = ({ branchData}) => {
  const [popup, setPopup] = useState(null);
  const handleToggle = (id) => {
    setPopup(id);
  };

  const closePopup = () => {
    setPopup(null);
    console.log("click", popup)
  };

  return (
    <>
      <div className="relative" onClick={() => handleToggle(branchData.id)}>
        <img src={branchData.thumbnail} className="w-[200px] rounded-[6px] md:w-[302px] md:rounded-[10px]" />
        <p className="text-center text-white absolute inset-0 bottom-[100px]">
          {branchData.branch}
        </p>
      </div>
      {popup !== null && (
       <BranchPopup  branchData={branchData} onclose={closePopup}/>
      )}
    </>
  );
};

export default BranchCard;
