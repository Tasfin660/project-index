import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { FaCalendarAlt } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hooks'
import { updateAdminStatus } from '../../services/apiUser'
import { User } from '../../types/userTypes'
import { formatDate, requestedAt } from '../../utils/helpers'
import { setAdminStatus } from '../user/userSlice'

const AdminOverview = ({ user }: { user: User }) => {
	const [cookies] = useCookies(['jwt'])
	const [loading, setLoading] = useState(false)
	const dispatch = useAppDispatch()
	const {
		_id: userId,
		username,
		fullname,
		avatar,
		admin_status,
		requested_at,
		accepted_at
	} = user

	const handleReq = async (status: string) => {
		setLoading(true)
		await updateAdminStatus(status, userId as string, cookies.jwt)
		setLoading(false)
		dispatch(
			setAdminStatus({
				status,
				userId
			})
		)
	}

	return (
		<div className="flex w-[550px] items-center gap-3 p-2 text-sm duration-300 hover:bg-slate-100 dark:hover:bg-blue-950/10">
			<img src={avatar} alt={fullname} className="size-16 rounded-sm" />
			<div className="space-y-0.5">
				<p>{fullname}</p>
				<p className="flex items-center gap-1">
					{admin_status?.includes('pending') ? (
						<>
							<HiClock className="text-clr-primary" />
							{requestedAt(requested_at as string)} days passed
						</>
					) : (
						<>
							<FaCalendarAlt className="mr-0.5 -translate-y-[1px] text-xs text-clr-primary" />
							{formatDate(accepted_at as string)}
						</>
					)}
				</p>
			</div>
			{admin_status?.includes('pending--') ? (
				<p
					className={`ml-auto rounded-full bg-clr-secondary-grad px-3 py-1.5 font-semibold capitalize ${admin_status.split('--')[1] === 'accepted' ? 'text-clr-green' : 'text-clr-red'}`}>
					{admin_status.split('--')[1]}
				</p>
			) : admin_status === 'pending' ? (
				<div className="ml-auto space-x-4">
					<button
						className="rounded-full bg-slate-200 px-3 py-1.5 font-semibold text-clr-green disabled:cursor-wait disabled:opacity-80 dark:bg-transparent dark:bg-clr-secondary-grad"
						onClick={() => handleReq('accepted')}
						disabled={loading}>
						Accept
					</button>
					<button
						className="rounded-full bg-slate-200 px-3 py-1.5 font-semibold text-clr-red disabled:cursor-wait disabled:opacity-80 dark:bg-transparent dark:bg-clr-secondary-grad"
						onClick={() => handleReq('rejected')}
						disabled={loading}>
						Reject
					</button>
				</div>
			) : (
				<Link
					to={`/users/${username}`}
					className="ml-auto rounded-full bg-slate-200 px-3 py-1.5 font-semibold text-clr-primary dark:bg-transparent dark:bg-clr-secondary-grad">
					Check
				</Link>
			)}
		</div>
	)
}

export default AdminOverview
