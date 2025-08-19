const Button = (props) => {
	const { text, variant, icon, className, ...others } = props;

	if (variant === "solid")
		return (
			<button
				type="button"
				className={`${className} bg-gradient-to-b from-[#FFB91E] to-[#FC8E33] py-[6.13px] px-4 rounded-full inline-flex items-center drop-shadow-[0_8px_5px]  drop-shadow-[#ff9a2fd8] text-white text-shadow-lg relative gap-[11.87px] hover:cursor-pointer active:scale-95 transition-transform`}
				{...others}
			>
				<span className="absolute h-2 w-2 border-t-2 border-l-2 rounded-tl-full top-1.5 left-1.5 border-white rotate-22.5 block shadow-inner"></span>
				<span>{text}</span>
				{icon && <span>{icon}</span>}
			</button>
		);

	return (
		<button
			type="button"
			className={`${className} border border-[#989898] rounded-full px-4 py-2 text-sm hover:cursor-pointer active:scale-95 transition-transform`}
			{...others}
		>
			{props.text}
		</button>
	);
};

export default Button;
