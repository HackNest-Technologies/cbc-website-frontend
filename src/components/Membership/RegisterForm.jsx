import InputField from "../../utils/InputField";

const RegisterForm = () => {
  return (
    <section className="px-6 pt-20 container mx-auto md:px-0 lg:w-[70vw] lg:pt-[190px]">
      <h2 className="text-center text-[32px] border-b-[3px] border-dotted border-[#FC8E33] pt-[16px] pb-[32px] font-satoshi leading-[100%] uppercase md:text-[48px] md:text-left">
        Membership Form
      </h2>
      <form className="px-6 pt-[50px] md:px-0">
        <div className="pt-3">
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            //   name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />{" "}
        </div>
        <div>
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            // name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />
        </div>
        <div className="pt-2">
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            //   name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />{" "}
        </div>
        <div>
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            // name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />
        </div>
        <div className="pt-2">
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            //   name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />{" "}
        </div>
        <div>
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            // name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />
        </div>
        <div className="pt-2">
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            //   name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />{" "}
        </div>
        <div>
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            // name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />
        </div>{" "}
        <div className="pt-2">
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            //   name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />{" "}
        </div>
        <div>
          <InputField
            placeholder="...."
            // inputValue=""
            // handleChanges
            // name="heading"
            // id="account-number"
            // type="number"
            label="heading"
          />
        </div>
        <div className="pt-4">
          <div className="pt-4">
            <button
              type="submit"
              className="text-lg flex justify-center font-medium font-inter text-[#fff] leading-[150%] w-full gap-2 
      bg-[radial-gradient(133.33%_122.42%_at_52.23%_0%,#FFB91E_0%,#FC8E33_54.74%)]
      hover:shadow-[0px_16px_20px_0px_rgba(255,185,30,0.4),0px_6px_10px_0px_rgba(255,225,159,0.4)] 
      lg:gap-3 
      shadow-[0px_3px_8px_0px_#FFE19F47,0px_14px_14px_0px_#FFB91E47,0px_31px_19px_0px_#FFB91E59] 
      h-[58px] rounded-[200px] border-[#8c99ff] py-[16px] px-[24px]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>{" "}
    </section>
  );
};

export default RegisterForm;
