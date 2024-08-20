import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Form, useNavigate } from 'react-router-dom'

const UserSettings = () => {
	const navigate = useNavigate()
	const [cookies] = useCookies(['jwt'])

	useEffect(() => {
		if (!cookies.jwt) navigate('/unauthorized', { replace: true })
	}, [cookies.jwt, navigate])

	return (
		<Form className="container my-16 w-[600px] space-y-12 text-sm">
			<div className="relative space-y-6 rounded-lg border border-clr-primary p-6">
				<div className="space-y-1.5">
					<label htmlFor="fullname" className="font-medium text-clr-primary">
						Fullname
					</label>
					<input
						type="text"
						id="fullname"
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
						required
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
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
						required
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="image" className="font-medium text-clr-primary">
						Image Url
					</label>
					<input
						type="text"
						id="username"
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
						required
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="framework" className="font-medium text-clr-primary">
						Choose Framework
					</label>
					<select
						id="framework"
						className="border-b border-slate-50/60 bg-clr-secondary pb-0.5">
						<option value="">React</option>
						<option value="">Vuejs</option>
						<option value="">Angular</option>
						<option value="">Svelte</option>
					</select>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="image" className="font-medium text-clr-primary">
						Github Link
					</label>
					<input
						type="text"
						id="github"
						placeholder=""
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
						required
					/>
				</div>
				<p className="absolute -top-9 left-1/2 -translate-x-1/2 bg-clr-secondary px-2 text-clr-primary">
					User Information
				</p>
			</div>
			<div className="relative space-y-6 rounded-lg border border-clr-primary p-6">
				<div className="space-y-1.5">
					<label htmlFor="" className="font-medium text-clr-primary">
						Email
					</label>
					<input
						type="text"
						placeholder="tasfinhasan660@gmail.com"
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="" className="font-medium text-clr-primary">
						Old Password
					</label>
					<input
						type="password"
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
					/>
				</div>
				<div className="space-y-1.5">
					<label htmlFor="" className="font-medium text-clr-primary">
						New Password
					</label>
					<input
						type="password"
						className="border-b border-slate-50/60 pb-0.5 focus:border-clr-primary"
					/>
				</div>
				<p className="absolute -top-9 left-1/2 -translate-x-1/2 bg-clr-secondary px-2 text-clr-primary">
					Account Information
				</p>
			</div>
			<div className="mr-4 flex justify-end gap-4">
				<button className="rounded-full bg-clr-white px-3 py-1 text-base font-medium text-clr-gray-dark">
					Reset
				</button>
				<button className="rounded-full bg-clr-primary-grad px-3 py-1 text-base text-clr-white duration-300 hover:bg-clr-primary-shades">
					Update
				</button>
			</div>
		</Form>
	)
}

export default UserSettings
