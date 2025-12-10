import { useNavigate } from "react-router-dom";
import { MdOutlineVisibility } from "react-icons/md";
import { useLoginMutation } from "../../redux/apiSlice";
import { setUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

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
      navigate("/admin-livestream");
      console.log("Login successful:", res);
    } catch (err) {
      console.log("Login error:", err);
      // Better error handling
      if (err.data) {
        console.log("Error details:", err.data);
      }
    }
  };
  return (
    <section className="pt-50">
      <form action="" className="w-full" onSubmit={(e) => handleLoginSubmit(e)}>
        <div className=" py-4 w-full">
          <label
            htmlFor="username"
            className="text-base leading-[19px] text-[#ffffff] font-grotesk"
          >
            Email
          </label>
          <input
            id="username"
            type="text"
            name="email_address"
            placeholder="Enter Email"
            className="w-full  border border-white-20 my-2  placeholder-[#ABAFB1] outline-none py-2 px-4 rounded-[8px] font-inter text-base"
            required
            value={loginDetails.email_address}
            onChange={(e) => handleLogin(e)}
          />
        </div>
        <div className=" pt-4 w-full">
          <label
            htmlFor="pass"
            className="text-base leading-[19px] text-[#ffffff] font-grotesk"
          >
            Password
          </label>
          <div className=" flex items-center w-full  border border-white-20 my-2  placeholder-[#ABAFB1] outline-none py-2 px-4 rounded-[8px] font-inter text-base ">
            <input
              type={textType}
              placeholder="Enter Password"
              required
              name="password"
              id="password"
              value={loginDetails.password}
              onChange={(e) => handleLogin(e)}
              className="  w-full h-full outline-none"
            />

            <MdOutlineVisibility
              className="text-[27px] text-[#8C8D8E] cursor-pointer"
              onClick={handleinputType}
            />
          </div>
        </div>

        <button
          type="submit"
          className="py-2 my-3 bg-red-500 w-full text-white"
        >
          Sign in
        </button>
      </form>
    </section>
  );
};

export default SignIn;
