import { LoginData, RegisterData } from '../types/authTypes'

const register = async (userData: RegisterData) => {
	try {
		const res = await fetch('/api/v1/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
		const { status, message } = await res.json()
		if (status === 'fail') throw new Error(message)
		return { message }
	} catch (err) {
		if (err instanceof Error) return Promise.reject(err.message)
		return Promise.reject('An unknown error occurred.')
	}
}

const login = async (userData: LoginData) => {
	try {
		const res = await fetch(`/api/v1/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
		const { status, message, token, data } = await res.json()
		if (status === 'fail') throw new Error(message)
		return { message, token, data }
	} catch (err) {
		if (err instanceof Error) return Promise.reject(err.message)
		return Promise.reject('An unknown error occurred.')
	}
}

export { login, register }
