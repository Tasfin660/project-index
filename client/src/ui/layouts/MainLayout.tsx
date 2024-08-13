import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import MainNav from './MainNav';

const MainLayout = () => {
	return (
		<div className="grid grid-rows-[max-content,minmax(calc(100vh-var(--nav-height)),1fr),max-content] dark:bg-cl-secondary dark:text-cl-white">
			<MainNav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
