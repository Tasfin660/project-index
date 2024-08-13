import { BiSolidLogInCircle } from 'react-icons/bi';
import { FaChartBar, FaUsers } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { IoHomeSharp } from 'react-icons/io5';
import { PiStackPlusFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import Searchbar from '../../features/project/Searchbar';
import Theme from '../Theme';
import { TbInfoHexagonFilled } from 'react-icons/tb';
import { MdAdminPanelSettings } from 'react-icons/md';
const MainNav = () => {
	return (
		<nav className="sticky top-0 z-[9999] border-b border-slate-300 bg-slate-950/80 backdrop-blur dark:border-slate-50/20">
			<div className="container grid h-[var(--nav-height)] grid-cols-5 items-center justify-between">
				<figure className="flex w-max flex-col items-center gap-1">
					<img src="/logo.png" alt="logo" className="w-6" />
					<figcaption className="font-heading text-sm">
						Project Index
					</figcaption>
				</figure>
				<button className="box-content w-max rounded-full border-2 border-cl-primary p-2 text-xl duration-300 hover:bg-cl-primary">
					<BiSolidLogInCircle />
				</button>
				<div className="main-nav flex w-max items-center divide-x divide-slate-50/20 overflow-hidden rounded-full bg-gradient-to-br from-cl-primary-tints to-cl-primary-shades text-cl-white">
					<NavLink
						to="/"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-cl-white active:text-cl-primary">
						<IoHomeSharp />
					</NavLink>
					<NavLink
						to="/users"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-cl-white active:text-cl-primary"
						end>
						<FaUsers />
					</NavLink>
					<NavLink
						to="/admin"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-cl-white active:text-cl-primary">
						<MdAdminPanelSettings />
					</NavLink>
					<NavLink
						to={`/users/${'60'}`}
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-cl-white active:text-cl-primary"
						end>
						<FaUser />
					</NavLink>
					<NavLink
						to={`users/${'60'}/settings`}
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-cl-white active:text-cl-primary"
						end>
						<IoMdSettings />
					</NavLink>
					<NavLink
						to="/stats"
						className="box-content px-4 py-2.5 duration-300 hover:bg-slate-50/20 active:bg-cl-white active:text-cl-primary"
						end>
						<TbInfoHexagonFilled />
					</NavLink>
				</div>
				<Theme />
				<Searchbar />
			</div>
		</nav>
	);
};

export default MainNav;
