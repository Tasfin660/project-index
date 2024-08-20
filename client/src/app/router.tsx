import { createBrowserRouter } from 'react-router-dom'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Projects from '../pages/Projects'
import Stats from '../pages/Stats'
import User from '../pages/User'
import Users from '../pages/Users'
import UserSettings from '../pages/UserSettings'
import MainLayout from '../ui/layouts/MainLayout'
import Unauthorized from '../pages/Unauthorized'
import NotFound from '../pages/NotFound'

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
				element: <UserSettings />
			},
			{
				path: '/stats',
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
