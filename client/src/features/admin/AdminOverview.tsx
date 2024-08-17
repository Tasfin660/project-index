import { FaCalendarAlt } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { acceptedAt, requestedAt } from '../../utils/helpers'

interface User {
	_id: string
	fullname: string
	avatar: string
	requested_at: string
	accepted_at: string
}

const AdminOverview = ({ user, type }: { user: User; type?: string }) => {
	const { _id: userId, fullname, avatar, requested_at, accepted_at } = user

	return (
		<div className="flex w-[550px] items-center gap-3 p-2 text-sm duration-300 hover:bg-blue-950/10">
			<img src={avatar} alt={fullname} className="size-16 rounded-sm" />
			<div className="space-y-0.5">
				<p>{fullname}</p>
				<p className="flex items-center gap-1">
					{type === 'pending' ? (
						<>
							<HiClock className="text-clr-primary" />
							{requestedAt(requested_at)} days passed
						</>
					) : (
						<>
							<FaCalendarAlt className="text-clr-primary mr-0.5 -translate-y-[1px] text-xs" />
							{acceptedAt(accepted_at)}
						</>
					)}
				</p>
			</div>
			{type === 'pending' ? (
				<div className="ml-auto space-x-4">
					<button className="bg-clr-secondary-grad text-clr-green rounded-full px-3 py-1.5 font-semibold">
						Accept
					</button>
					<button className="bg-clr-secondary-grad text-clr-red rounded-full px-3 py-1.5 font-semibold">
						Reject
					</button>
				</div>
			) : (
				<Link
					to={`/users/${userId}`}
					className="bg-clr-secondary-grad text-clr-primary ml-auto rounded-full px-3 py-1.5 font-semibold">
					Check
				</Link>
			)}
		</div>
	)
}

export default AdminOverview
