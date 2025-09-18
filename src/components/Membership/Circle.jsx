import MembershipForm from "./MembershipForm"

const Circle = () => {
  return (
 <section className="relative">
        <div className="mt-10 flex justify-center opacity-40 md:mt-[120px]">
          <div className="circle-step1 border-[1.26px] border-[#FD9F2B] border-dotted rounded-full  h-[95vw] w-[95vw] flex justify-center items-center md:w-[80vw] md:h-[80vw] lg:w-[50vw] lg:h-[50vw]">
            <div className="circle-step2 border-[1.26px] border-[#FD9F2B] border-dotted rounded-full h-[85vw] w-[85vw] flex justify-center items-center md:w-[70vw] md:h-[70vw] lg:w-[45vw] lg:h-[45vw]">
              <div className="circle-step3 border-[1.26px] border-[#FD9F2B] border-dotted  rounded-full h-[75vw] w-[75vw] flex justify-center items-center md:w-[60vw] md:h-[60vw] lg:w-[40vw] lg:h-[40vw]">
                <div className="circle-step4 border-[1.26px] border-[#FD9F2B] border-dotted  rounded-full h-[65vw] w-[65vw] flex justify-center items-center md:w-[50vw] md:h-[50vw] lg:w-[35vw] lg:h-[35vw]">
                  <div className="circle-step5 border-[1.26px] border-[#FD9F2B] border-dotted  rounded-full h-[55vw] w-[55vw] flex justify-center items-center md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw]">
                    <div className="circle-step6 border-[1.26px] border-[#FD9F2B] border-dotted  rounded-full h-[45vw] w-[45vw] flex justify-center items-center md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw]">
                      <div className="circle-step7 border-[1.26px] border-[#FD9F2B] border-dotted rounded-full h-[35vw] w-[35vw] flex justify-center items-center md:w-[20vw] md:h-[20vw] lg:w-[20vw] lg:h-[20vw]">
                        <div className="circle-step8 border-[1.26px] border-[#FD9F2B] border-dotted rounded-full h-[25vw] w-[25vw] flex justify-center items-center md:w-[10vw] md:h-[10vw] lg:w-[15vw] lg:h-[15vw]">
                          <div className="circle-step9 border-[1.26px] border-[#FD9F2B] border-dotted rounded-full h-[15vw] w-[15vw] flex justify-center items-center md:w-[5vw] md:h-[5vw] lg:w-[10vw] lg:h-[10vw]">
                            <div className="circle-ste10 border-[1.26px] border-[#FD9F2B] border-dotted rounded-full h-[5vw] w-[5vw] flex justify-center items-center md:w-[2vw] md:h-[2vw] lg:w-[5vw] lg:h-[5vw]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center mt-12 md:mt-0 items-center ">
            <MembershipForm/>
        </div>
      </section>  )
}

export default Circle