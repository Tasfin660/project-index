import { BiSolidLogInCircle } from 'react-icons/bi'
import { FaUsers, FaUserShield } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { IoMdSettings } from 'react-icons/io'
import { IoHomeSharp } from 'react-icons/io5'
import { TbInfoHexagonFilled } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import Searchbar from '../../features/project/Searchbar'
import Theme from '../Theme'

const MainNav = () => {
	return (
		<nav className="sticky top-0 z-[9999] border-b border-blue-600/20 bg-slate-950/80 backdrop-blur">
			<div className="container grid h-[var(--nav-height)] grid-cols-5 items-center justify-between">
				<div className="flex w-max flex-col items-center gap-1 font-heading text-sm">
					<img src="/logo.png" alt="logo" className="w-6" />
					Project Index
				</div>
				<button className="box-content w-max rounded-full border-2 border-clr-primary p-2 text-xl duration-300 hover:bg-clr-primary">
					<BiSolidLogInCircle />
				</button>
				<div className="main-nav flex w-max items-center divide-x divide-slate-50/20 overflow-hidden rounded-full bg-clr-primary-grad text-clr-white">
					<NavLink
						to="/"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary">
						<IoHomeSharp />
					</NavLink>
					<NavLink
						to="/users"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary"
						end>
						<FaUsers />
					</NavLink>
					<NavLink
						to="/admin"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary">
						<FaUserShield />
					</NavLink>
					<NavLink
						to={`/users/${'60'}`}
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary"
						end>
						<HiUser />
					</NavLink>
					<NavLink
						to={`users/${'60'}/settings`}
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-clr-white active:text-clr-primary"
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
