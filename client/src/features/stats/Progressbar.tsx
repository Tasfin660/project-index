import {
	buildStyles,
	CircularProgressbarWithChildren
} from 'react-circular-progressbar'
import { IconType } from 'react-icons/lib'
import ProgressProvider from '../../ui/ProgressProvider'

interface Progressbar {
	status: 'Completed' | 'Ongoing' | 'Postponed'
	Icon: IconType
	isLoading: boolean
	count: number
	total: number
}

const Progressbar = ({
	status,
	Icon,
	isLoading,
	count,
	total
}: Progressbar) => {
	let percentage = 1
	if (!isLoading) percentage = Math.floor((count / total) * 100)

	const colors = {
		Completed: 'green',
		Ongoing: 'yellow',
		Postponed: 'red'
	}

	return (
		<div className="flex flex-col items-center gap-6">
			{status} - {percentage}%
			<ProgressProvider valueStart={0} valueEnd={percentage}>
				{value => (
					<CircularProgressbarWithChildren
						value={value}
						className="w-[160px]"
						styles={buildStyles({
							pathTransitionDuration: 1,
							pathColor: `var(--color-${colors[status]})`,
							trailColor: 'rgba(23, 37, 84, .4)'
						})}>
						<Icon className={`text-2xl text-clr-${colors[status]}`} />
					</CircularProgressbarWithChildren>
				)}
			</ProgressProvider>
		</div>
	)
}

export default Progressbar
