import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WebError from '../ui/WebError'

const NotFound = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/404', { replace: true })
	}, [navigate])

	return (
		<WebError
			code="404"
			msg="Sorry, we couldn't find the page you're looking for. Please check the URL or contact support for assistance."
			btn="reload"
		/>
	)
}

export default NotFound
