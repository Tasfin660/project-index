import ProjectOverview from '../features/project/ProjectOverview';

const Projects = () => {
	return (
		<main className="container grid h-max grid-cols-4 justify-center gap-10 pt-4">
			<div className="col-span-4 -mb-2 grid grid-cols-[auto_1fr_auto] gap-4 rounded-md bg-cl-gray-light px-6 py-3">
				<span>Filter By:</span>
				<select className="w-max rounded-full bg-cl-gray-dark px-2 py-1 text-sm focus:outline-none">
					<option value="all">All Projects</option>
					<option value="javascript">Completed</option>
					<option value="react">Ongoing</option>
					<option value="vuejs">Postponed</option>
				</select>
				<span className="">Results: 08</span>
			</div>
			<ProjectOverview />
			<ProjectOverview />
			<ProjectOverview />
			<ProjectOverview />
			<ProjectOverview />
		</main>
	);
};

export default Projects;
