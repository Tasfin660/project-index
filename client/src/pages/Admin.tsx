import { HiClock } from 'react-icons/hi2';

const Admin = () => {
	return (
		<main className="container my-16 grid size-max grid-cols-2 gap-x-24 gap-y-12">
			<section className="divide-y divide-blue-600/20">
				<div className="w-max">
					<p className="mb-4 text-xl font-medium">Admins</p>
					{/* <div className="loader--pending scale-[0.3]"></div> */}
					<div className="loader"></div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://i.imgur.com/HoKv53T.jpg"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Tasfin Hasan</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 5 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
							Check
						</button>
					</div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://img-b.udemycdn.com/user/200_H/7799204_2091_5.jpg"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Jonas Schmedtmann</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 32 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
							Check
						</button>
					</div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJpZATyVsLWb8PjLDCw5GbADIxrQZRXLT3Z-aGYVZLoFpDGYWFRsq7kWo7sZB3aJrbkI&usqp=CAU"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Aqua</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 17 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
							Check
						</button>
					</div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://masterpiecer-images.s3.yandex.net/a7a8505187f411eeb3fc5696910b1137:upscaled"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Blue Moonlight</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 12 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
							Check
						</button>
					</div>
				</div>
			</section>
			<form className="h-max rounded-lg bg-cl-primary-grad p-6">
				<h2>Add New Project</h2>
				<input type="text" placeholder="Title" />
			</form>
			<section className="divide-y divide-blue-600/20">
				<div className="w-max">
					<p className="mb-4 text-xl font-medium">Pending Requests</p>
					{/* <div className="loader--pending scale-[0.3]"></div> */}
					<div className="loader"></div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://i.imgur.com/HoKv53T.jpg"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Tasfin Hasan</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 5 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-emerald-500">
							Accept
						</button>
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-rose-600">
							Reject
						</button>
						{/* <button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
						Check
					</button> */}
					</div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://img-b.udemycdn.com/user/200_H/7799204_2091_5.jpg"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Jonas Schmedtmann</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 32 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-emerald-500">
							Accept
						</button>
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-rose-600">
							Reject
						</button>
						{/* <button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
						Check
					</button> */}
					</div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJpZATyVsLWb8PjLDCw5GbADIxrQZRXLT3Z-aGYVZLoFpDGYWFRsq7kWo7sZB3aJrbkI&usqp=CAU"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Aqua</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 17 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-emerald-500">
							Accept
						</button>
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-rose-600">
							Reject
						</button>
						{/* <button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
						Check
					</button> */}
					</div>
				</div>
				<div className="flex w-[550px] items-center gap-3 rounded-sm p-2 text-sm duration-300 hover:bg-blue-950/10">
					<img
						src="https://masterpiecer-images.s3.yandex.net/a7a8505187f411eeb3fc5696910b1137:upscaled"
						alt=""
						className="size-16 rounded-sm"
					/>
					<div className="space-y-0.5">
						<p>Blue Moonlight</p>
						<p className="flex items-center gap-1">
							<HiClock className="text-cl-primary" /> 12 Days Passed
						</p>
					</div>
					<div className="flexcol ml-auto flex gap-4">
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-emerald-500">
							Accept
						</button>
						<button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-rose-600">
							Reject
						</button>
						{/* <button className="rounded-full bg-cl-secondary-grad px-3 py-1.5 font-semibold text-cl-primary">
						Check
					</button> */}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Admin;
