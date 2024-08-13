import {
	FaAngular,
	FaCss3,
	FaHtml5,
	FaJs,
	FaReact,
	FaSass,
	FaVuejs
} from 'react-icons/fa';
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiNuxtdotjs } from 'react-icons/si';

const Header = () => {
	const iClass =
		'box-content rounded-md bg-cl-gray-light px-3 py-2.5 text-xl duration-300';

	return (
		<header className="container flex flex-col items-center pt-16 text-center">
			<h2 className="font-heading text-sm font-medium uppercase text-cl-primary">
				Find Inspiring Projects
			</h2>
			<h1 className="-mt-2 font-heading text-[50px] font-bold">
				Project Index
			</h1>
			<div className="mt-3 w-1/2 space-y-1 text-sm">
				<p>
					Unlock Your Potential: Explore Web Dev Projects to Build Your
					Portfolio with Practical Experience.
				</p>
				<p>
					Discover innovative ideas, enhance your coding skills, and create
					stunning web applications. Join a community of passionate developers
					and take your career to the next level.
				</p>
			</div>
			<div className="mb-16 mt-8 flex gap-6">
				<FaHtml5 className={`${iClass} hover:bg-orange-600`} />
				<FaCss3 className={`${iClass} hover:bg-blue-600`} />
				<FaSass className={`${iClass} hover:bg-pink-500`} />
				<RiTailwindCssFill className={`${iClass} hover:bg-cyan-500`} />
				<FaJs className={`${iClass} hover:bg-yellow-500`} />
				<FaReact className={`${iClass} hover:bg-cl-primary-tints`} />
				<FaVuejs className={`${iClass} hover:bg-emerald-500`} />
				<FaAngular className={`${iClass} hover:bg-red-600`} />
				<RiSvelteFill className={`${iClass} hover:bg-orange-600`} />
				<RiNextjsFill
					className={`${iClass} hover:bg-cl-white hover:text-cl-gray-dark`}
				/>
				<SiNuxtdotjs className={`${iClass} hover:bg-emerald-500`} />
			</div>
		</header>
	);
};

export default Header;
