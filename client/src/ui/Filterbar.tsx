const Filterbar = ({ type }: { type?: string }) => {
	return (
		<div className="mb-8 flex items-center gap-4 rounded-md bg-clr-gray-light p-3">
			<span>Filter By:</span>
			{type === 'users' ? (
				<select className="w-max rounded-full bg-clr-gray-dark px-2 py-1 text-sm">
					<option value="all">All Developers</option>
					<option value="react">React</option>
					<option value="vuejs">Vuejs</option>
					<option value="angular">Angular</option>
					<option value="svelte">Svelte</option>
				</select>
			) : (
				<select className="w-max rounded-full bg-clr-gray-dark px-2.5 py-1 text-sm">
					<option value="all">All Projects</option>
					<option value="completed">Completed</option>
					<option value="ongoing">Ongoing</option>
					<option value="postponed">Postponed</option>
				</select>
			)}
			<span className="ml-auto">Results: 08</span>
		</div>
	)
}

export default Filterbar
