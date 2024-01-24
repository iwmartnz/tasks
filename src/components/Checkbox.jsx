import { Switch } from '@headlessui/react'
import { Check } from './Icons'

const Checkbox = ({ isChecked, onChange }) => {
	return (
		<Switch
			checked={isChecked}
			onChange={onChange}
			className={` ${
				isChecked && ' bg-brand-light-gray'
			} border-brand-light-gray bg-brand-dark-gray bg-neutral focus:ring-brand-accent flex h-6 w-6 appearance-none items-center justify-center rounded-md border-[1px] focus:outline-none focus:ring-2 `}
		>
			{isChecked && <Check />}
		</Switch>
	)
}

export default Checkbox
