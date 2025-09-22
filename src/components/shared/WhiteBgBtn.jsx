import { Link } from "react-router-dom";

const WhiteBgBtn = ({ link, classname, text }) => {
  return (
    <section>
      <Link
        to={link}
        className={`
    ${classname} 
    w-[125px] h-[40px] 
    rounded-[22.96px] 
    px-4 py-[1.38px]
     flex items-center justify-center gap-2
    border-[0.46px]
    border-[#989898] 
    [border-image-source:linear-gradient(180deg,#F0F6FF_0%,#FFFFFF_100%),linear-gradient(0deg,#989898,#989898)]
    [border-image-slice:1] 
    bg-[linear-gradient(181.53deg,#FFFFFF_15.32%,#EEF4FF_98.7%)] 
    [backdrop-filter:blur(10.375147819519043px)]
    shadow-[0px_7.8px_16.99px_0px_#4673FB1A,0px_31.22px_31.22px_0px_#4673FB17,0px_70.24px_42.24px_0px_#4673FB0D,0px_124.42px_50.04px_0px_#4673FB03,0px_194.66px_54.63px_0px_#4673FB00,0px_0.92px_0px_0px_#FFFFFF80_inset]
    text-sm text-gray-700 font-medium
    hover:cursor-pointer active:scale-95 transition-transform
  `}
      >
        {text}
      </Link>
    </section>
  );
};

export default WhiteBgBtn;
