import { createBrowserRouter } from 'react-router-dom'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Project from '../pages/Project'
import Projects from '../pages/Projects'
import Settings from '../pages/Settings'
import Stats from '../pages/Stats'
import Unauthorized from '../pages/Unauthorized'
import User from '../pages/User'
import Users from '../pages/Users'
import MainLayout from '../ui/layouts/MainLayout'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'users',
				element: <Users />
			},
			{
				path: 'projects/:category/all',
				element: <Projects />
			},
			{
				path: 'projects/:category/:projectId',
				element: <Project />
			},
			{
				path: 'admin',
				element: <Admin />
			},

			{
				path: 'users/:username',
				element: <User />
			},
			{
				path: 'settings',
				element: <Settings />
			},
			{
				path: 'stats',
				element: <Stats />
			},
			{
				path: 'auth/:form',
				element: <Auth />
			},
			{
				path: 'unauthorized',
				element: <Unauthorized />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
])

export default router
