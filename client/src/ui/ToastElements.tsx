import { FaCheck } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

const toastReset = {
	style: {
		padding: 0,
		backgroundColor: 'transparent',
		boxShadow: 'none'
	},
	className: '',
	icon: null
}

const ToastCopy = ({ msg }: { msg: string }) => {
	return (
		<p className="flex items-center gap-2.5 rounded bg-clr-gray-neutral px-4 py-2.5 text-sm font-medium text-clr-white">
			<FaCheck className="shrink-0 text-base text-clr-green" /> {msg}
		</p>
	)
}

const ToastLoading = ({ msg }: { msg: string }) => {
	return (
		<p className="flex items-center gap-0 rounded bg-clr-gray-neutral pl-1 pr-4 text-sm font-medium text-clr-white">
			<span className="loader--toast-loading"></span>
			{msg}
		</p>
	)
}

const ToastSuccess = ({ msg }: { msg: string }) => {
	return (
		<p className="flex items-center gap-2.5 rounded bg-clr-green-grad px-4 py-2.5 text-sm font-medium text-clr-white">
			<FaCheck className="shrink-0 text-base" /> {msg}
		</p>
	)
}

const ToastError = ({ err }: { err: string }) => {
	return (
		<p className="flex items-center gap-2.5 text-nowrap rounded bg-clr-red-grad px-4 py-2.5 text-sm font-medium text-clr-white first-letter:uppercase">
			<MdError className="shrink-0 text-base" />
			<span className="first-letter:uppercase">{err}</span>
		</p>
	)
}

export { ToastCopy, ToastError, ToastLoading, toastReset, ToastSuccess }
