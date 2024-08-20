import { useCookies } from 'react-cookie'
import { FaCalendarAlt, FaCrown, FaLongArrowAltRight } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { TiStarFullOutline } from 'react-icons/ti'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
	deleteProject,
	updateDevelopers,
	updateStars,
	updateStatus
} from '../../services/apiProjects'
import { Project } from '../../types/projectTypes'
import Image from '../../ui/Image'
import { formatDate, formatLength } from '../../utils/helpers'
import { getUser } from '../user/userSlice'
import { setStatus, toggleDevelopersList, toggleStar } from './projectSlice'
import ProjectSlider from './ProjectSlider'
import { useState } from 'react'

const ProjectInfo = ({ project }: { project: Project }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [cookies] = useCookies(['jwt'])
	const user = useAppSelector(getUser)
	const dispatch = useAppDispatch()
	const { _id: userId } = user || {}
	const {
		_id: projectId,
		description,
		owner,
		status,
		stars,
		developers,
		created_at
	} = project || {}
	const { fullname, username, avatar } = owner || {}

	const isstars = stars?.includes(userId as string)
	const isEnrolled = developers?.includes(userId as string)
	const btnDisable = status === 'Ongoing' && owner?._id !== user?._id

	const handleJoin = async () => {
		setLoading(true)
		await updateDevelopers(projectId, cookies.jwt)
		setLoading(false)
		dispatch(toggleDevelopersList(userId))
	}

	const handleStar = async () => {
		setLoading(true)
		await updateStars(projectId, cookies.jwt)
		setLoading(false)
		dispatch(toggleStar(userId))
	}

	const handleDelete = async () => {
		setLoading(true)
		await deleteProject(projectId, cookies.jwt)
		setLoading(false)

		navigate(`/projects/${pathname.split('/')[2]}/all`, { replace: true })
	}

	const handleStatus = async (value: string) => {
		setLoading(true)
		await updateStatus(projectId, value, cookies.jwt)
		setLoading(false)
		dispatch(setStatus(value))
	}

	return (
		<section className="blue-bg space-y-4 p-4">
			<ProjectSlider />
			<div className="flex items-center gap-3 rounded bg-clr-secondary-grad p-2.5 text-sm">
				<Image
					src={avatar as string}
					alt={username as string}
					className="w-6 rounded-full"
				/>
				<span className="font-medium">{fullname}</span>
				<FaCrown className="-ml-1 text-xs text-clr-yellow" />
				<NavLink
					to={`/users/${username}`}
					className="ml-4 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-lg text-clr-primary">
					<FaLongArrowAltRight />
				</NavLink>
				<div className="ml-auto flex items-center gap-1.5 text-sm">
					<TiStarFullOutline className="text-clr-primary" />
					{formatLength(stars?.length as number)}
				</div>
				<div className="mx-3 flex items-center gap-1.5 text-sm">
					<HiUser className="text-clr-primary" />{' '}
					{formatLength(developers?.length as number)}
				</div>
				<div className="flex items-center gap-1.5 text-sm">
					<FaCalendarAlt className="text-clr-primary" />
					{formatDate(created_at as string)}
				</div>
			</div>
			<p className="text-xs">{description}</p>
			{cookies.jwt && (
				<div className="flex items-center text-sm">
					{user?.role === 'Admin' ? (
						<>
							Update:
							<select
								value={status}
								className={`ml-3 w-max rounded-full bg-clr-gray-light px-1.5 py-1 text-xs disabled:cursor-not-allowed ${loading && 'disabled:cursor-wait'}`}
								disabled={user._id !== owner?._id || loading}
								onChange={e => handleStatus(e.target.value)}>
								<option value="Completed">Completed</option>
								<option value="Ongoing">Ongoing</option>
								<option value="Postponed">Postponed</option>
							</select>
							<button
								className={`ml-auto rounded bg-clr-red-grad px-2 py-0.5 font-medium duration-300 active:opacity-80 disabled:cursor-not-allowed disabled:active:opacity-100 ${loading && 'disabled:cursor-wait disabled:opacity-80'}`}
								onClick={handleDelete}
								disabled={owner?._id !== user?._id || loading}>
								Delete
							</button>
						</>
					) : (
						<div className="mr-auto"></div>
					)}
					<button
						className={`mx-2 rounded px-2 py-0.5 font-medium duration-300 disabled:cursor-not-allowed ${isstars ? 'bg-clr-yellow text-clr-gray-dark active:opacity-80 disabled:active:opacity-100' : 'bg-yellow-500/20 text-clr-yellow active:bg-clr-yellow active:text-clr-gray-dark'} ${loading && 'disabled:cursor-wait disabled:bg-clr-yellow disabled:text-clr-gray-dark disabled:opacity-80'}`}
						onClick={handleStar}
						disabled={owner?._id === user?._id || loading}>
						{isstars ? 'Starred' : 'Star'}
					</button>
					<button
						className={`rounded px-2 py-0.5 font-semibold duration-300 active:bg-clr-primary-shades disabled:cursor-not-allowed ${
							isEnrolled
								? 'bg-clr-primary disabled:active:bg-clr-primary'
								: 'bg-sky-500/10 text-clr-primary active:text-clr-white disabled:active:bg-sky-500/10 disabled:active:text-clr-primary'
						} ${loading && 'disabled:cursor-wait disabled:bg-clr-primary-shades disabled:text-clr-white'}`}
						onClick={handleJoin}
						disabled={!btnDisable || loading}>
						{isEnrolled ? 'Leave Project' : 'Join As Developer'}
					</button>
				</div>
			)}
		</section>
	)
}

export default ProjectInfo
