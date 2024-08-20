import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../features/user/userSlice'
import UserSlider from '../features/user/UserSlider'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import WebLoader from '../ui/WebLoader'
import Image from '../ui/Image'

const User = () => {
	const params = useParams()
	const { status, guestUser, error } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	console.log(params)
	const {
		fullname,
		username,
		avatar,
		framework,
		projects,
		email,
		role,
		admin_status
	} = guestUser || {}

	useEffect(() => {
		dispatch(fetchUser(params.username as string))
	}, [params.username, dispatch])

	const copied = () => {}

	if (status === 'loading') return <WebLoader />

	if (status === 'succeed')
		return (
			<main className="smooth-rendering mb-16 mt-12">
				<section className="container -mb-8 grid grid-cols-3">
					<div></div>
					<div className="flex flex-col items-center gap-4 justify-self-center">
						<Image
							src={avatar as string}
							alt={username as string}
							className="size-28 rounded-full"
						/>
						<div className="text-center text-sm">
							<p className="mb-1.5 text-2xl font-medium">{fullname}</p>
							<p className="mb-1">{email}</p>
							<p>
								{role} • {username}
							</p>
						</div>
					</div>
					{/* <div className="flex h-max gap-5 justify-self-end text-sm font-semibold">
					{role === 'Admin' ? (
						<p className="flex items-center gap-2 rounded-full bg-clr-white px-3 py-1.5 text-clr-gray-light">
							<FaCrown className="text-clr-yellow" /> Admin
						</p>
					) : (
						<p className="flex items-center gap-2 rounded-full bg-clr-white px-3 py-1.5 text-clr-gray-light">
							Request for admin?
						</p>
					)}
					{framework && (
						<p className="flex items-center gap-1.5 rounded-full bg-clr-white px-3 py-1.5 text-clr-gray-dark text-red-600">
							<FaAngular className="text-base" /> {framework}
						</p>
					)}
					<button
						className="rounded-full bg-clr-secondary-grad px-4"
						onClick={copied}>
						<FaShare className="text-clr-primary" />
					</button>
				</div> */}
					<Toaster />
				</section>

				<UserSlider type="completed" />
				<UserSlider type="ongoing" />
				<UserSlider type="postponed" />
			</main>
		)
	if (status === 'failed') return <div>error failed {error}</div>
}

export default User
