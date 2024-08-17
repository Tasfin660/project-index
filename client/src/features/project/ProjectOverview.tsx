import { FaLongArrowAltRight } from 'react-icons/fa'
import { HiUser } from 'react-icons/hi2'
import { TiStarFullOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const ProjectOverview = () => {
	return (
		<div className="bg-clr-secondary-grad hover:border-clr-white relative w-[330px] shrink-0 rounded-lg border border-transparent p-4 duration-300">
			<h2 className="line-clamp-1 break-all pr-10 font-heading text-2xl font-medium">
				Dinasourious Vault
			</h2>
			<div className="mt-2 space-x-2 text-xs">
				<span className="bg-clr-green-grad rounded-full px-2 py-0.5">
					Completed
				</span>
				<span className="bg-clr-white text-clr-gray-dark rounded-full px-2 py-0.5 font-semibold">
					Enrolled
				</span>
			</div>
			<p className="my-4 line-clamp-3 break-all text-xs">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
				fugiat suscipit, corporis maxime iste officiis labore amet iure aut
				numquam quasi dignissimos vel omnis nihil modi pariatur possimus illo
				debitis?
			</p>
			<div className="flex gap-3">
				<div className="flex items-center gap-1.5 rounded-full bg-slate-50/10 px-2.5 py-0.5 text-sm">
					<TiStarFullOutline /> 20
				</div>
				<div className="flex w-max items-center gap-1.5 rounded-full bg-slate-50/10 px-2.5 py-0.5 text-sm">
					<HiUser /> 6
				</div>
				<Link
					to={`/projects/javascript/45?details=overview`}
					className="ml-auto flex items-center gap-1.5 rounded-full bg-slate-50/10 px-2.5 py-0.5 text-sm duration-300 hover:bg-slate-50/20">
					Check <FaLongArrowAltRight />
				</Link>
			</div>
			<span className="serial-clip bg-clr-white text-clr-gray-dark absolute right-6 top-0 px-2 pb-1.5 pt-[2px] font-medium">
				01
			</span>
		</div>
	)
}

export default ProjectOverview
