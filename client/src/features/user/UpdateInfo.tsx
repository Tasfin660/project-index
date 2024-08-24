import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { updateInfo } from '../../services/apiUser'
import type { UpdateInfo } from '../../types/userTypes'
import {
	ToastError,
	ToastLoading,
	toastReset,
	ToastSuccess
} from '../../ui/ToastElements'
import { getUser, setUserInfo } from './userSlice'

const schema = yup.object().shape({
	fullname: yup
		.string()
		.trim()
		.nullable()
		.transform((o, c) => (o === '' ? null : c))
		.min(5)
		.max(32),
	avatar: yup.string().trim().url('Image must be a valid URL'),
	framework: yup.string(),
	github: yup.string().trim().url()
})

const UpdateInfo = () => {
	const [cookies] = useCookies(['jwt'])
	const user = useAppSelector(getUser)
	const dispatch = useAppDispatch()
	const {
		register: reg,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema)
	})

	const { fullname, username, avatar, framework, github, email } = user || {}

	const onSubmit = async (data: UpdateInfo) => {
		toast.dismiss()
		await toast.promise(
			updateInfo(data, cookies.jwt),
			{
				loading: <ToastLoading msg="Updating..." />,
				success: ({ message }) => <ToastSuccess msg={message} />,
				error: err => <ToastError err={err} />
			},
			toastReset
		)
		dispatch(setUserInfo(data))
	}

	useEffect(() => {
		Object.keys(errors).length > 0 &&
			toast(
				<ToastError
					err={
						(errors?.fullname?.message as string) ||
						(errors?.avatar?.message as string) ||
						(errors?.framework?.message as string) ||
						(errors?.github?.message as string)
					}
				/>,
				toastReset
			)
	}, [errors])

	return (
		<form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
			<div className="relative space-y-6 rounded-lg border border-clr-primary p-6">
				<div className="space-y-1.5">
					<label htmlFor="fullname" className="font-medium text-clr-primary">
						Fullname
					</label>
					<input
						type="text"
						id="fullname"
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary"
						{...reg('fullname')}
						defaultValue={fullname}
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="username" className="font-medium text-clr-primary">
						Username
					</label>
					<input
						type="text"
						id="username"
						placeholder="Tasfin660"
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary disabled:text-slate-200/70"
						defaultValue={username}
						disabled
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="email" className="font-medium text-clr-primary">
						Email
					</label>
					<input
						id="email"
						type="text"
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary disabled:text-slate-200/70"
						defaultValue={email}
						disabled
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="avatar" className="font-medium text-clr-primary">
						Image Url
					</label>
					<input
						type="text"
						id="image"
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary"
						{...reg('avatar')}
						defaultValue={avatar}
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="framework" className="font-medium text-clr-primary">
						Choose Framework
					</label>
					<select
						id="framework"
						className="border-b border-sky-500/20 bg-clr-secondary pb-0.5"
						{...reg('framework')}
						defaultValue={framework}>
						<option value="React">React</option>
						<option value="Vuejs">Vuejs</option>
						<option value="Angular">Angular</option>
						<option value="Svelte">Svelte</option>
					</select>
				</div>
				<div className="space-y-1.5 pb-0.5">
					<label htmlFor="github" className="font-medium text-clr-primary">
						Github Link
					</label>
					<input
						type="text"
						id="github"
						placeholder=""
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary"
						{...reg('github')}
						defaultValue={github}
					/>
				</div>
				<p className="absolute -top-9 left-1/2 -translate-x-1/2 bg-clr-secondary px-2 text-clr-primary">
					User Information
				</p>
			</div>
			<div className="flex items-center justify-center">
				<button
					type="button"
					className="rounded-l-full bg-clr-white px-2.5 py-1.5 text-sm font-medium text-clr-gray-dark duration-300 active:bg-slate-300"
					onClick={() => reset()}>
					Reset
				</button>
				<button className="rounded-r-full bg-clr-primary px-2.5 py-1.5 text-sm text-clr-white duration-300 active:bg-clr-primary-shades">
					Update
				</button>
				<Toaster />
			</div>
		</form>
	)
}

export default UpdateInfo
