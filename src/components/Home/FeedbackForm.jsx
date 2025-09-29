import Button from "../shared/Button.jsx";
import feedBackImg from "../../assets/images/feedback-form-bg.jpg";
import SubmitBtn from "../shared/SubmitBtn.jsx";

const FeedbackForm = () => (
  <section className="container p-6 mx-auto md:p-0 md:pb-[100px]">
    <div
      className="py-[21.9px] px-[13.05px] feedback-form rounded-[16px] sm:flex flex-row-reverse md:gap-5 bg-cover bg-center md:rounded-[14.34px]"
      style={{ backgroundImage: `url(${feedBackImg})` }}
    >
      <div className="py-[16px] px-[20px] bg-[#FFFFFFF2] rounded-[9.13px] space-y-4 md:w-[461px] md:py-[24px] md:px-[32px] lg:w-[65%]">
        <div>
          <h4 className="text-base leading-[100%] font-satoshi uppercase md:text-xl">FEEDBACK FORM</h4>
          <p className="text-sm text-[#666666] font-inter leading-[140%] pt-2">Share your feedback</p>
        </div>

        <form className="space-y-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs font-inter leading-[120%] md:text-sm text-[#292929]">Name</label>
            <input
              className="py-[7.07px] pr-[5.48px] pl-[10.95px] rounded-[45.63px] border border-[#E5E5E5] md:rounded-[68.76px] md:py-[10.66px] md:pl-[16px] md:pr-[8.25px]"
              type="text"
              id="name"
              name="name"
              placeholder="E.g Wisdom Ibu"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs font-inter leading-[120%] md:text-sm text-[#292929]">Email</label>
            <input
              className="py-[7.07px] pr-[5.48px] pl-[10.95px] rounded-[45.63px] border border-[#E5E5E5] md:rounded-[68.76px] md:py-[10.66px] md:pl-[16px] md:pr-[8.25px]"
              type="email"
              id="email"
              name="email"
              placeholder="E.g Wisdomibu@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="feedback" className="text-xs font-inter leading-[120%] md:text-sm text-[#292929]">Feedback</label>
            <textarea
              name="feedback"
              id="feedback"
              className="py-[7.07px] px-[10.95px] rounded-[6.84px] border border-[#E5E5E5]"
              rows={5}
            ></textarea>
          </div>
            <SubmitBtn text="Submit" type="submit" className="w-full py-[7.3px] px-[10.13px] md:py-[11px] md:px-[16.5px] md:rounded-[34.38px]  md:mt-3" />
        </form>
      </div>

      <p className="w-[250.77px] text-[32px] capitalize text-white mt-[140px] font-satoshi leading-[100%]  sm:flex sm:mt-0 sm:items-end sm:text-[28px] md:text-[40px] md:w-[300px] lg:text-[65px] lg:w-[50%]">
        We would love to hear from you!
      </p>
    </div>
  </section>
);

export default FeedbackForm;
