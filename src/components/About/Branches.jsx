import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import branches from "../../data/branches"
import BranchCard from "./BranchCard";



const Branches = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < branches.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleBranches = branches.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="relative pb-[450px] md:pt-[250px] md:pb-[200px] lg:pt-[430px] lg:pb-[400px]">
      <div className="bg-[rgba(255,185,30,0.28)] h-[220px] md:h-[408px] md:py-[67px]">
        <div className="flex flex-col items-center">
          <div className="w-[262px] pt-6 pb-5 md:w-[689px] lg:w-full">
            <h2 className="text-xl text-center font-satoshi font-semibold lg:text-[52px] lg:leading-[100%]">
              Explore Our Branches and Fellowships
            </h2>
            <p className="text-sm text-center font-inter text-black/70 pt-[5px] leading-[120%] md:text-base lg:text-[24px] lg:leading-[30px] lg:pt-10">
              Join us at our branches or online as we worship, disciple, and
              serve together.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 ">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="border rounded-full p-[5px] disabled:opacity-40 lg:p-7"
          >
            <FaArrowLeft  className="lg:text-3xl"/>
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= branches.length}
            className="border rounded-full p-[5px] disabled:opacity-40 lg:p-7"
          >
            <FaArrowRight  className="lg:text-3xl"/>
          </button>
        </div>
      </div>

      <section className="absolute top-[190px] px-6 grid grid-cols-2 gap-5 md:top-[550px] md:flex  md:px-0 md:pl-20 lg:top-[800px]">
        {visibleBranches.map((branch) => (
          <BranchCard
            key={branch.id}
            branchData={branch}
          />
        ))}
      </section>
    </section>
  );
};

export default Branches;

