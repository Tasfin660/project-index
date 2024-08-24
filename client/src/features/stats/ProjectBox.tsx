interface ProjectBox {
	status: 'Projects' | 'Completed' | 'Ongoing' | 'Postponed'
	isLoading: boolean
	count: number
	total: number
}

const ProjectBox = ({ status, isLoading, count, total }: ProjectBox) => {
	let percentage = 1
	if (!isLoading) percentage = Math.floor((count / total) * 100)

	const colors = {
		Projects: 'bg-clr-primary-grad',
		Completed: 'bg-clr-green-grad',
		Ongoing: 'bg-clr-yellow-grad',
		Postponed: 'bg-clr-red-grad'
	}

	return (
		<div
			className={`flex flex-col justify-between rounded-xl p-4 text-clr-white ${colors[status]}`}>
			<p className="text-lg">
				{status}: {isLoading ? '...' : count}
			</p>
			<div className="flex items-center gap-3">
				<div className="relative h-1.5 w-full rounded-full bg-slate-50/30">
					<div
						className="absolute h-full rounded-full bg-clr-white duration-1000"
						style={{ width: `${percentage}%` }}></div>
				</div>
				<span className="ml-auto text-xs">{percentage}%</span>
			</div>
		</div>
	)
}

export default ProjectBox
