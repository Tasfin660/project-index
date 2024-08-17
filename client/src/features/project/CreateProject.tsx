import { BiSolidAddToQueue } from 'react-icons/bi'

const CreateProject = () => {
	return (
		<form className="blue-bg flex w-[400px] flex-col items-center gap-6 p-6 text-sm">
			<div className="flex items-center gap-2 text-lg font-medium">
				<BiSolidAddToQueue />
				<h2>Create New Project</h2>
			</div>
			<input
				type="text"
				placeholder="Title"
				className="border-clr-primary rounded-md border p-3"
			/>
			<select className="border-clr-primary rounded-md border p-3">
				<option value="">E-commerce Platforms</option>
			</select>
			<textarea
				placeholder="About this project..."
				className="border-clr-primary h-[150px] rounded-md border p-3"
			/>
			<button className="bg-clr-primary-grad rounded-lg px-2 py-1">
				Submit
			</button>
		</form>
	)
}

export default CreateProject
