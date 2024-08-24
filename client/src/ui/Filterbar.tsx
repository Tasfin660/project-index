import { formatLength } from '../utils/helpers'

interface Filterbar {
	type?: string
	res: number
	onFilter: (value: string) => void
}

const Filterbar = ({ type, res, onFilter }: Filterbar) => {
	return (
		<div className="mb-8 flex items-center gap-4 rounded-md bg-slate-200 p-3 dark:bg-clr-gray-neutral">
			<span>Filter By:</span>
			<select
				className="w-max rounded-full bg-slate-300 px-2 py-1 text-sm dark:bg-clr-gray-light"
				onChange={e => onFilter(e.target.value)}>
				{type === 'users' ? (
					<>
						<option value="all">All Developers</option>
						<option value="React">React</option>
						<option value="Vuejs">Vuejs</option>
						<option value="Angular">Angular</option>
						<option value="Svelte">Svelte</option>
					</>
				) : (
					<>
						<option value="all">All Projects</option>
						<option value="Completed">Completed</option>
						<option value="Ongoing">Ongoing</option>
						<option value="Postponed">Postponed</option>
					</>
				)}
			</select>
			<p className="ml-auto rounded-md bg-slate-300 px-2.5 py-1.5 text-xs font-semibold text-clr-primary duration-300 dark:bg-clr-gray-grad">
				Results: {formatLength(res)}
			</p>
		</div>
	)
}

export default Filterbar
