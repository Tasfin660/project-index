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

export { createProject }
