import {
	buildStyles,
	CircularProgressbarWithChildren
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {
	FaAngular,
	FaCheck,
	FaDribbble,
	FaGlobeAsia,
	FaReact,
	FaRegStopCircle,
	FaVuejs
} from 'react-icons/fa'
import { FaRepeat } from 'react-icons/fa6'
import { IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { RiSvelteFill } from 'react-icons/ri'
import ProgressProvider from '../ui/ProgressProvider'

const Stats = () => {
	return (
		<main className="container my-16 w-max space-y-6">
			<section className="grid grid-cols-[repeat(4,auto)] gap-8 font-semibold">
				<div className="blue-bg flex items-center gap-3 p-4">
					<FaReact className="bg-clr-primary-grad text-clr-white box-content rounded-lg p-2.5 text-xl" />
					React Developers - 24
				</div>
				<div className="blue-bg flex items-center gap-3 p-4">
					<FaVuejs className="bg-clr-primary-grad text-clr-white box-content rounded-lg p-2.5 text-xl" />
					Vuejs Developers - 32
				</div>
				<div className="blue-bg flex items-center gap-3 p-4">
					<FaAngular className="bg-clr-primary-grad text-clr-white box-content rounded-lg p-2.5 text-xl" />
					Angular Developers - 14
				</div>
				<div className="blue-bg flex items-center gap-3 p-4">
					<RiSvelteFill className="bg-clr-primary-grad text-clr-white box-content rounded-lg p-2.5 text-xl" />
					Svelte Developers - 08
				</div>
			</section>
			<section className="blue-bg grid grid-cols-[repeat(2,auto)] items-center gap-5 p-4">
				<div className="grid grid-cols-[repeat(3,200px)] gap-10 font-medium">
					<div className="flex flex-col items-center gap-6">
						Completed - 45%
						<ProgressProvider valueStart={0} valueEnd={60}>
							{value => (
								<CircularProgressbarWithChildren
									value={value}
									className="w-[160px]"
									styles={buildStyles({
										pathTransitionDuration: 0.8,
										pathColor: 'var(--color-green)',
										trailColor: 'rgba(23, 37, 84, .4)'
									})}>
									<FaCheck className="text-clr-green text-2xl" />
								</CircularProgressbarWithChildren>
							)}
						</ProgressProvider>
					</div>
					<div className="flex flex-col items-center gap-6">
						Ongoing - 25%
						<ProgressProvider valueStart={0} valueEnd={25}>
							{value => (
								<CircularProgressbarWithChildren
									value={value}
									className="w-[160px]"
									styles={buildStyles({
										pathTransitionDuration: 0.8,
										pathColor: 'var(--color-yellow)',
										textColor: 'var(--color-yellow)',
										trailColor: 'rgba(23, 37, 84, .4)'
									})}>
									<FaRepeat className="text-clr-yellow text-2xl" />
								</CircularProgressbarWithChildren>
							)}
						</ProgressProvider>
					</div>
					<div className="flex flex-col items-center gap-6">
						Postponed - 15%
						<ProgressProvider valueStart={0} valueEnd={15}>
							{value => (
								<CircularProgressbarWithChildren
									value={value}
									className="w-[160px]"
									styles={buildStyles({
										pathTransitionDuration: 0.8,
										pathColor: 'var(--color-red)',
										textColor: 'var(--color-red)',
										trailColor: 'rgba(23, 37, 84, .4)'
									})}>
									<FaRegStopCircle className="text-clr-red text-2xl" />
								</CircularProgressbarWithChildren>
							)}
						</ProgressProvider>
					</div>
				</div>
				<div className="grid h-[250px] grid-cols-[repeat(2,200px)] gap-6 font-medium">
					<div className="bg-clr-primary-grad flex flex-col justify-between rounded-xl p-4">
						<p className="text-lg">Projects: 32</p>
						<div className="flex items-center gap-3">
							<div className="bg-clr-white h-1.5 w-full rounded-full"></div>
							<span className="text-xs">100%</span>
						</div>
					</div>
					<div className="bg-clr-green-grad flex flex-col justify-between rounded-xl p-4">
						<p className="text-lg">Completed: 20</p>
						<div className="flex items-center gap-3">
							<div className="bg-clr-white h-1.5 w-full rounded-full"></div>
							<span className="text-xs">100%</span>
						</div>
					</div>
					<div className="bg-clr-yellow-grad flex flex-col justify-between rounded-xl p-4">
						<p className="text-lg">Ongoing: 12</p>
						<div className="flex items-center gap-3">
							<div className="bg-clr-white h-1.5 w-full rounded-full"></div>
							<span className="text-xs">100%</span>
						</div>
					</div>
					<div className="bg-clr-red-grad flex flex-col justify-between rounded-xl p-4">
						<p className="text-lg">Postponed: 05</p>
						<div className="flex items-center gap-3">
							<div className="bg-clr-white h-1.5 w-full rounded-full"></div>
							<span className="text-xs">100%</span>
						</div>
					</div>
				</div>
			</section>
			<section className="blue-bg flex w-[1160px] items-center gap-6 p-4 text-sm">
				<div className="stat-img relative size-20 shrink-0 overflow-hidden rounded-full">
					<img src="https://i.imgur.com/HoKv53T.jpg" alt="owner img" />
				</div>
				<div>
					<p>
						Meet Tasfin, a dedicated self-learner passionate about coding.
						Currently exploring React, he created Project-Index to hone his
						skills. With a strong interest in web development, Tasfin is always
						seeking innovative ways to turn ideas into delightful user
						experiences.
					</p>
					<p className="mt-1.5 flex items-center gap-1.5">
						<FaGlobeAsia className="text-clr-primary -translate-y-[1px] text-base" />
						Bangladesh
					</p>
				</div>
			</section>
			<section className="grid grid-cols-[repeat(4,250px)] justify-center gap-8 pb-4 pt-2 text-lg">
				<div className="flex flex-col items-center">
					<p className="font-medium">Whatsapp</p>
					<p className="text-sm">Chat with me directly on WhatsApp</p>
					<button className="bg-clr-gray-grad text-clr-primary mt-4 rounded-full px-4 py-2">
						<IoLogoWhatsapp />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<p className="font-medium">Mail</p>
					<p className="text-sm">Drop me a line via email</p>
					<button className="bg-clr-gray-grad text-clr-primary mt-4 rounded-full px-4 py-2">
						<MdEmail />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<p className="font-medium">YouTube</p>
					<p className="text-sm">Watch my latest creations on YT</p>
					<button className="bg-clr-gray-grad text-clr-primary mt-4 rounded-full px-4 py-2">
						<IoLogoYoutube />
					</button>
				</div>
				<div className="flex flex-col items-center">
					<p className="font-medium">Dribbble</p>
					<p className="text-sm">Explore my design portfolio</p>
					<button className="bg-clr-gray-grad text-clr-primary mt-4 rounded-full px-4 py-2">
						<FaDribbble />
					</button>
				</div>
			</section>
		</main>
	)
}
export default Stats
