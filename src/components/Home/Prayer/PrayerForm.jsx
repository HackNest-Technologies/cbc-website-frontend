import { useState } from "react";
import SubmitBtn from "../../shared/SubmitBtn";

import { useSendPrayerRequestMutation } from "../../../redux/apiSlice";
const PrayerForm = () => {
  const [sendPrayerRequest] = useSendPrayerRequestMutation();
  const initialState = {
    requester_first_name: "",
    requester_last_name:"",
    requester_email_address:"",
    body: "",
  };
  const [prayerVal, setPrayerVal] = useState(initialState);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setPrayerVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendPrayerRequest(prayerVal).unwrap();
      // Clear the form by resetting to initialState
      setPrayerVal(initialState);
    } catch (error) {
     console.log(error)
  };
  }
  console.log(prayerVal, "value");
  return (
    <form onSubmit={handleSubmit}>
      <div className="py-3 w-full">
        <label
          htmlFor="name"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          First Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
          name="requester_first_name"
          value={prayerVal.requester_first_name}
          onChange={handleValue}
        />
      </div>

          <div className="py-3 w-full">
        <label
          htmlFor="name"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          Last Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
          name="requester_last_name"
          value={prayerVal.requester_last_name}
          onChange={handleValue}
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
          className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
          name="requester_email_address"
          value={prayerVal.requester_email_address}
          onChange={handleValue}
        />
      </div>

      <div className="bg-transparent py-3 w-full">
        <label
          htmlFor="body"
          className="text-base uppercase leading-[19px] text-[#000] font-inter"
        >
          Prayer Request
        </label>
        <textarea
          id="mail"
          className="w-full h-[192px]  border border-black my-4 text-black outline-none py-[16px] px-[32px] rounded-[20px] font-inter text-base resize-none md:rounded-[30px] md:h-[268px]"
          placeholder="Enter your email"
          required
          name="body"
          value={prayerVal.body}
          onChange={handleValue}
        />
      </div>
      <div className="my-2">
        <SubmitBtn text="Submit" className="w-[100%] h-[58px]" />
      </div>
    </form>
  );
};

export default PrayerForm;
