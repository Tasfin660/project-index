const requestedAt = (date: string) => {
	const milliseconds = new Date().getTime() - new Date(date).getTime()
	return Math.floor(milliseconds / (1000 * 86400))
}

const formatDate = (date: string) => {
	const day = new Date(date).getDate()
	const month = new Date(date).toLocaleString('en-us', { month: 'short' })
	const year = new Date().getFullYear()

	return `${day} ${month}, ${year}`
}

const formatLength = (length: number) => {
	return length < 10 ? `0${length}` : length
}

const formatStats = (
	arrOfObj: { status: string }[] | { framework: string }[] | undefined
) => {
	const arr = arrOfObj?.map(el => Object.values(el)[0])

	const obj:
		| { React: number; Vuejs: number; Angular: number; Svelte: number }
		| { Completed: number; Ongoing: number; Postponed: number }
		| Record<string, number> = {}

	arr?.forEach(el => {
		if (obj[el as keyof typeof obj]) {
			obj[el as keyof typeof obj]++
		} else {
			obj[el as keyof typeof obj] = 1
		}
	})

	return obj
}

export { formatDate, formatLength, formatStats, requestedAt }
