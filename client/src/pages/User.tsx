import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import toast, { Toaster } from 'react-hot-toast'
import { FaAngular, FaCrown, FaReact, FaShare, FaVuejs } from 'react-icons/fa'
import { PiGithubLogoFill } from 'react-icons/pi'
import { RiSvelteFill, RiVerifiedBadgeFill } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'
import { fetchUser, setAdminReq } from '../features/user/userSlice'
import UserSlider from '../features/user/UserSlider'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { updateAdminStatus } from '../services/apiUser'
import Image from '../ui/Image'
import { ToastCopy, toastReset } from '../ui/ToastElements'
import WebLoader from '../ui/WebLoader'

const User = () => {
	const { pathname } = useLocation()
	const [loading, setLoading] = useState(false)
	const [cookies] = useCookies(['jwt'])
	const { status, user, guestUser, error } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const url = pathname.split('/')[2]
	const {
		_id: userId,
		fullname,
		username,
		avatar,
		framework,
		github,
		email,
		role,
		admin_status
	} = guestUser || {}

	useEffect(() => {
		dispatch(fetchUser(pathname.split('/')[2] as string))

		return () => toast.dismiss()
	}, [pathname, dispatch])

	const handleReq = async () => {
		setLoading(true)
		await updateAdminStatus('pending', userId as string, cookies.jwt)
		setLoading(false)
		dispatch(setAdminReq('pending'))
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(`https://www.vercel.app/users/${url}`)
		toast(<ToastCopy msg="Link copied to clipboard!" />, toastReset)
	}

	if (status === 'loading') return <WebLoader />

	if (status === 'succeed')
		return (
			<main className="smooth-rendering mb-16 mt-12">
				<section className="container -mb-8 grid grid-cols-3 items-start">
					<div className="flex gap-3">
						<p
							className={`flex w-max items-center gap-2 rounded px-2 py-1 text-sm ${framework === 'React' && 'bg-clr-primary'} ${framework === 'Vuejs' && 'bg-clr-green'} ${framework === 'Angular' && 'bg-rose-700'} ${framework === 'Svelte' && 'bg-orange-600'} `}>
							{framework === 'React' && <FaReact />}
							{framework === 'Vuejs' && <FaVuejs />}
							{framework === 'Angular' && <FaAngular />}
							{framework === 'Svelte' && <RiSvelteFill />}
							{framework}
						</p>
						<a
							href={github || '#'}
							target="_blank"
							className="flex w-max items-center gap-2 rounded bg-clr-gray-dark px-2 py-1 text-sm">
							<PiGithubLogoFill /> Github
						</a>
					</div>
					<div className="flex flex-col items-center gap-4 justify-self-center">
						<Image
							src={avatar as string}
							alt={username as string}
							className="size-28 rounded-full"
						/>
						<div className="text-center text-sm">
							<p className="mb-1.5 text-2xl font-medium">{fullname}</p>
							<p className="mb-1">{email}</p>
							<p className="flex items-center justify-center">
								{role === 'User' ? (
									<RiVerifiedBadgeFill className="mr-1.5 text-clr-primary" />
								) : (
									<FaCrown className="mr-1.5 text-clr-yellow" />
								)}
								{role}
								&nbsp;• {username}
							</p>
						</div>
					</div>
					<div className="flex gap-3 justify-self-end">
						{user?._id === guestUser?._id && (
							<div>
								{admin_status === 'idle' && (
									<button
										className="flex w-max items-center gap-2 rounded bg-clr-primary px-2 py-1 text-sm duration-300 active:bg-clr-primary-shades disabled:cursor-wait disabled:opacity-80"
										onClick={handleReq}
										disabled={loading}>
										Request for admin?
									</button>
								)}
								{admin_status === 'pending' && (
									<p className="flex w-max items-center gap-2 rounded bg-clr-white px-2 py-1 font-heading text-sm font-semibold italic text-clr-gray-dark">
										Request is pending....
									</p>
								)}
								{admin_status === 'rejected' && (
									<p className="flex w-max items-center gap-2 rounded bg-red-100 px-2 py-1 text-sm font-medium text-clr-red">
										Request rejected!
									</p>
								)}
							</div>
						)}
						<button
							className="flex w-max items-center gap-2 rounded bg-clr-gray-grad px-2 py-2 text-sm"
							onClick={handleCopy}>
							<FaShare />
						</button>
					</div>
					<Toaster />
				</section>

				<UserSlider status="Completed" />
				<UserSlider status="Ongoing" />
				<UserSlider status="Postponed" />
			</main>
		)
	if (status === 'failed') return <div>error failed {error}</div>
}

export default User
