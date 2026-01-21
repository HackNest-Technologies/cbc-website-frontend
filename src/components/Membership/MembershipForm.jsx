import { useState, useRef } from "react";
import lock from "../../assets/images/lock.png";
import { Link } from "react-router-dom";
const MembershipForm = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!/^[0-9]?$/.test(value)) return; 

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passcode = values.join("");
    if (passcode.length === 6) {
    } else {
      alert("Please complete all 6 digits");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="px-6 flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div
            className="w-[30px] h-[30px] rounded-[6.13px] mb-2 p-[7px] shadow-[0px_0.51px_1.02px_0px_#1018280D] 
             border border-[#D0D5DD] 
             bg-[radial-gradient(132.69%_122.41%_at_52.23%_0%,_#FFB91E_0%,_#FC8E33_54.74%)] 
            md:rounded-[12px] md:w-[56px] md:h-[56px] flex justify-center items-center">
            <img src={lock} className="w-[16px] h-[16px] object-cover md:w-[21px] md:h-[23px]" />
          </div>
          <p className="text-base text-center leading-[100%]  font-satoshi md:text-[28px]">
            Enter Passcode
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {values.map((val, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="0"
                value={val}
                maxLength={1}
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-[35px] h-[35px] font-inter placeholder:text-[#D0D5DD] placeholder:text-[24px] placeholder:font-inter border border-[#D0D5DD] p-[4px] rounded-[4.09px] text-center text-xl focus:outline-none focus:ring-2 focus:ring-orange-400 md:w-[70px] md:h-[70px] md:rounded-[8px]  md:p-[8px] md:text-[40px]  md:leading-[60px] "
              />
              {index === 2 && (
                <span className="mx-1 text-[25.66px] font-medium  text-[#D0D5DD] font-inter md:text-[40px] ">
                  {" "}
                  -
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center pt-3 md:pt-10">
          <button
            type="submit"
            className="text-sm flex justify-center font-medium font-geist text-[#fff] leading-[150%] w-[108px] gap-2 
      bg-[radial-gradient(133.33%_122.42%_at_52.23%_0%,#FFB91E_0%,#FC8E33_54.74%)]
      hover:shadow-[0px_16px_20px_0px_rgba(255,185,30,0.4),0px_6px_10px_0px_rgba(255,225,159,0.4)] 
      lg:gap-3 
shadow-[0px_3px_8px_0px_#FFE19F47,0px_14px_14px_0px_#FFB91E47]       rounded-[25.55px] border-[#8c99ff] py-[8.17px] px-[12.26px] md:rounded-[50px] md:py-[16px] md:px-[24px] md:w-[181px] md:h-[58px]"
          >
            Continue
          </button>
          <div className="pt-8 flex flex-col items-center md:flex-row md:gap-1">
          <p className="text-sm font-satoshi leading-[100%] md:text-base">Don’t Have a Passcode?</p>
          <Link to="/" className="text-sm font-satoshi leading-[100%] text-[#FC8E33] underline  md:text-base">Register for membership class</Link>
          </div>

        </div>
      </form>
    </section>
  );
};

export default MembershipForm;
