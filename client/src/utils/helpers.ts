const requestedAt = (date: string) => {
	const milliseconds = new Date().getTime() - new Date(date).getTime()
	return Math.floor(milliseconds / (1000 * 86400))
}

const acceptedAt = (date: string) => {
	const day = new Date(date).getDate()
	const month = new Date(date).toLocaleString('en-us', { month: 'short' })
	const year = new Date().getFullYear()

	return `${day} ${month}, ${year}`
}

export { acceptedAt, requestedAt }
