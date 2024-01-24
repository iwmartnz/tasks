export const Logo = ({ height = '20', width = '20' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 11L12 14L20.0004 5.99958M22 4L20.0004 5.99958M20.0004 5.99958C18.176 3.57093 15.2714 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export const Plus = ({ currentColor = 'currentColor', height = '20', width = '20' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 12H12M19 12H15M12 12V5M12 12V19"
				stroke={currentColor}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export const Close = ({ height = '20', width = '20' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 18L12 12M18 6L14 10M6 6L12 12M18 18L12 12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export const Details = ({ height = '20', width = '20' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 6H17M13 6H3M3 12H11M3 18H16"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export const Check = ({ height = '20', width = '20' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13L9 18L15 11.4545M20 6L17.25 9"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export const Edit = ({ height = '20', width = '20' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16 12L20.0001 7.99994C20.5453 7.45472 20.8179 7.18212 20.9636 6.88804C21.2409 6.32848 21.2409 5.67151 20.9636 5.11194C20.8179 4.81786 20.5453 4.54525 20.0001 4.00003V4.00003C19.4549 3.45479 19.1823 3.18217 18.8882 3.03643C18.3286 2.75912 17.6716 2.75911 17.1121 3.03641C16.818 3.18215 16.5454 3.45476 16.0001 3.99998L6.37023 13.6298C5.86092 14.1391 5.60627 14.3937 5.40392 14.6839C5.22432 14.9414 5.07566 15.2192 4.96101 15.5114C4.83185 15.8407 4.76122 16.1939 4.61997 16.9002L4 20L7.09987 19.38C7.80613 19.2388 8.15927 19.1681 8.48856 19.039C8.78084 18.9243 9.05861 18.7757 9.31613 18.5961C9.60626 18.3937 9.86091 18.1391 10.3702 17.6298L13 15M15 5C15 7.20914 16.7909 9 19 9"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export const Cup = ({ height = '20', width = '20', color = 'currentColor' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 5H3C2.53501 5 2.30252 5 2.11177 5.05111C1.59413 5.18981 1.18981 5.59413 1.05111 6.11177C1 6.30252 1 6.53501 1 7C1 7.92997 1 8.39496 1.10222 8.77646C1.37962 9.81173 2.18827 10.6204 3.22354 10.8978C3.60504 11 4.07003 11 5 11M19 5H21C21.465 5 21.6975 5 21.8882 5.05111C22.4059 5.18981 22.8102 5.59413 22.9489 6.11177C23 6.30252 23 6.53501 23 7C23 7.92997 23 8.39496 22.8978 8.77646C22.6204 9.81173 21.8117 10.6204 20.7765 10.8978C20.395 11 19.93 11 19 11M12 18V15.6C12 15.0445 12 14.7668 12.1061 14.5552C12.2008 14.3665 12.3461 14.218 12.5328 14.1194C12.742 14.0088 13.0281 14.0027 13.6002 13.9905C14.4713 13.9719 15.047 13.9171 15.5451 13.7553C17.0673 13.2607 18.2607 12.0673 18.7553 10.5451C19 9.79192 19 8.86128 19 7V6.5C19 5.10218 19 4.40326 18.7716 3.85195C18.4672 3.11687 17.8831 2.53284 17.1481 2.22836C16.5967 2 15.8978 2 14.5 2H9.5C8.10218 2 7.40326 2 6.85195 2.22836C6.11687 2.53284 5.53284 3.11687 5.22836 3.85195C5 4.40326 5 5.10218 5 6.5V7C5 8.86128 5 9.79192 5.24472 10.5451C5.73931 12.0673 6.93273 13.2607 8.45492 13.7553M9.09091 22H14.9091C15.5116 22 16 21.5116 16 20.9091C16 19.3024 14.6976 18 13.0909 18H10.9091C9.30244 18 8 19.3024 8 20.9091C8 21.5116 8.48842 22 9.09091 22Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
