import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import AdminOverview from '../features/admin/AdminOverview'
import CreateProject from '../features/project/CreateProject'
import { fetchUsers } from '../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import WebError from '../ui/WebError'
import WebLoader from '../ui/WebLoader'

const Admin = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies(['jwt'])
	const { status, user, users } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!cookies.jwt || user?.role !== 'Admin')
			navigate('/unauthorized', { replace: true })
	}, [cookies.jwt, user, navigate])

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	if (status === 'loading') return <WebLoader />

	if (status === 'succeed')
		return (
			<main className="smooth-rendering container my-16 flex items-start justify-center gap-24">
				<section className="space-y-12">
					<ul className="divide-y divide-blue-600/20">
						<li className="mb-4 text-xl font-medium">Admins</li>
						{users.map(
							user =>
								user.role === 'Admin' && (
									<AdminOverview key={user._id} user={user} />
								)
						)}
					</ul>
					<ul className="divide-y divide-blue-600/20">
						<li className="mb-4 flex w-max gap-5">
							<p className="text-xl font-medium">Pending Requests</p>
							<span className="loader--pending scale-[0.3]"></span>
						</li>
						{users.map(
							user =>
								user.admin_status?.includes('pending') && (
									<AdminOverview key={user._id} user={user} />
								)
						)}
					</ul>
				</section>
				<CreateProject />
			</main>
		)

	if (status === 'failed')
		return (
			<WebError
				code="500"
				msg="An error occurred while retrieving users data. Please try again later."
				btn="reload"
			/>
		)
}

export default Admin
