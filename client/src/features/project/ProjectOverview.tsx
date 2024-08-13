import { FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiUser } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ProjectOverview = () => {
	return (
		<div className="relative w-[330px] shrink-0 rounded-lg border-2 border-transparent bg-cl-secondary-grad p-4 duration-300 hover:border-slate-50">
			<h2 className="font-heading text-2xl font-medium">Chrome Dino Game</h2>
			<div className="mb-3 mt-1.5 flex gap-2">
				<div className="w-max rounded-full bg-emerald-500 px-2 pt-[1px] text-xs font-medium">
					Completed
				</div>
				<div className="w-max rounded-full border px-2 pt-[1px] text-xs font-medium text-cl-white">
					Not enrolled
				</div>
				{/* <div className="w-max rounded-full border border-transparent bg-cl-white px-2 pt-[1px] text-xs font-medium text-cl-gray-dark">
					Enrolled
				</div> */}
			</div>
			<p className="line-clamp-3 break-all text-xs">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
				fugiat suscipit, corporis maxime iste officiis labore amet iure aut
				numquam quasi dignissimos vel omnis nihil modi pariatur possimus illo
				debitis?
			</p>
			<div className="mt-4 grid grid-cols-[auto_1fr_auto] gap-3">
				<div className="flex items-center gap-1.5 rounded-full bg-slate-50/10 px-3 py-0.5 text-sm">
					20 <FaStar className="text-xs" />
				</div>
				<div className="flex w-max items-center gap-1.5 rounded-full bg-slate-50/10 px-3 py-0.5 text-sm">
					6 <HiUser className="text-xs" />
				</div>
				<Link
					to={`/projects/javascript/45?details=overview`}
					className="flex items-center gap-1.5 rounded-full bg-slate-50/10 px-3 py-0.5 text-sm duration-300 hover:bg-slate-50/20">
					Check <FaArrowRightLong className="text-xs" />
				</Link>
			</div>
			<div className="serial-clip absolute right-6 top-0 bg-cl-white px-2 pb-1.5 pt-[2px] font-medium text-cl-gray-dark">
				01
			</div>
		</div>
	);
};

export default ProjectOverview;
