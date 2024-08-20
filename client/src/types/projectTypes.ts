interface Project {
	_id: string
	title: string
	category: string
	description: string
	owner?: {
		_id: string
		fullname: string
		username: string
		avatar: string
	}
	status?: 'Completed' | 'Ongoing' | 'Postponed'
	stars?: string[]
	developers?: string[]
	created_at?: string
}

interface Stats {
	project_status: { status: string }[]
	user_frameworks: { framework: string }[]
}

interface ProjectState {
	status: 'idle' | 'loading' | 'succeed' | 'failed'
	projects: Project[]
	project: Project | null
	stats: Stats | null
	error: string
}

export type { Project, ProjectState, Stats }
