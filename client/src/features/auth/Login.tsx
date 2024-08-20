import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { login } from '../../services/apiAuth'
import type { LoginData } from '../../types/authTypes'
import {
	ToastError,
	ToastLoading,
	toastReset,
	ToastSuccess
} from '../../ui/ToastElements'
import { setUser } from '../user/userSlice'

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup
		.string()
		.min(8)
		.matches(/\d/, 'Password must contain number')
		.required()
})

const Login = () => {
	const navigate = useNavigate()
	const [cookies, setCookie] = useCookies(['jwt'])
	const dispatch = useDispatch()
	const {
		register: reg,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ resolver: yupResolver(schema) })

	const onSubmit = async (data: LoginData) => {
		toast.dismiss()
		const result = await toast.promise(
			login(data),
			{
				loading: <ToastLoading msg="Logging..." />,
				success: ({ message }) => <ToastSuccess msg={message} />,
				error: err => <ToastError err={err} />
			},
			toastReset
		)
		const { token, data: user } = result
		setCookie('jwt', token, { path: '/' })
		localStorage.setItem('user', JSON.stringify(user))
		dispatch(setUser(user))
		reset()
	}

	useEffect(() => {
		Object.keys(errors).length > 0 &&
			toast(
				<ToastError
					err={
						(errors?.email?.message as string) ||
						(errors?.password?.message as string)
					}
				/>,
				toastReset
			)
	}, [errors])

	useEffect(() => {
		if (cookies.jwt)
			navigate(
				`/users/${JSON.parse(localStorage.getItem('user') as string)?.username}`,
				{
					replace: true
				}
			)
	}, [cookies.jwt, navigate])

	return (
		<form
			className="auth-form flex flex-col items-center gap-6 rounded-lg p-6"
			onSubmit={handleSubmit(onSubmit)}>
			<p className="font-heading text-2xl font-bold">
				Login in to your account
			</p>
			<input
				type="text"
				placeholder="Email"
				className="rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10 focus:border-clr-white"
				{...reg('email')}
			/>
			<input
				type="password"
				placeholder="Password"
				className="rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10 focus:border-clr-white"
				{...reg('password')}
			/>
			<button className="w-full rounded-full bg-clr-primary-grad py-1.5 text-lg font-medium duration-300 hover:bg-clr-primary-shades">
				Log In
			</button>
			<p className="text-sm">
				Don't have an account?&nbsp;
				<Link to="/auth/register" className="font-medium">
					Register
				</Link>
			</p>
			<Toaster />
		</form>
	)
}

export default Login
