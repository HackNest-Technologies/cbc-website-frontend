const SubmitBtn = ({ className, text }) => {
  return (
    <section>
      <button
        className={`${className} font-inter leading-[150%] font-medium  rounded-[22.82px]  text-white text-sm hover:cursor-pointer active:scale-95 transition-transform`}
        style={{
          background:
            "radial-gradient(132.69% 122.41% at 52.23% 0%, #FFB91E 0%, #FC8E33 54.74%)",
          boxShadow: `
            0px 1.53px 4.09px 0px #FFE19F47,
            0px 7.15px 7.15px 0px #FFB91E47,
            0px 15.84px 9.71px 0px #FFB91E59
          `,
        }}
      >
        {text}
      </button>
    </section>
  );
};

export default SubmitBtn;
