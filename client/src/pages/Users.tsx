import UserOverview from '../features/user/UserOverview';

const Users = () => {
	return (
		<main className="container grid h-max grid-cols-5 justify-center gap-8 pb-16 pt-4">
			<div className="col-span-5 grid grid-cols-[auto_1fr_auto] gap-4 rounded-md bg-cl-gray-neutral px-6 py-3">
				<span>Filter By:</span>
				<select className="w-max rounded-full bg-cl-gray-dark px-2 py-1 text-sm focus:outline-none">
					<option value="all">All Developers</option>
					<option value="javascript">JavaScript</option>
					<option value="react">React</option>
					<option value="vuejs">Vuejs</option>
					<option value="angular">Angular</option>
					<option value="svelte">Svelte</option>
				</select>
				<span className="">Results: 08</span>
			</div>
			<UserOverview />
			<UserOverview />
			<UserOverview />
			<UserOverview />
			<UserOverview />
			<UserOverview />
			<UserOverview />
		</main>
	);
};

export default Users;
