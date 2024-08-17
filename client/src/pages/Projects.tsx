import ProjectOverview from '../features/project/ProjectOverview'
import Filterbar from '../ui/Filterbar'

const Projects = () => {
	return (
		<main className="container mb-16 mt-4">
			<Filterbar />
			<main className="grid grid-cols-[repeat(4,max-content)] gap-10">
				<ProjectOverview />
				<ProjectOverview />
			</main>
		</main>
	)
}

export default Projects
