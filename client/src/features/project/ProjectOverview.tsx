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
		<div className="shadow-main relative flex w-[330px] shrink-0 flex-col overflow-hidden rounded-lg border border-transparent bg-slate-100 p-4 duration-300 hover:border-clr-white dark:bg-transparent dark:bg-clr-secondary-grad dark:shadow-none">
			<h2 className="-mt-1.5 line-clamp-1 break-all pr-8 font-heading text-2xl font-medium">
				{title}
			</h2>
			<div className="mt-2 space-x-2 text-xs text-clr-white">
				<span
					className={`rounded-full bg-clr-${status === 'Completed' ? 'green' : status === 'Ongoing' ? 'yellow' : 'red'}-grad px-2 py-0.5`}>
					{status}
				</span>
				{isEnrolled && (
					<span className="rounded-full bg-slate-300 px-2 py-0.5 font-semibold text-clr-gray-dark dark:bg-clr-white">
						Enrolled
					</span>
				)}
			</div>
			<p className="my-4 line-clamp-3 text-xs">{description}</p>
			<div className="mt-auto flex gap-3">
				<div className="flex items-center gap-1.5 rounded-full bg-slate-200 px-2.5 py-0.5 text-sm dark:bg-slate-50/10">
					<TiStarFullOutline /> {stars?.length}
				</div>
				<div className="flex items-center gap-1.5 rounded-full bg-slate-200 px-2.5 py-0.5 text-sm dark:bg-slate-50/10">
					<HiUser /> {developers?.length}
				</div>
				<Link
					to={`/projects/${category}/${_id}?details=overview`}
					className="ml-auto flex items-center gap-1.5 rounded-full bg-slate-200 px-2.5 py-0.5 text-sm duration-300 hover:bg-slate-50/20 dark:bg-slate-50/10">
					Check <FaLongArrowAltRight />
				</Link>
			</div>
			<span className="serialclip absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-bl-2xl bg-clr-primary pb-1 font-medium text-clr-white dark:bg-clr-white dark:text-clr-gray-dark">
				{i + 1}
			</span>
		</div>
	)
}

export default ProjectOverview
