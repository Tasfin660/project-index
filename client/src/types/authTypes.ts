interface RegisterData {
	username: string
	avatar: string
	email: string
	password: string
}

interface LoginData {
	email: string
	password: string
}

export type { LoginData, RegisterData }
