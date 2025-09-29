import { useState } from "react";
import memberFaq from "../../data/memberFaq";
import FaqItem from "./FaqItem";
const Faq = () => {
  const [questions, setQuestions] = useState(memberFaq);
  console.log(questions);

  const handleQuestion = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : question
      )
    );
  };

  return (
    <section className="mt-10 pb-12 lg:mt-20 lg:py-12">
      <div className="px-6 container mx-auto md:px-0 md:flex md:justify-between">
        <div className="md:w-1/4 lg:w-full ">
          <h2 className="text-[21.68px] font-satoshi leading-[100%] font-bold py-6  md:text-5xl  lg:py-10">
            FAQ
          </h2>
        </div>
        <div className="md:w-[85%] lg:w-full">
          {questions.map((question) => (
            <FaqItem
              key={question.id}
              question={question}
              handleQuestion={handleQuestion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
