import AdminOverview from '../features/admin/AdminOverview'
import CreateProject from '../features/project/CreateProject'

const user = {
	_id: '001',
	fullname: 'Tasfin Hasan',
	avatar: 'https://i.imgur.com/HoKv53T.jpg',
	requested_at: 'Fri Aug 6 2024 21:53:24 GMT+0600 (Bangladesh Standard Time)',
	accepted_at: 'Fri Aug 12 2024 21:53:24 GMT+0600 (Bangladesh Standard Time)'
}

const Admin = () => {
	return (
		<main className="container my-16 flex items-start justify-center gap-24">
			<section className="space-y-12">
				<div className="divide-y divide-blue-600/20">
					<p className="mb-4 text-xl font-medium">Admins</p>
					<AdminOverview user={user} />
				</div>
				<div className="divide-y divide-blue-600/20">
					<div className="mb-4 flex w-max gap-5">
						<p className="text-xl font-medium">Pending Requests</p>
						<span className="loader--pending scale-[0.3]"></span>
					</div>
					<AdminOverview user={user} type="pending" />
				</div>
			</section>
			<CreateProject />
		</main>
	)
}

export default Admin
