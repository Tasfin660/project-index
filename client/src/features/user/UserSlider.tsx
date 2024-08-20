import { useRef } from 'react'
import { FaCheck, FaRegStopCircle } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import ProjectOverview from '../project/ProjectOverview'
import { FaRepeat } from 'react-icons/fa6'

const UserSlider = ({ type }) => {
	const sliderRef = useRef(null)

	const handleScrollLeft = () => {
		sliderRef.current.scrollBy({
			left: -370,
			behavior: 'smooth'
		})
	}

	const handleScrollRight = () => {
		sliderRef.current.scrollBy({
			left: 370,
			behavior: 'smooth'
		})
	}

	return (
		<section className="container relative mt-16">
			<div className="flex items-center justify-between rounded-full bg-clr-secondary-grad p-2">
				<button
					className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
					onClick={handleScrollLeft}>
					<MdKeyboardArrowLeft />
				</button>
				<button
					className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
					onClick={handleScrollRight}>
					<MdKeyboardArrowRight />
				</button>
			</div>
			<div
				className="user-project-scroll flex gap-10 overflow-x-scroll py-6"
				ref={sliderRef}>
				{type === 'completed' && (
					<div className="sticky left-0 z-10 flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-clr-green-grad">
						<FaCheck className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Completed</p>
					</div>
				)}
				{type == 'ongoing' && (
					<div className="sticky left-0 z-10 flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-clr-yellow-grad">
						<FaRepeat className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Ongoing</p>
					</div>
				)}
				{type === 'postponed' && (
					<div className="sticky left-0 z-10 flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-clr-red-grad">
						<FaRegStopCircle className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Postponed</p>
					</div>
				)}
				<ProjectOverview />
				<ProjectOverview />
				<ProjectOverview />
				<ProjectOverview />
			</div>
		</section>
	)
}

export default UserSlider
