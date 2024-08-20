import { IoLocationSharp } from 'react-icons/io5'

const About = () => {
	return (
		<section className="blue-bg flex w-[1160px] items-center gap-6 p-4 text-sm">
			<div className="stat-img relative size-20 shrink-0 overflow-hidden rounded-full">
				<img src="https://i.imgur.com/HoKv53T.jpg" alt="owner img" />
			</div>
			<div>
				<p>
					Meet Tasfin, a dedicated self-learner passionate about coding.
					Currently exploring React, he created Project-Index to hone his
					skills. With a strong interest in web development, Tasfin is always
					seeking innovative ways to turn ideas into delightful user
					experiences.
				</p>
				<p className="mt-1.5 flex items-center gap-1.5">
					<IoLocationSharp className="-translate-y-[1px] text-base text-clr-primary" />
					Bangladesh
				</p>
			</div>
		</section>
	)
}

export default About
