import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { updatePassword } from '../../services/apiUser'
import type { UpdatePassword } from '../../types/userTypes'
import {
	ToastError,
	ToastLoading,
	toastReset,
	ToastSuccess
} from '../../ui/ToastElements'

const schema = yup.object().shape({
	oldPassword: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.max(32, 'Password must be at most 32 characters')
		.matches(/\d/, 'Password must contain number')
		.required(),
	newPassword: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.max(32, 'Password must be at most 32 characters')
		.matches(/\d/, 'Password must contain number')
		.notOneOf(
			[yup.ref('oldPassword'), null],
			'New password cannot be the same as the old password'
		)
		.required()
})

const UpdatePassword = () => {
	const [cookies] = useCookies(['jwt'])
	const {
		register: reg,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (data: UpdatePassword) => {
		toast.dismiss()
		await toast.promise(
			updatePassword(data, cookies.jwt),
			{
				loading: <ToastLoading msg="Updating..." />,
				success: ({ message }) => <ToastSuccess msg={message} />,
				error: err => <ToastError err={err} />
			},
			toastReset
		)
		reset()
	}

	useEffect(() => {
		Object.keys(errors).length > 0 &&
			toast(
				<ToastError
					err={
						(errors?.oldPassword?.message as string) ||
						(errors?.newPassword?.message as string)
					}
				/>,
				toastReset
			)
	}, [errors])

	return (
		<form
			className="flex flex-col items-center gap-8"
			onSubmit={handleSubmit(onSubmit)}>
			<div className="relative w-full space-y-6 rounded-lg border border-clr-primary p-6">
				<div className="space-y-1.5">
					<label htmlFor="oldPassword" className="font-medium text-clr-primary">
						Old Password
					</label>
					<input
						id="oldPassword"
						type="password"
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary"
						{...reg('oldPassword')}
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="newPassword" className="font-medium text-clr-primary">
						New Password
					</label>
					<input
						id="newPassword"
						type="password"
						className="border-b border-sky-500/20 pb-0.5 focus:border-clr-primary"
						{...reg('newPassword')}
					/>
				</div>
				<p className="absolute -top-9 left-1/2 -translate-x-1/2 bg-clr-white px-2 text-clr-primary dark:bg-clr-secondary">
					Update Password
				</p>
			</div>
			<button className="rounded-full bg-clr-primary px-2.5 py-1.5 text-sm text-clr-white duration-300 active:bg-clr-primary-shades">
				Update Password
			</button>
		</form>
	)
}

export default UpdatePassword
