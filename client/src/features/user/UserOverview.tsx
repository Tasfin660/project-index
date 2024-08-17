import { FaEye } from 'react-icons/fa'
import { PiGithubLogoFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const UserOverview = () => {
	return (
		<div className="grid grid-cols-[180px_1fr] rounded-lg bg-clr-primary-grad px-3 pb-3 pt-[14px]">
			<div className="flex flex-col items-center gap-2">
				<img
					src="https://randomuser.me/api/portraits/men/47.jpg"
					alt=""
					className="size-[80px] rounded-full shadow-lg"
				/>
				<p className="font-medium">Stella Chapman</p>
			</div>
			<div className="flex w-max flex-col items-center justify-center gap-4 justify-self-center rounded-md bg-slate-50/20 px-[14px] shadow-lg">
				<a href="" className="box-content block text-xl text-clr-white">
					<PiGithubLogoFill />
				</a>
				<Link to="/users/tasfin" className="box-content text-xl text-clr-white">
					<FaEye />
				</Link>
			</div>
		</div>
	)
}

export default UserOverview
