import { IoSearch } from 'react-icons/io5'

const Searchbar = () => {
	return (
		<form className="relative justify-self-end">
			<input
				type="text"
				placeholder="Search Project"
				className="w-64 rounded-full bg-slate-300 py-2 pl-4 pr-11 text-sm dark:bg-transparent dark:bg-clr-gray-grad"
			/>
			<button
				className="absolute right-4 top-1/2 -translate-y-1/2 duration-300 hover:text-clr-primary"
				onClick={() => console.log('first')}>
				<IoSearch />
			</button>
		</form>
	)
}

export default Searchbar
