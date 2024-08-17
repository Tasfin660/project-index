import toast, { Toaster } from 'react-hot-toast'
import { FaAngular, FaCheck, FaCrown, FaShare } from 'react-icons/fa'
import UserSlider from '../features/user/UserSlider'

const User = () => {
	const copied = () =>
		toast('Link Copied!', {
			duration: 2000,
			position: 'top-center',
			style: {
				color: 'var(--color-white)',
				backgroundColor: 'var(--color-gray-dark)',
				padding: '6px 16px'
			},
			className: 'text-sm',
			icon: <FaCheck className="ml-1 -translate-y-[1px] text-clr-green" />
		})

	return (
		<main className="mb-16 mt-12">
			<section className="container -mb-8 grid grid-cols-3">
				<div></div>
				<div className="flex flex-col items-center gap-4 justify-self-center">
					<img
						src="https://i.imgur.com/HoKv53T.jpg"
						alt=""
						className="size-28 rounded-full"
					/>
					<div className="text-center text-sm">
						<p className="mb-1.5 text-2xl font-medium">Tasfin Hasan</p>
						<p className="mb-1">tasfinhasan660@gmail.com</p>
						<p>User • Tasfin660</p>
					</div>
				</div>
				<div className="flex h-max gap-5 justify-self-end text-sm font-semibold">
					<p className="flex items-center gap-2 rounded-full bg-clr-white px-3 py-1.5 text-clr-gray-light">
						<FaCrown className="text-clr-yellow" /> Admin
					</p>
					<p className="flex items-center gap-1.5 rounded-full bg-clr-white px-3 py-1.5 text-clr-gray-dark text-red-600">
						<FaAngular className="text-base" /> Angular
					</p>
					<button
						className="rounded-full bg-clr-secondary-grad px-4"
						onClick={copied}>
						<FaShare className="text-clr-primary" />
					</button>
				</div>
				<Toaster />
			</section>
			<UserSlider type="completed" />
			<UserSlider type="ongoing" />
			<UserSlider type="postponed" />
		</main>
	)
}

export default User
