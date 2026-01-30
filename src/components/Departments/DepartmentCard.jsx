import whatsappIcon from "../../assets/images/whatsappIcon.png";
const DepartmentCard = ({ departments }) => {
  return (
    <section className="container mx-auto px-6 md:px-0">
      {departments.map((department) => (
        <div
          key={department.id}
          className="relative rounded-[14.154px] overflow-hidden py-10 md:flex md:gap-6  "
        >
          <div className="md:w-1/2">
            <img
              src={department.departmentImg}
              alt={department.department}
              className="rounded-[20px] w-full object-cover md:h-full"
            />
          </div>

          <div className="md:w-4/6">
            <h3 className="pt-2 text-[45px] font-bold font-satoshi capitalize mt-4 md:mt-0 leading-[100%]  md:text-[48px]">
              {department.department}
            </h3>

            <p className="py-4 text-sm font-inter leading-[140%] text-black/70 md:text-base md:leading-[30px] lg:pt-[40px] 2xl:pt-[50px]">
              {department.description}
            </p>
            <a
              href={department.whatsappLink}
              className="flex gap-2 items-center bg-[radial-gradient(133.33%_122.42%_at_52.23%_0%,#FFB91E_0%,#FC8E33_54.74%)]
              hover:shadow-[0_16px_20px_0_rgba(255,185,30,0.4),0_6px_10px_0_rgba(255,225,159,0.4)] lg:absolute bottom-[10%] lg:gap-3 shadow-[0px_3px_8px_0px_#FFE19F47] md:shadow-[0px_14px_14px_0px_#FFB91E47] h-[52px] w-[212px] rounded-[200px] border-[#8c99ff] py-[16px] px-[24px]"
            >
              <div className="flex gap-8 items-center text-lg font-medium font-geist text-[#fff] leading-[150%]">
                <p> Join Group</p>
                <img
                  src={whatsappIcon}
                  alt="whatsapp icon"
                  className="w-[24px] h-[24px] object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DepartmentCard;
