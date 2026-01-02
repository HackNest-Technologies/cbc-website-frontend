import { BsClock } from "react-icons/bs";


const WorshipWithUs = () => {
  const services = [
    {
      title: "Success & Leadership Service",
      time: "8AM",
      dayOfWeek: "Sundays",
    },
    { title: "School of the Spirit", time: "8AM", dayOfWeek: "Sundays" },
    {
      title: "Celebration & Prophetic Service",
      time: "10AM",
      dayOfWeek: "Sundays",
    },
  ];

  const ServiceCard = ({ title, time, dayOfWeek }) => (
    <div className="relative px-5 before:absolute before:w-full before:h-[60.2px] before:bg-[#FFB91E47] before:left-1/2 before:-translate-x-1/2 before:bottom-1.5 before:rounded-[3.85px] before: before:z-0">
      <div className="p-1 border rounded-[3.85px] space-y-4 relative">
        <h4 className="text-sm font-satoshi leading-[120%] capitalize text-center">
          {title}
        </h4>

        <div className="py-[8px] space-y-1 ">
          <p className="flex items-center text-sm leading-[12.82px] font-inter gap-2 italic justify-center">
            <BsClock className="text-base" />
            {time}
          </p>
          <p className="text-sm leading-[120%] font-inter italic text-center">
            {dayOfWeek}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto p-6 sm:px-0 relative mt-24 space-y-8 md:hidden min-[410px]:pt-[120px]">
      <h3 className="font-satoshi text-base leading-[100%] relative before:absolute before:w-[63.08px] before:h-[27.94px] before:rounded-[102.55px] before:bg-[#FFB91E47] before:top-1/2 before:-translate-y-1/2 before:-right-3 w-fit before:z-0">
        WORSHIP WITH US
      </h3>

      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default WorshipWithUs;
