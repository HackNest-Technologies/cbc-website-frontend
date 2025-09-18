import { Link } from "react-router-dom";
import question from "../../assets/images/question.png";
import { FaArrowRight } from "react-icons/fa";
const WelcomeCard = () => {
  const cards = [
    {
      id: 1,
      question: question,
      title: "New Member",
      path: "/new-member",
    },

    {
      id: 2,
      question: question,
      title: "New Convert",
      path: "/new-convert",
    },
  ];
  return (
    <section className=" pt-[178px] pb-[120px] md:pt-[400px] md:pb-[70px] lg:pb-[20px]">
      <div className="px-6 container mx-auto grid md:grid-cols-2  md:px-0 gap-4 ">
        {cards.map((item) => (
          <div key={item.id} className="relative w-full py-[40px] px-[32px] flex flex-col justify-between border-[3px] mt-[20px]  rounded-[20px] border-[#FD9F2B] border-dotted h-[330px] md:h-[440px]  md:px-[48px]  lg:h-[624px] lg:border-[5px]">
            <img
              src={item.question}
              alt=""
              className="w-[64px] h-[64px]  md:w-[65px] md:h-[65px] lg:h-[93px]"
            />
            <div className="">
              <h4 className="text-[40px] mb-2 leading-[100%] font-bold font-satoshi md:mb-0 md:text-[60px] lg:text-[62.32px] ">
                {item.title}
              </h4>
              <div className="pt-8">
                <Link to={item.path} className="flex items-center gap-4">
                  <span className="underline text-inter text-[24px] leading-[150%] md:text-[17px] lg:text-[25px]">
                    Click here
                  </span>
                  <FaArrowRight className="text-[#000000] text-[16px]" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomeCard;
