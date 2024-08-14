// import { useState } from 'react';
// import { BsMoonStarsFill } from 'react-icons/bs';
// import { HiMiniComputerDesktop } from 'react-icons/hi2';
// import { IoSunny } from 'react-icons/io5';

// const Theme = () => {
// 	const [theme, setTheme] = useState(globalThis.getTheme());

// 	const handleTheme = (th: string) => {
// 		globalThis.setTheme(th);
// 		setTheme(th);
// 	};

// 	return (
// 		<div className="mr-4 flex items-center divide-x divide-slate-50/20 justify-self-end overflow-hidden rounded-full bg-gradient-to-br from-cl-primary-tints to-cl-primary-shades text-cl-white">
// 			<button
// 				className={`box-content px-4 py-2.5 duration-300 ${theme === 'light' ? 'bg-cl-white text-cl-primary' : 'hover:bg-slate-50/20'} `}
// 				onClick={() => handleTheme('light')}>
// 				<IoSunny />
// 			</button>
// 			<button
// 				className={`box-content px-4 py-2.5 duration-300 ${theme === 'auto' ? 'bg-cl-white text-cl-primary' : 'hover:bg-slate-50/20'} `}
// 				onClick={() => handleTheme('auto')}>
// 				<HiMiniComputerDesktop />
// 			</button>
// 			<button
// 				className={`box-content px-4 py-2.5 duration-300 ${theme === 'dark' ? 'bg-cl-white text-cl-primary' : 'hover:bg-slate-50/20'} `}
// 				onClick={() => handleTheme('dark')}>
// 				<BsMoonStarsFill />
// 			</button>
// 		</div>
// 	);
// };

// export default Theme;

import { useState } from 'react';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { IoMdMoon } from 'react-icons/io';
import { MdOutlineLightMode } from 'react-icons/md';

function Theme() {
	const [theme, setTheme] = useState(globalThis.getTheme());
	function changeTheme() {
		const th = theme === 'light' ? 'auto' : theme === 'auto' ? 'dark' : 'light';
		globalThis.setTheme(th);
		setTheme(() => th);
	}

	return (
		<button
			className="relative mr-4 box-content flex items-center gap-5 justify-self-end rounded-full bg-cl-secondary-grad p-2.5 text-cl-primary"
			onClick={changeTheme}>
			<MdOutlineLightMode
				className={`z-[1] duration-300 ${theme == 'light' && 'text-cl-primary'}`}
			/>
			<HiMiniComputerDesktop
				className={`z-[1] duration-300 ${theme == 'auto' && 'text-cl-primary'}`}
			/>
			<IoMdMoon
				className={`z-[1] duration-300 ${theme == 'dark' && 'text-cl-primary'}`}
			/>
			<span
				className={`absolute size-6 rounded-full bg-sky-500/20 ${theme === 'auto' ? 'left-[50%] translate-x-[-50%]' : theme === 'dark' ? 'left-[95%] translate-x-[-100%]' : 'left-[6%] translate-x-0'} transition-[left_transform] duration-300`}></span>
		</button>
	);
}

export default Theme;
