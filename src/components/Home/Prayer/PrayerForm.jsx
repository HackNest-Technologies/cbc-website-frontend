import SubmitBtn from "../../shared/SubmitBtn";
const PrayerForm = () => {
  return (
    <section>
      <div className="py-3 w-full">
        <label
          htmlFor="name"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-white placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
        />
      </div>
      <div className="py-3 w-full">
        <label
          htmlFor="mail"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          Email
        </label>
        <input
          id="mail"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-white placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
        />
      </div>

      <div className="bg-transparent py-3 w-full">
        <label
          htmlFor="mail"
          className="text-base uppercase leading-[19px] text-[#000] font-inter"
        >
          Email
        </label>
        <textarea
          id="mail"
          className="w-full h-[192px]  border border-black my-4 text-black outline-none py-[16px] px-[32px] rounded-[20px] font-inter text-base resize-none md:rounded-[30px] md:h-[268px]"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="my-2">
        <SubmitBtn  text="Submit" className="w-[100%] h-[58px]"/>
      </div>
    </section>
  );
};

export default PrayerForm;
