import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const range = 2;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - range && i <= currentPage + range)
    ) {
      pageNumbers.push(i);
    } else if (i === currentPage - range - 1 || i === currentPage + range + 1) {
      pageNumbers.push("ellipsis-" + i);
    }
  }

  return (
    <>
      <div className="flex  pb-20 justify-center items-center flex-wrap gap-2 mt-[100px] md:mt-[90px]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex justify-center items-center bg-[#EBEFF6] rounded-md w-[32px] h-[32px]"
        >
          <MdOutlineArrowBackIos size={20} />
        </button>
        
        {pageNumbers.map((number) =>
          number.toString().startsWith("ellipsis") ? (
            <span key={number} className="py-[7px] px-[7px] rounded-md bg-[#FFFFFF] text-[#4E5D78]">
              ...
            </span>
          ) : (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`w-[32px] h-[32px] px-[11px] text-center font-poppins text-[14px] leading-[21px] rounded-[6px] ${
                number === currentPage 
                  ? "bg-[#F3A900] text-white" 
                  : "bg-[#FFFFFF] text-[#4E5D78]"
              }`}
            >
              {number}
            </button>
          )
        )}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex justify-center items-center bg-[#EBEFF6] rounded-md w-[32px] h-[32px]"
        >
          <MdArrowForwardIos size={20} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
