const Button = ({
	onClick,
	background = 'bg-brand-light-gray',
	padding = 'p-3',
	className,
	children,
	onDisabled = false,
	onAutoFocus = false
}) => {
	return (
		<button
			onClick={onClick}
			disabled={onDisabled}
			autoFocus={onAutoFocus}
			className={` ${background} ${className} ${padding} ${
				onDisabled && ' pointer-events-none opacity-30'
			} focus:ring-brand-white flex w-fit items-center justify-center font-medium focus:outline-none focus:ring-2 `}
		>
			{children}
		</button>
	)
}

export default Button
