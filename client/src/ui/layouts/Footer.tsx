import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { PiGithubLogoFill } from 'react-icons/pi'

export default function Footer() {
	return (
		<footer className="container mb-6">
			<div className="flex items-center rounded-md bg-clr-primary-grad px-6 py-4">
				<p>
					Copyright &copy; Tasfin Hasan | Project Index&nbsp;
					{new Date().getFullYear()}. All Rights Reserved.
				</p>
				<a
					target="_blank"
					href="https://www.facebook.com/Tasfin660/"
					className="ml-auto box-content rounded-md bg-clr-white p-1.5 text-sm text-clr-primary duration-300 hover:bg-slate-200">
					<FaFacebookF />
				</a>
				<a
					target="_blank"
					href="https://twitter.com/Tasfin660"
					className="mx-5 box-content rounded-md bg-clr-white p-1.5 text-sm text-clr-primary duration-300 hover:bg-slate-200">
					<FaXTwitter />
				</a>
				<a
					target="_blank"
					href="https://github.com/Tasfin660"
					className="box-content rounded-md bg-clr-white p-1.5 text-sm text-clr-primary duration-300 hover:bg-slate-200">
					<PiGithubLogoFill />
				</a>
			</div>
		</footer>
	)
}
