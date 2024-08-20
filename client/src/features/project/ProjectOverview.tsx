import { FaLongArrowAltRight } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { TiStarFullOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { Project } from '../../types/projectTypes'
import { getUser } from '../user/userSlice'

const ProjectOverview = ({ project, i }: { project: Project; i: number }) => {
	const user = useAppSelector(getUser)
	const { _id, title, category, description, status, stars, developers } =
		project || {}

	const isEnrolled = developers?.includes(user?._id as string)

	return (
		<div className="relative w-[330px] shrink-0 rounded-lg border border-transparent bg-clr-secondary-grad p-4 duration-300 hover:border-clr-white">
			<h2 className="-mt-1.5 line-clamp-1 break-all pr-8 font-heading text-2xl font-medium">
				{title}
			</h2>
			<div className="mt-2 space-x-2 text-xs">
				<span
					className={`rounded-full bg-clr-${status === 'Completed' ? 'green' : status === 'Ongoing' ? 'yellow' : 'red'}-grad px-2 py-0.5`}>
					{status}
				</span>
				{isEnrolled && (
					<span className="rounded-full bg-clr-white px-2 py-0.5 font-semibold text-clr-gray-dark">
						Enrolled
					</span>
				)}
			</div>
			<p className="my-4 line-clamp-3 text-xs">{description}</p>
			<div className="flex gap-3">
				<div className="flex items-center gap-1.5 rounded-full bg-slate-50/10 px-2.5 py-0.5 text-sm">
					<TiStarFullOutline /> {stars?.length}
				</div>
				<div className="flex w-max items-center gap-1.5 rounded-full bg-slate-50/10 px-2.5 py-0.5 text-sm">
					<HiUser /> {developers?.length}
				</div>
				<Link
					to={`/projects/${category}/${_id}?details=overview`}
					className="ml-auto flex items-center gap-1.5 rounded-full bg-slate-50/10 px-2.5 py-0.5 text-sm duration-300 hover:bg-slate-50/20">
					Check <FaLongArrowAltRight />
				</Link>
			</div>
			<span className="serialclip absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-bl-2xl bg-clr-white pb-1 font-medium text-clr-gray-dark">
				{i + 1}
			</span>
		</div>
	)
}

export default ProjectOverview
