import ProjectDetails from '../features/project/ProjectDetails'
import ProjectInfo from '../features/project/ProjectInfo'

const Project = () => {
	return (
		<main className="container my-16 grid h-max grid-cols-[auto_800px] gap-8">
			<ProjectInfo />
			<ProjectDetails />
		</main>
	)
}

export default Project
