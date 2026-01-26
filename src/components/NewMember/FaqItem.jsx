import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FaqItem = ({ question, handleQuestion }) => {
  return (
    <div
      className={`py-[20px] border-b overflow-hidden mt-4 md:mt-6 relative z-10 ${
        question.isOpen ? "h-auto" : ""
      }`}
    > 
      <div
        className="flex justify-between cursor-pointer gap-2 "
        onClick={() => handleQuestion(question.id)}
      >
        <h3 className="text-base font-bold leading-[140%] font-inter md:text-[24px] md:leading-[30px] ">
          {question.question}
        </h3>
        <div className="">
          {question.isOpen ? (
            <div className="rounded-full border-[2px] border-dotted border-[#FD9F2B] p-2 md:p-3 md:border-[3px]">
              <IoIosArrowUp className="text-lg text-[#FD9F2B]  md:text-xl " />
            </div>
          ) : (
            <div className="rounded-full border-[2px] border-dotted border-[#FD9F2B] p-2 md:p-3 md:border-[3px] ">
              <IoIosArrowDown className="text-lg md:text-xl text-[#FD9F2B]" />
            </div>
          )}
        </div>
      </div>
      {question.isOpen && (
        <div className="pt-4 pr-[45px] md:pr-[80px]">
          <p className="text-sm font-inter leading-[140%] font-medium  md:text-base md:leading-[30px]">
            {question.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
