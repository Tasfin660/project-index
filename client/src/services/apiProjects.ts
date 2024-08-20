import { Project } from '../types/projectTypes'

const createProject = async (projectData: Project, token: string) => {
	try {
		const res = await fetch(`${import.meta.env.VITE_API}/projects`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(projectData)
		})
		const { status, message, data } = await res.json()
		if (status === 'fail') throw new Error(message)
		return { message, data }
	} catch (err) {
		if (err instanceof Error) return Promise.reject(err.message)
		return Promise.reject('An unknown error occurred.')
	}
}

const updateDevelopers = async (projectId: string, token: string) => {
	await fetch(`${import.meta.env.VITE_API}/projects/developers`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			projectId
		})
	})
}

const updateStars = async (projectId: string, token: string) => {
	await fetch(`${import.meta.env.VITE_API}/projects/stars`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			projectId
		})
	})
}

const deleteProject = async (projectId: string, token: string) => {
	await fetch(`${import.meta.env.VITE_API}/projects/${projectId}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}

const updateStatus = async (
	projectId: string,
	value: string,
	token: string
) => {
	await fetch(`${import.meta.env.VITE_API}/projects/status`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			projectId,
			value
		})
	})
}

export {
	createProject,
	deleteProject,
	updateDevelopers,
	updateStars,
	updateStatus
}
