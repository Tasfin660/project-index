import toast, { Toaster } from 'react-hot-toast'
import { IconType } from 'react-icons/lib'
import { ToastCopy, toastReset } from '../../ui/ToastElements'

interface ContactBox {
	media: string
	msg: string
	Icon: IconType
	iClass: string
	copy: string
}

const ContactBox = ({ media, msg, Icon, iClass, copy }: ContactBox) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(copy)
		toast(<ToastCopy msg="Copied to clipboard!" />, toastReset)
	}

	return (
		<div className="flex flex-col items-center">
			<p className="font-medium">{media}</p>
			<p className="text-sm">{msg}</p>
			<button
				className="mt-4 rounded-full bg-clr-gray-grad px-[14px] py-2"
				onClick={handleCopy}>
				<Icon className={iClass} />
			</button>
			<Toaster />
		</div>
	)
}

export default ContactBox
