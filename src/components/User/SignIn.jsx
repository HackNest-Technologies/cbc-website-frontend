import { Link, useNavigate } from "react-router-dom";
import { MdOutlineVisibility } from "react-icons/md";
import { useLoginMutation } from "../../redux/apiSlice";
import { setUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import SubmitBtn from "../shared/SubmitBtn";
import logo from "../../assets/images/cbc-logo.webp";

import { useState } from "react";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const initialState = {
    password: "",
    email_address: "",
   
  };

  const [loginDetails, setLoginDetails] = useState(initialState);
  const [textType, setTextType] = useState("password");

  const handleinputType = () => {
    setTextType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginDetails((admin) => {
      const updatedLogin = { ...admin, [name]: value };
      console.log(updatedLogin);
      return updatedLogin;
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(loginDetails).unwrap();
      dispatch(setUser(res.user)); // 🔥 ensure redux is updated

      if (res.user.is_admin) {
        navigate("/admin", { replace: true });
      } else {
        navigate("/user", { replace: true });
      }
      console.log("Login successful:", res);
    } catch (err) {
      console.log("Login error:", err);
      if (err.data) {
        console.log("Error details:", err.data);
      }
    }
  };
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 pt-[20px]   w-full md:gap-[24px]  xl:pb-[20px] mb-16">
      <div className="rounded-[16px] md:rounded-[20px] min-h-full liveBg  md:h-screen h-[342px] relative flex items-end w-full">
        <img
          src={logo}
          alt="logo"
          className="absolute w-[69px] h-[60px] block md:hidden  top-4 left-4"
        />
        <p className="text-white text-[24px] md:text-5xl lg:text-[65px] p-4 pb-8">
          Raising A People of Power, Purpose & Dominion
        </p>
      </div>
      <div className="px-6 mt-7">
        <span className="mb-[25px] block">
          <h3 className="text-[22px] md:text-[28px] font-satoshi font-bold">
            SIGN IN
          </h3>
          <p className="text-[#666666] text-[14px]">
            Enter your personal information details
          </p>
        </span>
        <section>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => handleLoginSubmit(e)}
          >
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
                value={loginDetails.email_address}
                onChange={(e) => handleLogin(e)}
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-[16px] text-[#292929]">
                Password
              </label>
              <div className="flex justify-between py-[12.171px] px-[15.23px] rounded-[78.521px] border border-[#E5E5E5] relative  focus-within:outline-2 focus-within:outline-black">
                <input
                  type={textType}
                  id="Name"
                  placeholder="*************"
                  className="outline-none"
                  name="password"
                  value={loginDetails.password}
                  onChange={(e) => handleLogin(e)}
                />
                <MdOutlineVisibility
                  className="text-[27px] text-[#8C8D8E] cursor-pointer"
                  onClick={handleinputType}
                />
              </div>
            </div>
            <div className="mt-10">
              <SubmitBtn
                text="Sign In"
                className="w-full h-[45px] md:h-[58px] rounded-[50px]"
              />
            </div>

            <div className=" flex flex-col mt-3 items-center mr-8">
              <p className="mt-2 text-black font-inter text-[10.993px] font-normal">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#FC8E33]">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
