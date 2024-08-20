import { getUser } from '../features/user/userSlice'
import { useAppSelector } from '../hooks/hooks'
import WebError from '../ui/WebError'

const Unauthorized = () => {
	const user = useAppSelector(getUser)

	if (user?.role === 'User')
		return (
			<WebError
				code="401"
				msg="You must be an Admin to access this page. If you're not an Admin, you can request to be one."
			/>
		)

	return (
		<WebError
			code="401"
			msg="You need to be logged in to view this page. Please log in or create an account to continue."
			btn="login"
		/>
	)
}

export default Unauthorized
