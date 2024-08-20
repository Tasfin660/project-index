import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { register } from '../../services/apiAuth'
import type { RegisterData } from '../../types/authTypes'
import {
	ToastError,
	ToastLoading,
	toastReset,
	ToastSuccess
} from '../../ui/ToastElements'

const schema = yup.object().shape({
	username: yup
		.string()
		.min(3)
		.max(24)
		.matches(/^\S*$/, 'Username should not contain spaces')
		.required(),
	email: yup.string().email().required(),
	avatar: yup.string().url().required(),
	password: yup
		.string()
		.min(8)
		.max(32)
		.matches(/\d/, 'Password must contain number')
		.required()
})

const Register = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies(['jwt'])
	const {
		register: reg,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ resolver: yupResolver(schema) })

	const onSubmit = async (data: RegisterData) => {
		toast.dismiss()
		await toast.promise(
			register(data),
			{
				loading: <ToastLoading msg="Registering..." />,
				success: ({ message }) => <ToastSuccess msg={message} />,
				error: err => <ToastError err={err} />
			},
			toastReset
		)
		reset()
	}

	useEffect(() => {
		if (cookies.jwt)
			navigate(
				`/users/${JSON.parse(localStorage.getItem('user') || '')?.username}`,
				{
					replace: true
				}
			)
	}, [cookies.jwt, navigate])

	useEffect(() => {
		Object.keys(errors).length > 0 &&
			toast(
				<ToastError
					err={
						(errors?.username?.message as string) ||
						(errors?.avatar?.message as string) ||
						(errors?.email?.message as string) ||
						(errors?.password?.message as string)
					}
				/>,
				toastReset
			)
	}, [errors])

	return (
		<form
			className="auth-form flex flex-col items-center gap-6 rounded-lg p-6"
			onSubmit={handleSubmit(onSubmit)}>
			<p className="font-heading text-2xl font-bold">Registers as developer</p>
			<input
				type="text"
				placeholder="Username"
				className="rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10 focus:border-clr-white"
				{...reg('username')}
			/>
			<input
				type="text"
				placeholder="Avatar"
				className="rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10 focus:border-clr-white"
				{...reg('avatar')}
			/>
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
			<button className="w-full rounded-full bg-clr-primary-grad py-1.5 text-lg font-medium duration-300">
				Register
			</button>
			<p className="text-sm">
				Already have an account?&nbsp;
				<Link to="/auth/login" className="font-medium">
					Login
				</Link>
			</p>
			<Toaster />
		</form>
	)
}

export default Register
