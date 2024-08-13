import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import type { ProjectCategory } from '../../types/projects';

const ProjectCategory = ({ data }: { data: ProjectCategory }) => {
	const { title, description, image } = data;
	const link = title.split(' ').join('-').toLowerCase();

	return (
		<div className="rounded-lg border border-slate-50/10 bg-gradient-to-b from-slate-800/80 to-slate-900 p-6 duration-300 hover:border-cl-primary-shades">
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
			<h2 className="mb-1 mt-6 cursor-context-menu font-heading text-xl font-bold">
				{title}
			</h2>
			<p className="line-clamp-2 cursor-context-menu text-sm">{description}</p>
		</div>
	);
};

export default ProjectCategory;
