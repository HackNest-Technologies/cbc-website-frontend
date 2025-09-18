const BgWelcome = () => {
  return (
    <section>
      {/* Background container */}
      <div className="bg-[#E8E8E8] h-[150px] relative md:h-[210px] lg:h-[267px]">
        {/* Centered inner section */}
        <div className="container mx-auto absolute px-6 left-0 right-0 top-[50px] pt-[60px] md:pt-[100px] md:px-0">
          <section>
            <section className="relative bg-[#FC8E33] h-[180px] rounded-[8px] md:rounded-[16px] md:h-[360px] lg:h-[420px]">
              {/* Central text */}
              <h2 className="absolute inset-0 flex justify-center items-center text-center text-[20px] leading-[100%] text-white uppercase font-satoshi font-bold md:text-[53px] lg:text-[75px] lg:leading-[100%]">
                you’re new?
              </h2>

              {/* Floating texts */}
              <p className="absolute top-[8px] left-[15px] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[-25deg]">
                that's nice!
              </p>
              <p className="absolute  left-[45%] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[20deg]">
                amazing!
              </p>
              <p className="absolute  right-6 text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[15deg]">
                welcome!
              </p>
              <p className="absolute bottom-[40%] right-[2px] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[25deg] lg:bottom-[-0px] lg:rotate-[20deg] ">
                we love you!
              </p>
              <p className="absolute bottom-[8px] left-[50%] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[-28deg] lg:bottom-[-10px]">
                welcome!
              </p>
              <p className="absolute bottom-8 left-[0px] text-[19px] font-reenie text-white md:text-[53px] lg:text-[75px]  rotate-[30deg] md:rotate-[21deg] md:bottom-[55px] lg:bottom-[20px]">
                thanks for coming!
              </p>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BgWelcome;
