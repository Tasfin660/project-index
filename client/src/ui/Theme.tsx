import { useState } from 'react'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { IoMdMoon } from 'react-icons/io'
import { MdOutlineLightMode } from 'react-icons/md'

function Theme() {
	const [theme, setTheme] = useState(globalThis.getTheme())
	function changeTheme() {
		const th = theme === 'light' ? 'auto' : theme === 'auto' ? 'dark' : 'light'
		globalThis.setTheme(th)
		setTheme(() => th)
	}

	return (
		<button
			className="relative mr-4 box-content flex items-center gap-5 justify-self-end rounded-full bg-slate-300 p-2.5 text-clr-primary dark:bg-transparent dark:bg-clr-secondary-grad"
			onClick={changeTheme}>
			<MdOutlineLightMode
				className={`z-[1] duration-300 ${theme == 'light' && 'text-clr-primary'}`}
			/>
			<HiMiniComputerDesktop
				className={`z-[1] duration-300 ${theme == 'auto' && 'text-clr-primary'}`}
			/>
			<IoMdMoon
				className={`z-[1] duration-300 ${theme == 'dark' && 'text-clr-primary'}`}
			/>
			<span
				className={`absolute size-6 rounded-full bg-slate-100 dark:bg-sky-500/20 ${theme === 'auto' ? 'left-[50%] translate-x-[-50%]' : theme === 'dark' ? 'left-[95%] translate-x-[-100%]' : 'left-[6%] translate-x-0'} transition-[left_transform] duration-300`}></span>
		</button>
	)
}

export default Theme
