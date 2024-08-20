import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import CreateProject from '../features/project/CreateProject'
import { useAppSelector } from '../hooks/hooks'
import { getUser } from '../features/user/userSlice'

const Admin = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies(['jwt'])
	const user = useAppSelector(getUser)

	useEffect(() => {
		if (!cookies.jwt || user?.role !== 'Admin')
			navigate('/unauthorized', { replace: true })
	}, [cookies.jwt, user, navigate])

	return (
		<main className="container my-16 flex items-start justify-center gap-24">
			<section className="space-y-12">
				<div className="divide-y divide-blue-600/20">
					<p className="mb-4 text-xl font-medium">Admins</p>
					{/* <AdminOverview user={user} /> */}
				</div>
				<div className="divide-y divide-blue-600/20">
					<div className="mb-4 flex w-max gap-5">
						<p className="text-xl font-medium">Pending Requests</p>
						<span className="loader--pending scale-[0.3]"></span>
					</div>
					{/* <AdminOverview user={user} type="pending" /> */}
				</div>
			</section>
			<CreateProject />
		</main>
	)
}

export default Admin
