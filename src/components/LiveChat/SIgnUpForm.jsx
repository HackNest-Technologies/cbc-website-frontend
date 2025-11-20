import eyeIcon from "../../assets/images/eyeIcon.svg";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import SubmitBtn from "../shared/SubmitBtn";
import {
  useSignUpMutation,
  useCurrentUserMutation,
} from "../../redux/apiSlice";
const SIgnUpForm = () => {
  const initialState = {
    email_address: "",
    password: "",
  };

  const [signUp] = useSignUpMutation();
  const [currentUser] = useCurrentUserMutation();
  const [inputVal, setInputVal] = useState(initialState);
  const [passType, setPassType] = useState("password");

  const showPassword = () => {
    setPassType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
  };

  console.log(inputVal, "My Value");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // The mutation will now wrap it in { user: ... }
      const res = await signUp(inputVal).unwrap();
      console.log("Signup successful:", res);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <section>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* <div className="flex flex-col gap-3">
          <label htmlFor="userName" className="text-[16px] text-[#292929]">
            Name
          </label>
          <input
            id="userName"
            type="text"
            name="userName"
            className="py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5]"
            placeholder="E.g Wisdom Ibu..."
          />
        </div> */}

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-[16px] text-[#292929]">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5]"
            placeholder="E.g WisdomIbu@gmail.com"
            name="email_address"
            value={inputVal.email_address}
            onChange={handleValue}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-[16px] text-[#292929]">
            Set Password
          </label>
          <div className="py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5] relative  focus-within:outline-2 focus-within:outline-black">
            <input
              type={passType}
              id="Name"
              placeholder="*************"
              className="outline-none"
              name="password"
              value={inputVal.password}
              onChange={handleValue}
            />
            <img
              src={eyeIcon}
              alt="eye"
              className="cursor-pointer w-[20px] h-[20px] absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={showPassword}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 mt-5">
          <span className="flex items-start gap-2">
            <button className=" text-[#FF4D00]">
              <FaTimesCircle />
            </button>
            <p className="text-[#FF4D00] font-inter text-[14px] font-normal">
              Must be at least 8 characters
            </p>
          </span>
          <span className="flex items-start gap-2">
            <button className=" text-[#079455] rounded-[7890px]">
              <FaCheckCircle />
            </button>
            <p className="text-black font-inter text-[14px] font-normal">
              Must contain one special character
            </p>
          </span>
          <span className="flex items-start gap-2 ">
            <button className="#">
              <input type="checkbox" />
            </button>
            <p className="text-black font-inter text-[14px] font-medium">
              I agree to the <span className="text-[#FD9F2B]">Terms</span> and{" "}
              <span className="text-[#FD9F2B]">Privacy Policy</span>
            </p>
          </span>
        </div>

        <div>
          <SubmitBtn
            text="Sign Up"
            className="w-full h-[45px] md:h-[58px] rounded-[50px]"
          />
        </div>

        <div className=" flex flex-col mt-[18.85px] items-center mr-8">
          <p className="mt-[37.8px] text-black font-inter text-[10.993px] font-normal">
            Already have an account?{" "}
            <span className="text-[#FC8E33]">Log in</span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SIgnUpForm;
