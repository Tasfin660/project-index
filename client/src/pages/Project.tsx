import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetails from '../features/project/ProjectDetails'
import ProjectInfo from '../features/project/ProjectInfo'
import { fetchProject } from '../features/project/projectSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import type { Project } from '../types/projectTypes'
import WebError from '../ui/WebError'
import WebLoader from '../ui/WebLoader'

const Project = () => {
	const { category, projectId } = useParams()
	const { status, project, error } = useAppSelector(state => state.project)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (category && projectId) {
			dispatch(fetchProject({ category, projectId }))
		}
	}, [category, projectId, dispatch])

	if (status === 'loading') return <WebLoader />

	if (status === 'succeed')
		return (
			<main className="smooth-rendering container my-16 grid h-max grid-cols-[auto_800px] gap-8">
				<ProjectInfo project={project as Project} />
				<ProjectDetails
					title={project?.title as string}
					status={project?.status as string}
					developers={project?.developers as string[]}
				/>
			</main>
		)

	if (status === 'failed')
		return <WebError code="404" msg={error} btn="reload" />
}

export default Project
