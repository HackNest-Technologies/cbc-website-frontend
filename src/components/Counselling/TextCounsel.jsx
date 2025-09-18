import InputsForm from "./InputsForm";

const TextCounsel = () => {
  return (
    <section className="px-6 pt-20 container mx-auto md:px-0 lg:w-[70vw] ">
      <h2 className="text-center text-[32px] border-b-[3px] border-dotted border-[#FC8E33] pt-[16px] pb-[32px] font-satoshi leading-[100%] uppercase md:text-[48px] md:text-left">
        Counselling Form
      </h2>
      <InputsForm/>
    </section>
  );
};

export default TextCounsel;
