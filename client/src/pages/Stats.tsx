import {
	buildStyles,
	CircularProgressbarWithChildren
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
	FaAngular,
	FaCheck,
	FaDribbble,
	FaReact,
	FaRegStopCircle,
	FaVuejs
} from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { RiSvelteFill } from 'react-icons/ri';
import ProgressProvider from '../ui/progressbar/ProgressProvider';
const Stats = () => {
	return (
		<main className="container mb-20 mt-16 w-max space-y-6">
			<section className="grid grid-cols-[repeat(4,auto)] justify-center gap-8">
				<div className="flex items-center gap-3 rounded-xl border-2 border-blue-600/20 bg-blue-900/10 p-4">
					<FaReact className="box-content rounded-lg bg-cl-primary-grad p-2.5 text-xl text-cl-white" />
					<div>
						<p className="font-semibold">React Developers - 24</p>
					</div>
				</div>
				<div className="flex items-center gap-3 rounded-xl border-2 border-blue-600/20 bg-blue-900/10 p-4">
					<FaVuejs className="box-content rounded-lg bg-cl-primary-grad p-2.5 text-xl text-cl-white" />
					<div>
						<p className="font-semibold">Vuejs Developers - 32</p>
					</div>
				</div>
				<div className="flex items-center gap-3 rounded-xl border-2 border-blue-600/20 bg-blue-900/10 p-4">
					<FaAngular className="box-content rounded-lg bg-cl-primary-grad p-2.5 text-xl text-cl-white" />
					<div>
						<p className="font-semibold">Angular Developers - 14</p>
					</div>
				</div>
				<div className="flex items-center gap-3 rounded-xl border-2 border-blue-600/20 bg-blue-900/10 p-4">
					<RiSvelteFill className="box-content rounded-lg bg-cl-primary-grad p-2.5 text-xl text-cl-white" />
					<div>
						<p className="font-semibold">Svelte Developers - 08</p>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-[repeat(2,auto)] items-center gap-5 rounded-xl border-2 border-blue-600/20 bg-blue-900/10 p-4">
				<div className="grid grid-cols-[repeat(3,200px)] items-center gap-10">
					<div className="flex flex-col items-center gap-6">
						<span className="font-medium">Completed - 45%</span>
						<ProgressProvider valueStart={0} valueEnd={60}>
							{value => (
								<CircularProgressbarWithChildren
									value={value}
									className="w-[160px]"
									styles={buildStyles({
										pathTransitionDuration: 0.8,
										pathColor: '#22c55e',
										textColor: '#22c55e',
										trailColor: 'rgba(23, 37, 84, .4)'
									})}>
									<FaCheck className="text-2xl text-emerald-500" />
								</CircularProgressbarWithChildren>
							)}
						</ProgressProvider>
					</div>
					<div className="flex flex-col items-center gap-6">
						<span className="font-medium">Ongoing - 25%</span>
						<ProgressProvider valueStart={0} valueEnd={25}>
							{value => (
								<CircularProgressbarWithChildren
									value={value}
									className="w-[160px]"
									styles={buildStyles({
										pathTransitionDuration: 0.8,
										pathColor: '#facc15',
										textColor: '#facc15',
										trailColor: 'rgba(23, 37, 84, .4)'
									})}>
									<FaRepeat className="text-2xl text-yellow-400" />
								</CircularProgressbarWithChildren>
							)}
						</ProgressProvider>
					</div>
					<div className="flex flex-col items-center gap-6">
						<span className="font-medium">Postponed - 15%</span>
						<ProgressProvider valueStart={0} valueEnd={15}>
							{value => (
								<CircularProgressbarWithChildren
									value={value}
									className="w-[160px]"
									styles={buildStyles({
										pathTransitionDuration: 0.8,
										pathColor: '#e11d48',
										textColor: '#e11d48',
										trailColor: 'rgba(23, 37, 84, .4)'
									})}>
									<FaRegStopCircle className="text-2xl text-rose-600" />
								</CircularProgressbarWithChildren>
							)}
						</ProgressProvider>
					</div>
				</div>
				<div className="grid h-[250px] grid-cols-[repeat(2,200px)] gap-6">
					<div className="flex flex-col justify-between rounded-xl bg-cl-primary-grad p-4">
						<p className="text-lg font-medium">Projects: 32</p>
						<div className="flex items-center gap-3">
							<div className="h-1.5 w-full rounded-full bg-cl-white"></div>
							<span className="text-xs font-medium">100%</span>
						</div>
					</div>
					<div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-4">
						<p className="text-lg font-medium">Completed: 20</p>
						<div className="flex items-center gap-3">
							<div className="h-1.5 w-full rounded-full bg-cl-white"></div>
							<span className="text-xs font-medium">100%</span>
						</div>
					</div>
					<div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-4">
						<p className="text-lg font-medium">Ongoing: 12</p>
						<div className="flex items-center gap-3">
							<div className="h-1.5 w-full rounded-full bg-cl-white"></div>
							<span className="text-xs font-medium">100%</span>
						</div>
					</div>
					<div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-rose-600 to-rose-800 p-4">
						<p className="text-lg font-medium">Postponed: 05</p>
						<div className="flex items-center gap-3">
							<div className="h-1.5 w-full rounded-full bg-cl-white"></div>
							<span className="text-xs font-medium">100%</span>
						</div>
					</div>
				</div>
			</section>
			<section className="flex w-[1160px] items-center gap-6 rounded-xl border-2 border-blue-600/20 bg-blue-900/10 p-4">
				<div className="aaa relative size-20 shrink-0 overflow-hidden rounded-full">
					<img src="https://i.imgur.com/HoKv53T.jpg" alt="" />
				</div>
				<div>
					<p className="text-sm">
						Meet Tasfin, a dedicated self-learner passionate about coding.
						Currently exploring React, he created Project-Index to hone his
						skills. With a strong interest in web development, Tasfin is always
						seeking innovative ways to turn ideas into delightful user
						experiences.
					</p>
					<p className="mt-1.5 flex items-center gap-1 text-sm">
						<IoLocationSharp className="-translate-y-[1px] text-lg text-cl-primary" />
						Rampura, Dhaka, Bangladesh
					</p>
				</div>
			</section>
			<section className="grid grid-cols-[repeat(4,250px)] justify-center gap-8 rounded-xl border-blue-600/20">
				<div className="flex flex-col items-center">
					<p className="text-lg font-medium">Whatsapp</p>
					<p className="text-sm">Chat with me directly on WhatsApp</p>
					<button className="mt-4 w-max rounded-full bg-cl-gray-grad px-4 py-2 text-lg text-cl-primary">
						<IoLogoWhatsapp />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-lg font-medium">Mail</p>
					<p className="text-sm">Drop me a line via email</p>
					<button className="mt-4 w-max rounded-full bg-cl-gray-grad px-4 py-2 text-lg text-cl-primary">
						<MdEmail />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-lg font-medium">YouTube</p>
					<p className="text-sm">Watch my latest creations on YT</p>
					<button className="mt-4 w-max rounded-full bg-cl-gray-grad px-4 py-2 text-lg text-cl-primary">
						<IoLogoYoutube />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-lg font-medium">Dribbble</p>
					<p className="text-sm">Explore my design portfolio</p>
					<button className="mt-4 w-max rounded-full bg-cl-gray-grad px-4 py-2 text-lg text-cl-primary">
						<FaDribbble />
					</button>
				</div>
			</section>
		</main>
	);
};
export default Stats;
