import { FaCalendarAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import ProjectQueryLink from '../features/project/ProjectQueryLink';
import ProjectDetails from '../features/project/ProjectDetails';
import { BsFillTrashFill } from 'react-icons/bs';

const Project = () => {
	const { search } = useLocation();
	const query = search.split('=')[1];

	return (
		<main className="container my-16 grid h-max grid-cols-[850px_max-content] gap-12">
			<div className="project-nav ml-5 space-x-8">
				<ProjectQueryLink to="overview" />
				<ProjectQueryLink to="features" />
				<ProjectQueryLink to="component" />
				<ProjectQueryLink to="utilities" />
				<ProjectQueryLink to="libraries" />
				<ProjectQueryLink to="pages" />
				<ProjectQueryLink to="enhancements" />
				<ProjectQueryLink to="setup" />
			</div>
			<div className="flex items-center gap-4"></div>
			<ProjectDetails query={query}>
				<div className="mb-4 grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 border-b-2 border-blue-600/20 pb-2">
					<p className="font-heading text-xl font-semibold"> Recipe Vault</p>
					<div className="w-max rounded-full bg-emerald-500 px-2 pt-[1px] text-xs font-medium">
						Completed
					</div>
					<button className="-mt-0.5 ml-2 box-content rounded-md bg-slate-50/20 p-1.5 text-sm text-yellow-400">
						<FaRegStar />
					</button>
					<p className="text-sm">
						Serial Code:&nbsp;&nbsp;&nbsp;
						<span className="rounded-md bg-cl-secondary px-2 py-1 font-medium text-cl-primary-tints">
							#LD8D6A
						</span>
					</p>
				</div>
			</ProjectDetails>
			<div>
				<div className="flex size-max flex-col gap-4 rounded-lg bg-cl-primary-grad p-6 text-sm">
					<div className="flex items-center gap-2">
						<FaStar /> Starred: 24
					</div>
					<div className="flex items-center gap-2">
						<HiUser /> Developers: 16
					</div>
					<div className="flex items-center gap-2">
						<FaCalendarAlt /> Created At: 12 June, 2024
					</div>
					<div className="mt-4 space-x-4">
						<button className="rounded-full bg-cl-white px-3 py-0.5 font-medium text-cl-primary">
							Star
						</button>
						<button className="rounded-full bg-cl-white px-3 py-0.5 font-medium text-cl-primary">
							Join As a Developer
						</button>
					</div>
				</div>
				<div className="mt-6 flex items-center justify-between rounded-full bg-cl-gray-grad p-3 text-sm">
					<button className="rounded-full bg-gradient-to-b from-red-600 to-red-800 px-2 py-1">
						Delete Project
					</button>
					<select
						className="rounded-full bg-cl-gray-light px-2 py-1 focus:outline-none disabled:cursor-not-allowed"
						disabled>
						<option value="">Completed</option>
						<option value="">Ongoing</option>
						<option value="">Postponed</option>
					</select>
				</div>
			</div>
		</main>
	);
};

export default Project;
