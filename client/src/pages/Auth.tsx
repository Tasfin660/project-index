import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Login from '../features/auth/Login'
import Register from '../features/auth/Register'
import { useCookies } from 'react-cookie'

const Auth = () => {
	const { form } = useParams()
	const [cookies] = useCookies(['jwt'])
	const navigate = useNavigate()

	useEffect(() => {
		if (form !== 'login' && form !== 'register') throw new Error('not-found')
		if (cookies.jwt) navigate('/', { replace: true })
	}, [form, cookies.jwt, navigate])

	return (
		<main className="mx-auto my-16 w-[350px]">
			{form === 'login' && <Login />}
			{form === 'register' && <Register />}
		</main>
	)
}

export default Auth
