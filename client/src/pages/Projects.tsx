import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectOverview from '../features/project/ProjectOverview'
import { fetchProjects } from '../features/project/projectSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Project } from '../types/projectTypes'
import Filterbar from '../ui/Filterbar'
import WebError from '../ui/WebError'
import WebLoader from '../ui/WebLoader'

const Projects = () => {
	const { category } = useParams()
	const [filter, setFilter] = useState('all')
	const { status, projects, error } = useAppSelector(state => state.project)
	const dispatch = useAppDispatch()

	const filteredProjects =
		filter === 'all'
			? projects
			: projects.filter(project => project.status === filter)

	const handleFilter = (value: string) => {
		setFilter(value)
	}

	useEffect(() => {
		dispatch(fetchProjects(category as string))
	}, [category, dispatch])

	if (status === 'loading') return <WebLoader />

	if (status === 'succeed')
		return (
			<main className="smooth-rendering container mb-16 mt-4">
				<Filterbar res={filteredProjects.length} onFilter={handleFilter} />
				<ul className="grid grid-cols-[repeat(4,max-content)] gap-10">
					{filteredProjects.map((project: Project, i: number) => (
						<ProjectOverview key={project._id} project={project} i={i} />
					))}
				</ul>
			</main>
		)
	if (status === 'failed') {
		return <WebError code="404" msg={error} btn="reload" />
	}
}

export default Projects
