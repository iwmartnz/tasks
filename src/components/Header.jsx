import { Logo } from './Icons'

const Header = () => {
	return (
		<div className=" text-brand-accent flex items-center justify-center gap-4  py-12">
			<Logo height="40" width="40" />
			<h1 className="pb-2 font-['Moirai_One'] text-4xl font-medium md:text-5xl">Tasks</h1>
		</div>
	)
}

export default Header
