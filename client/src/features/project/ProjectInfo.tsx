import { FaCalendarAlt, FaCrown, FaLongArrowAltRight } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { TiStarFullOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import ProjectSlider from './ProjectSlider'

const ProjectInfo = () => {
	return (
		<section className="blue-bg space-y-4 p-4">
			<ProjectSlider />
			<div className="flex items-center gap-3 rounded bg-clr-secondary-grad p-2.5 text-sm">
				<img
					src="https://i.imgur.com/HoKv53T.jpg"
					alt=""
					className="w-6 rounded-full"
				/>
				<span className="font-medium">Tasfin Hasan</span>
				<FaCrown className="-ml-1 text-xs text-clr-yellow" />
				<NavLink
					to=""
					className="ml-4 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-lg text-clr-primary">
					<FaLongArrowAltRight />
				</NavLink>
				<div className="ml-auto flex items-center gap-1.5 text-sm">
					<TiStarFullOutline className="text-clr-primary" /> 05
				</div>
				<div className="mx-3 flex items-center gap-1.5 text-sm">
					<HiUser className="text-clr-primary" /> 18
				</div>
				<div className="flex items-center gap-1.5 text-sm">
					<FaCalendarAlt className="text-clr-primary" /> 5 May, 2015
				</div>
			</div>
			<p className="text-xs">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, suscipit
				facere tenetur possimusa spernatur illo assumenda a amet consequatur
				ipsum sunt vel, eum voluptatibus atque magnam Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Non, suscipit facere tenetur
			</p>
			<div className="flex items-center text-sm">
				Update:
				<select className="ml-3 w-max rounded-full bg-clr-gray-dark px-1.5 py-1 text-xs">
					<option value="">Completed</option>
					<option value="">Ongoing</option>
					<option value="">Postponed</option>
				</select>
				<button className="ml-auto rounded bg-clr-red-grad px-2 py-0.5 font-medium">
					Delete
				</button>
				<button className="mx-2 rounded bg-yellow-500/20 px-2 py-0.5 font-semibold text-clr-yellow">
					Star
				</button>
				<button className="rounded bg-sky-500/10 px-2 py-0.5 font-semibold text-clr-primary">
					Join As Developer
				</button>
			</div>
		</section>
	)
}

export default ProjectInfo
