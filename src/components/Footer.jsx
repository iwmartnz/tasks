import { Github, LinkedIn } from './Icons'

const Footer = () => {
	return (
		<footer className="footer fixed bottom-0 flex h-16 w-full items-center justify-center gap-4 p-4 text-white">
			<aside className="flex items-center">
				<p>App made by Isra</p>
			</aside>
			<div className=" bg-brand-gray h-full w-1 rounded-md"></div>
			<nav className="flex gap-2 ">
				<a
					href="https://github.com/iwmartnz?tab=repositories"
					target="_blank"
					className=" hover:text-brand-accent focus:ring-brand-accent focus:outline-none focus:ring-2 "
				>
					<Github height="25" width="25" />
				</a>
				<a
					href="https://www.linkedin.com/in/iwmartnz/"
					target="_blank"
					className=" hover:text-brand-accent focus:ring-brand-accent focus:outline-none focus:ring-2 "
				>
					<LinkedIn height="25" width="25" />
				</a>
			</nav>
		</footer>
	)
}

export default Footer
