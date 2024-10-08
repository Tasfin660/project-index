import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Project, ProjectState } from '../../types/projectTypes'

export const fetchProjects = createAsyncThunk<Project[], string>(
	'projects/fetchProjects',
	async category => {
		try {
			const res = await fetch(`/api/v1/projects/${category}`)
			const { status, message, data } = await res.json()
			if (status === 'fail') throw new Error(message)
			return data
		} catch (err) {
			if (err instanceof Error) return Promise.reject(err.message)
			return Promise.reject('An unknown error occurred')
		}
	}
)

export const fetchProject = createAsyncThunk<
	Project,
	{ category: string; projectId: string }
>('projects/fetchProject', async ({ category, projectId }) => {
	try {
		const res = await fetch(`/api/v1/projects/${category}/${projectId}`)
		const { status, message, data } = await res.json()
		if (status === 'fail') throw new Error(message)
		return data
	} catch (err) {
		if (err instanceof Error) return Promise.reject(err.message)
		return Promise.reject('An unknown error occurred')
	}
})

export const fetchStats = createAsyncThunk('projects/fetchStats', async () => {
	try {
		const res = await fetch('/api/v1/projects/stats')
		const { status, message, project_status, user_frameworks } =
			await res.json()
		if (status !== 'success') throw new Error(message)
		return { project_status, user_frameworks }
	} catch (err) {
		if (err instanceof Error) return Promise.reject(err.message)
		return Promise.reject('An unknown error occurred')
	}
})

const initialState: ProjectState = {
	status: 'idle',
	projects: [],
	project: null,
	stats: null,
	error: ''
}

const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		toggleDevelopersList(state, action) {
			if (state.project?.developers?.includes(action.payload))
				state.project.developers = state.project.developers.filter(
					id => id !== action.payload
				)
			else state.project?.developers?.push(action.payload)
		},
		toggleStar(state, action) {
			if (state.project?.stars?.includes(action.payload))
				state.project.stars = state.project.stars.filter(
					id => id !== action.payload
				)
			else state.project?.stars?.push(action.payload)
		},
		setStatus(state, action) {
			if (state.project) state.project.status = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProject.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchProject.fulfilled, (state, action) => {
				state.status = 'succeed'
				state.project = action.payload
			})
			.addCase(fetchProject.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message as string
			})

		builder
			.addCase(fetchProjects.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchProjects.fulfilled, (state, action) => {
				state.status = 'succeed'
				state.projects = action.payload
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message as string
			})

		builder
			.addCase(fetchStats.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchStats.fulfilled, (state, action) => {
				state.status = 'succeed'
				state.stats = action.payload
			})
			.addCase(fetchStats.rejected, state => {
				state.status = 'failed'
			})
	}
})

export const { toggleDevelopersList, toggleStar, setStatus } =
	projectSlice.actions

export default projectSlice.reducer

export const getProjects = (state: { project: ProjectState }) =>
	state.project.projects
