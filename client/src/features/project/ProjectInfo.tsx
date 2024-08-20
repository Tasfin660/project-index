import { useCookies } from 'react-cookie'
import { FaCalendarAlt, FaCrown, FaLongArrowAltRight } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { TiStarFullOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import ProjectSlider from './ProjectSlider'
import { Project } from '../../types/projectTypes'
import { formatDate, formatLength } from '../../utils/helpers'

const ProjectInfo = ({ project }: { project: Project }) => {
	const [cookies] = useCookies(['jwt'])
	const { description, owner, starred, developers, created_at } = project || {}
	const { fullname, username, avatar } = owner || {}

	return (
		<section className="blue-bg space-y-4 p-4">
			<ProjectSlider />
			<div className="flex items-center gap-3 rounded bg-clr-secondary-grad p-2.5 text-sm">
				<img src={avatar} alt="" className="w-6 rounded-full" />
				<span className="font-medium">{fullname}</span>
				<FaCrown className="-ml-1 text-xs text-clr-yellow" />
				<NavLink
					to={`/users/${username}`}
					className="ml-4 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-lg text-clr-primary">
					<FaLongArrowAltRight />
				</NavLink>
				<div className="ml-auto flex items-center gap-1.5 text-sm">
					<TiStarFullOutline className="text-clr-primary" />
					{formatLength(starred?.length as number)}
				</div>
				<div className="mx-3 flex items-center gap-1.5 text-sm">
					<HiUser className="text-clr-primary" />{' '}
					{formatLength(developers?.length as number)}
				</div>
				<div className="flex items-center gap-1.5 text-sm">
					<FaCalendarAlt className="text-clr-primary" />
					{formatDate(created_at as string)}
				</div>
			</div>
			<p className="text-xs">{description}</p>
			{cookies.jwt && (
				<div className="flex items-center text-sm">
					Update:
					<select className="ml-3 w-max rounded-full bg-clr-gray-light px-1.5 py-1 text-xs">
						<option value="">Completed</option>
						<option value="">Ongoing</option>
						<option value="">Postponed</option>
					</select>
					<button className="ml-auto rounded bg-clr-red-grad px-2 py-0.5 font-medium">
						Delete
					</button>
					<button className="mx-2 rounded bg-yellow-500/20 px-2 py-0.5 font-medium text-clr-yellow">
						Star
					</button>
					<button className="rounded bg-sky-500/10 px-2 py-0.5 font-semibold text-clr-primary">
						Join As Developer
					</button>
				</div>
			)}
		</section>
	)
}

export default ProjectInfo
