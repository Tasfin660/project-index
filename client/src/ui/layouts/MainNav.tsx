import { useCookies } from 'react-cookie'
import { BiSolidLogInCircle } from 'react-icons/bi'
import { FaUsers, FaUserShield } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { IoMdSettings } from 'react-icons/io'
import { IoHomeSharp } from 'react-icons/io5'
import { TbInfoHexagonFilled } from 'react-icons/tb'
import { NavLink, useNavigate } from 'react-router-dom'
import Searchbar from '../../features/project/Searchbar'
import { getUser, setUser } from '../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import Theme from '../Theme'

const MainNav = () => {
	const navigate = useNavigate()
	const [cookies, , removeCookie] = useCookies(['jwt'])
	const user = useAppSelector(getUser)
	const dispatch = useAppDispatch()

	const { username, role } = user || {}

	const logout = () => {
		removeCookie('jwt', { path: '/' })
		localStorage.removeItem('user')
		dispatch(setUser(null))
		navigate('/auth/login')
	}

	return (
		<nav className="sticky top-0 z-[9999] border-b border-blue-600/20 bg-slate-950/80 backdrop-blur">
			<div className="container grid h-[var(--nav-height)] grid-cols-5 items-center justify-between">
				<div className="flex w-max flex-col items-center gap-1 font-heading text-sm">
					<img src="/logo.png" alt="logo" className="w-6" />
					Project Index
				</div>
				{cookies.jwt ? (
					<button
						className="box-content w-max rounded-full border-2 border-clr-primary p-2 text-xl duration-300 hover:bg-clr-primary"
						onClick={logout}>
						<BiSolidLogInCircle />
					</button>
				) : (
					<div></div>
				)}
				<div className="main-nav flex w-max items-center divide-x divide-slate-50/20 overflow-hidden rounded-full bg-clr-primary-grad text-clr-white">
					<NavLink
						to="/"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary">
						<IoHomeSharp />
					</NavLink>
					<NavLink
						to="users"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary"
						end>
						<FaUsers />
					</NavLink>
					<NavLink
						to={cookies.jwt && role === 'Admin' ? `admin` : `unauthorized`}
						className={({ isActive }) =>
							`box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary ${isActive && cookies.jwt && role === 'Admin' && 'active'}`
						}>
						<FaUserShield />
					</NavLink>
					<NavLink
						to={cookies.jwt ? `users/${username}` : `unauthorized`}
						className={({ isActive }) =>
							`box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary ${isActive && cookies.jwt && 'active'}`
						}
						end>
						<HiUser />
					</NavLink>
					<NavLink
						to={cookies.jwt ? `settings` : `unauthorized`}
						className={({ isActive }) =>
							`box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary ${isActive && cookies.jwt && 'active'}`
						}
						end>
						<IoMdSettings />
					</NavLink>
					<NavLink
						to="/stats"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary"
						end>
						<TbInfoHexagonFilled />
					</NavLink>
				</div>
				<Theme />
				<Searchbar />
			</div>
		</nav>
	)
}

export default MainNav
