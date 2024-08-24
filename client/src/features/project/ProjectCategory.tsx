import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface ProjectCategory {
	id: string
	title: string
	description: string
	image: string
}

const ProjectCategory = ({ data }: { data: ProjectCategory }) => {
	const { title, description, image } = data
	const link = title.split(' ').join('-').toLowerCase()

	return (
		<div className="cursor-context-menu rounded-lg border border-slate-50/10 bg-gradient-to-b from-slate-800/80 to-slate-900 p-6 duration-300 hover:border-clr-primary-shades">
			<div className="flex items-start justify-between">
				<img
					src={`/project-category/${image}.png`}
					alt={image}
					className="size-16"
				/>
				<Link
					to={`/projects/${link}/all`}
					className="mr-1 mt-2 box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10">
					<MdKeyboardArrowRight />
				</Link>
			</div>
			<h2 className="mb-1 mt-6 font-heading text-xl font-bold">{title}</h2>
			<p className="line-clamp-2 text-sm">{description}</p>
		</div>
	)
}

export default ProjectCategory
