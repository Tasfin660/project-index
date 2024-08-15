import { ReactNode } from 'react';

const ProjectDetails = ({
	query,
	children
}: {
	query: string;
	children: ReactNode;
}) => {
	return (
		<div className="w-[800px] rounded border-2 border-blue-600/20 bg-blue-900/10 p-4 leading-7">
			{children}
			{query === 'overview' && (
				<p>
					This project is a modern, responsive website designed to deliver a
					seamless user experience across devices. The website is built with
					scalability, performance, and maintainability in mind, utilizing the
					latest web technologies and best practices. It features a clean and
					intuitive user interface, making it easy for users to navigate and
					interact with the content.
				</p>
			)}
			{query === 'features' && (
				<ul className="ml-4 list-disc">
					<li>
						Responsive Design: Ensures optimal viewing experience on desktops,
						tablets, and mobile devices.
					</li>
					<li>
						SEO Optimized: Structured data and meta tags are implemented for
						better search engine visibility.
					</li>
					<li>
						Performance Optimizations: Lazy loading, minification, and caching
						strategies are used to ensure fast load times.
					</li>
					<li>
						Accessibility: Complies with accessibility standards to make the
						site usable for everyone.
					</li>
					<li>
						User Authentication: Secure login and registration system with
						session management.
					</li>
					<li>
						Dynamic Content: Supports dynamic data fetching and rendering to
						keep content up-to-date.
					</li>
				</ul>
			)}
			{query === 'component' && (
				<ul className="ml-4 list-disc">
					<li>
						Header: Includes a logo, navigation menu, and optional search bar.
					</li>
					<li>
						Footer: Contains site links, social media icons, and copyright
						information.
					</li>
					<li>
						Hero Section: A visually engaging section that introduces the site's
						primary content or purpose.
					</li>
					<li>
						Cards: Reusable components for displaying content in a structured
						format, such as products, blog posts, or services.
					</li>
					<li>
						Modal: A popup component for displaying additional content without
						navigating away from the current page.
					</li>
					<li>
						Form Elements: Customizable input fields, buttons, and validation
						for user interactions.
					</li>
				</ul>
			)}
			{query === 'utilities' && (
				<ul className="ml-4 list-disc">
					<li>
						Theming: Global styles and variables for consistent design and easy
						customization.
					</li>
					<li>
						State Management: Context API or Redux for managing global state
						across the application.
					</li>
					<li>
						Routing: React Router or a similar library for handling client-side
						navigation.
					</li>
					<li>
						API Utilities: Axios or Fetch API wrappers for making HTTP requests
						and handling responses.
					</li>
					<li>
						Error Handling: Centralized error handling for a better user
						experience and easier debugging.
					</li>
					<li>
						Testing: Utilities and configurations for unit, integration, and
						end-to-end testing.
					</li>
				</ul>
			)}
			{query === 'libraries' && (
				<ul className="ml-4 list-disc">
					<li>
						Frontend Framework: Choose a framework to build the user interface.
					</li>
					<li>
						Tailwind CSS: Utility-first CSS framework for styling components.
					</li>
					<li>Axios: For making HTTP requests to APIs.</li>
					<li>
						Frontend Router: For managing routes and navigation within the app.
					</li>
					<li>
						Mongoose: For MongoDB data modeling and interaction if using Node.js
						for the backend.
					</li>
					<li>Jest: Testing framework for unit and integration tests.</li>
				</ul>
			)}
			{query === 'pages' && (
				<ul className="ml-4 list-disc">
					<li>
						Home Page: The main landing page that introduces the website and its
						primary offerings.
					</li>
					<li>
						About Page: Information about the website, its purpose, and the team
						behind it.
					</li>
					<li>
						Services/Products Page: A detailed overview of the services or
						products offered.
					</li>
					<li>
						Contact Page: A form for users to get in touch, including contact
						details and a map.
					</li>
					<li>
						Login/Register Page: User authentication pages for account creation
						and access.
					</li>
					<li>
						Dashboard: A personalized user area for managing account settings,
						preferences, and content.
					</li>
				</ul>
			)}
			{query === 'enhancements' && (
				<ul className="ml-4 list-disc">
					<li>
						Dark Mode: A toggle option for switching between light and dark
						themes.
					</li>
					<li>
						PWA Support: Progressive Web App features for offline access and
						mobile optimization.
					</li>
					<li>
						Animations: Smooth transitions and animations to enhance user
						experience.
					</li>
					<li>
						Localization: Support for multiple languages and regional formats.
					</li>
					<li>
						Analytics Integration: Tracking user behavior and site performance
						with tools like Google Analytics.
					</li>
					<li>
						Social Media Integration: Share buttons and embedded social media
						feeds.
					</li>
				</ul>
			)}
		</div>
	);
};

export default ProjectDetails;
