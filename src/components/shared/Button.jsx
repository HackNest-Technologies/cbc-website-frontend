import { Link } from "react-router-dom";

const Button = ({ text, icon, link, className = "" }) => {
  return (
    <Link
      to={link}
      className={`
        inline-flex items-center justify-center gap-[clamp(8px,1vw,12px)]
        rounded-full
        bg-gradient-to-b from-[#FFB91E] to-[#FC8E33]
        text-white font-inter font-medium
        shadow-[0_8px_5px_#ff9a2fd8]
        transition-transform active:scale-95
        h-[clamp(44px,6vh,58px)]
        px-[clamp(16px,2vw,28px)]
        text-[clamp(14px,1.2vw,18px)]
        ${className}
      `}
    >
      <span>{text}</span>
      {icon && <span className="flex items-center">{icon}</span>}
    </Link>
  );
};

export default Button;
