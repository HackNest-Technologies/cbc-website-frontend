import icon1 from "../../assets/images/bible-icon.png";
import featImg1 from "../../assets/images/feature-1.png";
import featImg2 from "../../assets/images/feature-2.png";
import featImg3 from "../../assets/images/feature-3.png";
import icon3 from "../../assets/images/gift-icon.png";
import icon2 from "../../assets/images/group-icon.png";

const Features = () => {
  const features = [
    {
      title: "Bible centered teaching",
      bgImg: featImg1,
      icon: icon1,
      desc: "Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local .",
    },
    {
      title: "Loving Community",
      bgImg: featImg2,
      icon: icon2,
      desc: "Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local .",
    },
    {
      title: "Impactful Outreach",
      bgImg: featImg3,
      icon: icon3,
      desc: "Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local .",
    },
  ];

const FeatureCard = ({ title, bgImg, icon, desc }) => (
  <div
    style={{
      backgroundImage: `linear-gradient(#00000044, #00000044), url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="py-6 px-4 text-white rounded-2xl h-[373px] md:rounded-[11.25px] md:py-[27px] md:px-[12px] group overflow-hidden"
  >
    <div className="flex flex-col justify-between h-full">
      <img src={icon} alt="" className="w-[58px] h-auto object-cover" />

      <div>
        <h3 className="text-[34px] leading-[120%] font-satoshi w-[275px] capitalize">
          {title}
        </h3>

        {/* Mobile: visible | Desktop: slide up + fade in on hover */}
        <p
          className="
            text-sm font-inter leading-[100%] pt-5 
            lg:opacity-0 lg:translate-y-4 lg:pt-0  lg:group-hover:pt-6
            lg:group-hover:opacity-100 lg:group-hover:translate-y-0
            transition-all duration-300 ease-out
          "
        >
          {desc}
        </p>
      </div>
    </div>
  </div>
);



  return (
    <section className="container mx-auto p-6 grid-cols-1 grid gap-4 relative  md:grid-cols-3 md:px-0 ">
      {features.map((feat) => (
        <FeatureCard {...feat} key={feat.title} />
      ))}
    </section>
  );
};

export default Features;
