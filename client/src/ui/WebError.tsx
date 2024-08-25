import { BsArrowRepeat } from 'react-icons/bs'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

interface WebError {
	code: string
	msg: string
	btn?: string
}

const WebError = ({ code, msg, btn }: WebError) => {
	const navigate = useNavigate()

	return (
		<main className="container my-16 flex w-max flex-col items-center gap-4">
			<img
				src="/errors/error.png"
				alt="error"
				className="w-24 opacity-100 dark:opacity-40"
			/>
			<p className="flex gap-3">
				<span className="flex h-[70px] w-[58px] items-center justify-center rounded-lg bg-slate-200 text-[50px] font-medium text-clr-red dark:bg-transparent dark:bg-clr-secondary-grad">
					{code[0]}
				</span>
				<span className="flex h-[70px] w-[58px] items-center justify-center rounded-lg bg-slate-200 text-[50px] font-medium text-clr-red dark:bg-transparent dark:bg-clr-secondary-grad">
					{code[1]}
				</span>
				<span className="flex h-[70px] w-[58px] items-center justify-center rounded-lg bg-slate-200 text-[50px] font-medium text-clr-red dark:bg-transparent dark:bg-clr-secondary-grad">
					{code[2]}
				</span>
			</p>
			<p className="w-[350px] text-center text-sm">{msg}</p>
			{btn === 'reload' && (
				<button
					className="box-content rounded-full bg-clr-red-grad p-1.5 text-2xl"
					onClick={() => location.reload()}>
					<BsArrowRepeat />
				</button>
			)}
			{btn === 'login' && (
				<div className="flex gap-4">
					<button
						className="box-content rounded bg-clr-secondary-grad px-2.5 py-1 text-2xl text-clr-primary"
						onClick={() => navigate(-1)}>
						<FaLongArrowAltLeft />
					</button>
					<Link
						to="/auth/login"
						className="box-content rounded bg-clr-primary-grad px-2.5 py-1 text-clr-white">
						Login
					</Link>
				</div>
			)}
			{btn === 'error' && (
				<div className="flex gap-4">
					<button
						className="box-content rounded bg-clr-secondary-grad px-2.5 py-1 text-2xl text-clr-primary"
						onClick={() => navigate(-1)}>
						<FaLongArrowAltLeft />
					</button>
					<Link
						to="/"
						className="box-content rounded bg-clr-primary-grad px-2.5 py-1 text-clr-white">
						Home
					</Link>
				</div>
			)}
		</main>
	)
}

export default WebError
