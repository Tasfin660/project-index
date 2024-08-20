import { FaCalendarAlt } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { formatDate, requestedAt } from '../../utils/helpers'
import { User } from '../../types/userTypes'

const AdminOverview = ({ user, status }: { user: User; status?: string }) => {
	const { username, fullname, avatar, requested_at, accepted_at } = user

	return (
		<div className="flex w-[550px] items-center gap-3 p-2 text-sm duration-300 hover:bg-blue-950/10">
			<img src={avatar} alt={fullname} className="size-16 rounded-sm" />
			<div className="space-y-0.5">
				<p>{fullname}</p>
				<p className="flex items-center gap-1">
					{status === 'pending' ? (
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
			{status === 'pending' ? (
				<div className="ml-auto space-x-4">
					<button className="rounded-full bg-clr-secondary-grad px-3 py-1.5 font-semibold text-clr-green">
						Accept
					</button>
					<button className="rounded-full bg-clr-secondary-grad px-3 py-1.5 font-semibold text-clr-red">
						Reject
					</button>
				</div>
			) : (
				<Link
					to={`/users/${username}`}
					className="ml-auto rounded-full bg-clr-secondary-grad px-3 py-1.5 font-semibold text-clr-primary">
					Check
				</Link>
			)}
		</div>
	)
}

export default AdminOverview
