import { Project } from './projectTypes'

interface User {
	_id?: string
	fullname?: string
	username: string
	avatar: string
	framework?: string
	github?: string
	projects?: Project[]
	email: string
	role: string
	admin_status?: string
	requested_at?: string
	accepted_at?: string
}

interface UserState {
	status: 'idle' | 'loading' | 'succeed' | 'failed'
	users: User[]
	user: User | null
	guestUser: User | null
	error: string
}

interface UpdateInfo {
	fullname?: string | null
	avatar?: string
	framework?: string
	github?: string
}

interface UpdatePassword {
	oldPassword: string
	newPassword: string
}

export type { UpdateInfo, UpdatePassword, User, UserState }
