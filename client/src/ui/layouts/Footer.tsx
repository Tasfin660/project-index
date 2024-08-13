import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { PiGithubLogoFill } from 'react-icons/pi';

export default function Footer() {
	return (
		<footer className="container mb-6">
			<div className="flex items-center justify-between rounded-md bg-gradient-to-b from-cl-primary-tints to-cl-primary-shades px-6 py-4">
				<p>
					Copyright &copy; Tasfin Hasan | Project Index&nbsp;
					{new Date().getFullYear()}. All Rights Reserved.
				</p>
				<div>
					<div className="flex items-center gap-5 text-sm">
						<a
							target="_blank"
							href="https://www.facebook.com/Tasfin660/"
							className="box-content rounded-md bg-cl-white p-1.5 text-cl-primary duration-300 hover:bg-slate-200">
							<FaFacebookF />
						</a>
						<a
							target="_blank"
							href="https://twitter.com/Tasfin660"
							className="box-content rounded-md bg-cl-white p-1.5 text-cl-primary duration-300 hover:bg-slate-200">
							<FaXTwitter />
						</a>
						<a
							target="_blank"
							href="https://github.com/Tasfin660"
							className="box-content rounded-md bg-cl-white p-1.5 text-cl-primary duration-300 hover:bg-slate-200">
							<PiGithubLogoFill />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
