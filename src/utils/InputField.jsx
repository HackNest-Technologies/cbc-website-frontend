const InputField = ({id, type = "text", label, name, placeholder, inputValue, handleChanges,}) => {
  return (
    <div className="bg-transpare py-2 w-full">
      <label
        htmlFor={id}
        className="text-xl  uppercase leading-[19px] text-[#000] font-inter"
      >
       { label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full h-[40px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
        required
        value={inputValue}
        onChange={handleChanges}
      />
    </div>
  );
};


export default InputField

