import { NavLink, useLocation } from 'react-router-dom';

const ProjectQueryLink = ({ to }: { to: string }) => {
	const { search } = useLocation();
	const isActive = search === `?details=${to}`;

	return (
		<NavLink
			to={`?details=${to}`}
			className={`project-nav relative text-sm font-medium uppercase ${isActive && 'project-nav-active'}`}>
			{to}
		</NavLink>
	);
};

export default ProjectQueryLink;
