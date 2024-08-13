import { IoSearch } from 'react-icons/io5';

const Searchbar = () => {
	return (
		<form className="relative justify-self-end">
			<input
				type="text"
				placeholder="Serial Code #"
				className="w-64 rounded-full bg-cl-gray-neutral py-2 pl-4 pr-11 text-sm focus:outline-none"
				required
			/>
			<button
				className="absolute right-4 top-1/2 -translate-y-1/2 duration-300 hover:text-cl-primary"
				onClick={() => console.log('first')}>
				<IoSearch />
			</button>
		</form>
	);
};

export default Searchbar;
