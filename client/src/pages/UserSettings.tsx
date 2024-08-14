import { Form } from 'react-router-dom';

const UserSettings = () => {
	return (
		<Form className="container my-16 h-max w-[600px] space-y-12 text-sm">
			<div className="relative space-y-6 rounded-lg border border-cl-primary p-6">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						Fullname
					</label>
					<input
						type="text"
						placeholder="Tasfin Hasan"
						className="border-b border-slate-50/60 bg-transparent pb-0.5 focus:border-cl-primary focus:outline-none"
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						Username
					</label>
					<input
						type="text"
						placeholder="Tasfin660"
						className="border-b border-slate-50/60 bg-transparent pb-0.5 focus:border-cl-primary focus:outline-none"
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						Image Url
					</label>
					<input
						type="text"
						placeholder="https://i.imgur.com/HoKv53T.jpg"
						className="border-b border-slate-50/60 bg-transparent pb-0.5 focus:border-cl-primary focus:outline-none"
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						Choose Framework
					</label>
					<select className="border-b border-slate-50/60 bg-cl-secondary pb-0.5 focus:outline-none">
						<option value="">React</option>
						<option value="">Vuejs</option>
						<option value="">Angular</option>
						<option value="">Svelte</option>
					</select>
				</div>
				<p className="absolute -top-9 left-1/2 -translate-x-1/2 bg-cl-secondary px-2 text-cl-primary">
					User Information
				</p>
			</div>
			<div className="relative space-y-6 rounded-lg border border-cl-primary p-6">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						Email
					</label>
					<input
						type="text"
						placeholder="tasfinhasan660@gmail.com"
						className="border-b border-slate-50/60 bg-transparent pb-0.5 focus:border-cl-primary focus:outline-none"
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						Old Password
					</label>
					<input
						type="password"
						className="border-b border-slate-50/60 bg-transparent pb-0.5 focus:border-cl-primary focus:outline-none"
					/>
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="" className="font-medium text-cl-primary">
						New Password
					</label>
					<input
						type="password"
						className="border-b border-slate-50/60 bg-transparent pb-0.5 focus:border-cl-primary focus:outline-none"
					/>
				</div>
				<p className="absolute -top-9 left-1/2 -translate-x-1/2 bg-cl-secondary px-2 text-cl-primary">
					Account Information
				</p>
			</div>
			<div className="mr-4 flex justify-end gap-4">
				<button className="rounded-full bg-cl-white px-3 py-1.5 text-base font-medium text-cl-gray-dark">
					Reset
				</button>
				<button className="rounded-full bg-cl-primary px-3 py-1.5 text-base font-medium text-cl-white duration-300 hover:bg-cl-primary-shades">
					Update
				</button>
			</div>
		</Form>
	);
};

export default UserSettings;
