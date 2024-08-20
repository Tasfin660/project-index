import { IconType } from 'react-icons/lib'

interface FrameworkBox {
	isLoading: boolean
	framework: string
	count: number
	Icon: IconType
}

const FrameworkBox = ({ isLoading, framework, count, Icon }: FrameworkBox) => {
	return (
		<div className="blue-bg flex items-center gap-3 p-4">
			<Icon className="box-content rounded-lg bg-clr-primary-grad p-2.5 text-xl text-clr-white" />
			{framework} Developers - {isLoading ? '...' : count}
		</div>
	)
}

export default FrameworkBox
