import { useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { IoSunny } from 'react-icons/io5';

const Theme = () => {
	const [theme, setTheme] = useState(globalThis.getTheme());

	const handleTheme = (th: string) => {
		globalThis.setTheme(th);
		setTheme(th);
	};

	return (
		<div className="mr-4 flex items-center divide-x divide-slate-50/20 justify-self-end overflow-hidden rounded-full bg-gradient-to-br from-cl-primary-tints to-cl-primary-shades text-cl-white">
			<button
				className={`box-content px-4 py-2.5 duration-300 ${theme === 'light' ? 'bg-cl-white text-cl-primary' : 'hover:bg-slate-50/20'} `}
				onClick={() => handleTheme('light')}>
				<IoSunny />
			</button>
			<button
				className={`box-content px-4 py-2.5 duration-300 ${theme === 'auto' ? 'bg-cl-white text-cl-primary' : 'hover:bg-slate-50/20'} `}
				onClick={() => handleTheme('auto')}>
				<HiMiniComputerDesktop />
			</button>
			<button
				className={`box-content px-4 py-2.5 duration-300 ${theme === 'dark' ? 'bg-cl-white text-cl-primary' : 'hover:bg-slate-50/20'} `}
				onClick={() => handleTheme('dark')}>
				<BsMoonStarsFill />
			</button>
		</div>
	);
};

export default Theme;
