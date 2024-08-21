import { UpdateInfo, UpdatePassword } from '../types/userTypes'

const updateAdminStatus = async (
	status: string,
	userId: string,
	token: string
) => {
	await fetch(`${import.meta.env.VITE_API}/users/admin-status`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			status,
			userId
		})
	})
}

const updateInfo = async (data: UpdateInfo, token: string) => {
	const res = await fetch(`${import.meta.env.VITE_API}/users/info`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(data)
	})
	const { message } = await res.json()
	return { message }
}

const updatePassword = async (data: UpdatePassword, token: string) => {
	try {
		const res = await fetch(`${import.meta.env.VITE_API}/users/password`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				data
			})
		})
		const { status, message } = await res.json()
		if (status === 'fail') throw new Error(message)
		return { message }
	} catch (err) {
		if (err instanceof Error) return Promise.reject(err.message)
		return Promise.reject('An unknown error occurred.')
	}
}

export { updateAdminStatus, updateInfo, updatePassword }
