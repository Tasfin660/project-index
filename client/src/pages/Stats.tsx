import { useEffect } from 'react'
import 'react-circular-progressbar/dist/styles.css'
import toast from 'react-hot-toast'
import {
	FaAngular,
	FaCheck,
	FaDribbble,
	FaReact,
	FaRegStopCircle,
	FaVuejs
} from 'react-icons/fa'
import { FaRepeat } from 'react-icons/fa6'
import { IoLogoWhatsapp, IoLogoYoutube } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { RiSvelteFill } from 'react-icons/ri'
import { fetchStats } from '../features/project/projectSlice'
import About from '../features/stats/About'
import ContactBox from '../features/stats/ContactBox'
import FrameworkBox from '../features/stats/FrameworkBox'
import Progressbar from '../features/stats/Progressbar'
import ProjectBox from '../features/stats/ProjectBox'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import WebError from '../ui/WebError'
import { formatStats } from '../utils/helpers'

const Stats = () => {
	const { status, stats } = useAppSelector(state => state.project)
	const dispatch = useAppDispatch()

	const isLoading = status === 'loading'
	const totalProjects = stats?.project_status?.length || 0
	const projectStatus = formatStats(stats?.project_status)
	const userFrameworks = formatStats(stats?.user_frameworks)

	useEffect(() => {
		toast.dismiss()
		return () => toast.dismiss()
	}, [])

	useEffect(() => {
		dispatch(fetchStats())
	}, [dispatch])

	if (status === 'failed')
		return (
			<WebError
				code="500"
				msg="An error occurred while retrieving project stats. Please try again later."
				btn="reload"
			/>
		)

	return (
		<main className="container my-16 w-max space-y-6">
			<section className="grid grid-cols-[repeat(4,auto)] gap-8 font-semibold">
				<FrameworkBox
					isLoading={isLoading}
					framework="React"
					count={userFrameworks.React}
					Icon={FaReact}
				/>
				<FrameworkBox
					isLoading={isLoading}
					framework="Vuejs"
					count={userFrameworks.Vuejs}
					Icon={FaVuejs}
				/>
				<FrameworkBox
					isLoading={isLoading}
					framework="Angular"
					count={userFrameworks.Angular}
					Icon={FaAngular}
				/>
				<FrameworkBox
					isLoading={isLoading}
					framework="Svelte"
					count={userFrameworks.Svelte}
					Icon={RiSvelteFill}
				/>
			</section>
			<section className="blue-bg grid grid-cols-[repeat(2,auto)] items-center gap-5 p-4">
				<div className="grid grid-cols-[repeat(3,200px)] gap-10 font-medium">
					<Progressbar
						status="Completed"
						Icon={FaCheck}
						isLoading={isLoading}
						count={projectStatus.Completed}
						total={totalProjects}
					/>
					<Progressbar
						status="Ongoing"
						Icon={FaRepeat}
						isLoading={isLoading}
						count={projectStatus.Ongoing}
						total={totalProjects}
					/>
					<Progressbar
						status="Postponed"
						Icon={FaRegStopCircle}
						isLoading={isLoading}
						count={projectStatus.Postponed}
						total={totalProjects}
					/>
				</div>
				<div className="grid h-[250px] grid-cols-[repeat(2,200px)] gap-6 font-medium">
					<ProjectBox
						status="Projects"
						isLoading={isLoading}
						count={totalProjects}
						total={totalProjects}
					/>
					<ProjectBox
						status="Completed"
						isLoading={isLoading}
						count={projectStatus.Completed}
						total={totalProjects}
					/>
					<ProjectBox
						status="Ongoing"
						isLoading={isLoading}
						count={projectStatus.Ongoing}
						total={totalProjects}
					/>
					<ProjectBox
						status="Postponed"
						isLoading={isLoading}
						count={projectStatus.Postponed}
						total={totalProjects}
					/>
				</div>
			</section>
			<About />
			<section className="grid grid-cols-[repeat(4,250px)] justify-center gap-8 pb-4 pt-2 text-lg">
				<ContactBox
					media="Whatsapp"
					msg="Chat with me directly on WhatsApp"
					Icon={IoLogoWhatsapp}
					iClass="text-clr-green"
					copy="+8801816899005"
				/>
				<ContactBox
					media="Mail"
					msg="Drop me a line via email"
					Icon={MdEmail}
					iClass="text-clr-primary"
					copy="tasfinhasan660@gmail.com"
				/>
				<ContactBox
					media="YouTube"
					msg="Watch my latest creations on YT"
					Icon={IoLogoYoutube}
					iClass="text-clr-red"
					copy="https://www.youtube.com/@tasfin660"
				/>
				<ContactBox
					media="Dribbble"
					msg="Explore my design portfolio"
					Icon={FaDribbble}
					iClass="text-pink-500"
					copy="https://dribbble.com/Tasfin"
				/>
			</section>
		</main>
	)
}
export default Stats
