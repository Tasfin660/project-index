import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Login from '../features/auth/Login'
import Register from '../features/auth/Register'

const Auth = () => {
	const { form } = useParams()
	const navigate = useNavigate()

	const x = 3

	useEffect(() => {
		if (form !== 'login' && form !== 'register') throw new Error('not-found')
		if (x > 6) navigate('/', { replace: true })
	}, [form, navigate])

	return (
		<main className="mx-auto my-36 w-[350px]">
			{form === 'login' && <Login />}
			{form === 'register' && <Register />}
		</main>
	)
}

export default Auth
