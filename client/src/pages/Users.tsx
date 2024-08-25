import { useEffect, useState } from 'react'
import UserOverview from '../features/user/UserOverview'
import { fetchUsers } from '../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { User } from '../types/userTypes'
import Filterbar from '../ui/Filterbar'
import WebError from '../ui/WebError'
import WebLoader from '../ui/WebLoader'
const Users = () => {
	const [filter, setFilter] = useState('all')
	const { status, users } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()

	const filteredUsers =
		filter === 'all' ? users : users.filter(user => user.framework === filter)

	const handleFilter = (value: string) => {
		setFilter(value)
	}

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	if (status === 'loading') return <WebLoader />

	if (status === 'succeed')
		return (
			<main className="smooth-rendering container mb-16 mt-4">
				<Filterbar
					type="users"
					res={filteredUsers.length}
					onFilter={handleFilter}
				/>
				<ul className="grid grid-cols-5 gap-8">
					{filteredUsers.map((user: User) => (
						<UserOverview key={user._id} user={user} />
					))}
				</ul>
			</main>
		)

	if (status === 'failed')
		return (
			<WebError
				code="500"
				msg="An error occurred while retrieving users data. Please try again later."
				btn="reload"
			/>
		)
}

export default Users
