import UserOverview from '../features/user/UserOverview'
import Filterbar from '../ui/Filterbar'

const Users = () => {
	return (
		<main className="container mb-16 mt-4">
			<Filterbar type="users" />
			<section className="grid grid-cols-5 gap-8">
				<UserOverview />
				<UserOverview />
			</section>
		</main>
	)
}

export default Users
