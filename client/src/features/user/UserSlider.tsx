import { useRef } from 'react'
import { FaCheck, FaRegStopCircle } from 'react-icons/fa'
import { FaRepeat } from 'react-icons/fa6'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useAppSelector } from '../../hooks/hooks'
import ProjectOverview from '../project/ProjectOverview'
import { getGuestUser } from './userSlice'

interface UserSlider {
	status: 'Completed' | 'Ongoing' | 'Postponed'
}

const UserSlider = ({ status }: UserSlider) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const user = useAppSelector(getGuestUser)
	const { projects } = user || {}

	const isEmpty =
		projects?.filter(project => project.status === status).length === 0

	const handleScrollLeft = () => {
		if (sliderRef.current)
			(sliderRef.current as HTMLDivElement).scrollBy({
				left: -370,
				behavior: 'smooth'
			})
	}

	const handleScrollRight = () => {
		if (sliderRef.current)
			sliderRef.current.scrollBy({
				left: 370,
				behavior: 'smooth'
			})
	}

	return (
		<section className="container relative mt-16">
			<div className="flex items-center justify-between rounded-full bg-slate-200 p-2 dark:bg-transparent dark:bg-clr-secondary-grad">
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
				{status === 'Completed' && (
					<div className="sticky left-0 z-10 flex h-[188px] w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-clr-green-grad text-clr-white">
						<FaCheck className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Completed</p>
					</div>
				)}
				{status == 'Ongoing' && (
					<div className="sticky left-0 z-10 flex h-[188px] w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-clr-yellow-grad text-clr-white">
						<FaRepeat className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Ongoing</p>
					</div>
				)}
				{status === 'Postponed' && (
					<div className="sticky left-0 z-10 flex h-[188px] w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-clr-red-grad text-clr-white">
						<FaRegStopCircle className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Postponed</p>
					</div>
				)}
				{projects?.map(
					(project, i) =>
						project.status === status && (
							<ProjectOverview key={project._id} project={project} i={i} />
						)
				)}
				{isEmpty && (
					<div className="my-auto flex flex-col items-center gap-3 opacity-30">
						<img
							src="/errors/empty-list.png"
							alt="empty list"
							className="w-12"
						/>
						<p>No projects were found.</p>
					</div>
				)}
			</div>
		</section>
	)
}

export default UserSlider
