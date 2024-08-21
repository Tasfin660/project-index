import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import UpdateInfo from '../features/user/UpdateInfo'
import UpdatePassword from '../features/user/UpdatePassword'

const Settings = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies(['jwt'])

	useEffect(() => {
		if (!cookies.jwt) navigate('/unauthorized', { replace: true })
	}, [cookies.jwt, navigate])

	return (
		<main className="container my-16 grid h-max w-max grid-cols-[repeat(2,500px)] gap-x-16 text-sm">
			<UpdateInfo />
			<UpdatePassword />
		</main>
	)
}

export default Settings
