import { FaJs } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi2';
import { IoPieChart } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Card = () => {
	return (
		<Link
			to={`/projects/javascript/all`}
			className="rounded-lg border-2 border-slate-50/40 bg-slate-700/10 p-6 duration-300 hover:-translate-y-3 hover:scale-[1.01] hover:border-slate-50 hover:bg-slate-500/10">
			<div className="grid grid-cols-[1fr,max-content] items-center gap-y-2 text-sm">
				<FaJs className="row-span-2 text-[70px] text-yellow-400" />
				<span className="flex items-center gap-1.5 self-end justify-self-end">
					6
					<HiUser className="text-base text-cl-primary" />
				</span>
				<span className="flex items-center gap-1.5 self-start justify-self-end">
					30
					<IoPieChart className="text-base text-emerald-500" />
				</span>
			</div>
			<h3 className="mb-1 mt-3 font-heading text-3xl font-medium">
				JavaScript
			</h3>
			<p className="break-all text-xs italic">
				Browser all the react.js projects and embrace yourself to the inspiring
				world of web development and enjoy the life as you see.
			</p>
		</Link>
	);
};

export default Card;
