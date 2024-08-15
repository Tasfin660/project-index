import { NavLink, useLocation } from 'react-router-dom';
import ProjectQueryLink from '../features/project/ProjectQueryLink';
import ProjectDetails from '../features/project/ProjectDetails';
import { IoCopy } from 'react-icons/io5';
import { HiClipboardCopy, HiOutlineDownload } from 'react-icons/hi';
import {
	FaCalendarAlt,
	FaCrown,
	FaLongArrowAltRight,
	FaShare,
	FaStar,
	FaUser
} from 'react-icons/fa';
import { FaDownload, FaHashtag } from 'react-icons/fa6';
import { MdArrowRightAlt } from 'react-icons/md';
import { HiUser } from 'react-icons/hi2';
import { TiStarFullOutline } from 'react-icons/ti';
import { useEffect, useRef } from 'react';

const Project = () => {
	const scrollRef = useRef(null);
	const { search } = useLocation();
	const query = search.split('=')[1];

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		scrollRef.current.scrollBy({
	// 			left: 572.4,
	// 			behavior: 'smooth'
	// 		});
	// 	}, 2000);
	// 	return () => clearInterval(intervalId);
	// }, []);

	return (
		<main className="container my-16 grid h-max grid-cols-[repeat(2,auto)] gap-8">
			<div className="space-y-4 rounded border-2 border-blue-600/20 bg-blue-900/10 p-4">
				<div className="relative flex overflow-hidden rounded" ref={scrollRef}>
					<img src="/website/web.jpg" alt="" />
					<img src="/website/web2.jpg" alt="" />
					<img src="/website/web3.jpg" alt="" />
					<img src="/website/web4.jpg" alt="" />
					<img src="/website/web5.jpg" alt="" />
					<img src="/website/web6.jpg" alt="" />
					<div className="absolute top-4 flex w-full justify-between rounded-sm bg-slate-200/10 px-4 py-1.5 font-heading font-medium shadow-lg backdrop-blur">
						<span>Inspirational Ideas</span>
						<span>1/6</span>
					</div>
				</div>
				<div className="flex items-center gap-3 rounded bg-cl-secondary-grad p-2.5 text-sm">
					<img
						src="https://i.imgur.com/HoKv53T.jpg"
						alt=""
						className="w-6 rounded-full"
					/>
					<span className="font-medium">Tasfin Hasan</span>
					<FaCrown className="-ml-1 text-xs text-yellow-400" />
					<NavLink
						to=""
						className="ml-4 rounded-full bg-sky-500/10 px-2.5 py-0.5 text-lg text-cl-primary">
						<FaLongArrowAltRight />
					</NavLink>
					<div className="ml-auto flex items-center gap-1.5 text-sm">
						<TiStarFullOutline className="text-cl-primary" /> 05
					</div>
					<div className="mx-3 flex items-center gap-1.5 text-sm">
						<HiUser className="text-cl-primary" /> 18
					</div>
					<div className="flex items-center gap-1.5 text-sm">
						<FaCalendarAlt className="text-cl-primary" /> 5 May, 2015
					</div>
				</div>
				<p className="text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, suscipit
					facere tenetur possimusa spernatur illo assumenda a amet consequatur
					ipsum sunt vel, eum voluptatibus atque magnam Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Non, suscipit facere tenetur
				</p>
				<div className="ml-auto w-max space-x-2">
					<button className="rounded bg-yellow-500/20 px-2 py-0.5 text-sm font-semibold text-yellow-500">
						Star
					</button>
					<button className="rounded bg-cl-secondary-grad px-2 py-0.5 text-sm font-semibold text-cl-primary">
						Join As a Developer
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="project-nav mb-12 space-x-8">
					<ProjectQueryLink to="overview" />
					<ProjectQueryLink to="features" />
					<ProjectQueryLink to="component" />
					<ProjectQueryLink to="utilities" />
					<ProjectQueryLink to="libraries" />
					<ProjectQueryLink to="pages" />
					<ProjectQueryLink to="enhancements" />
				</div>
				<ProjectDetails query={query}>
					<div className="mb-3 flex justify-between gap-4 border-b-2 border-blue-600/20 pb-3">
						<div className="flex items-center gap-2">
							<span className="mr-1 font-heading text-lg font-medium">
								Recipe Vault
							</span>
							<span className="rounded-sm bg-gradient-to-br from-emerald-500 to-emerald-600 px-1.5 py-0.5 text-xs">
								Completed
							</span>
							<span className="rounded-sm bg-cl-white px-1.5 py-0.5 text-xs font-medium text-cl-gray-dark">
								Enrolled
							</span>
						</div>
						<div className="space-x-4 text-xs">
							<button className="box-content rounded-md bg-cl-secondary-grad p-2 text-cl-primary duration-300 hover:text-cl-primary-shades">
								<IoCopy />
							</button>
							<button className="box-content rounded-md bg-cl-secondary-grad p-2 text-cl-primary duration-300 hover:text-cl-primary-shades">
								<FaDownload />
							</button>
							<button className="box-content rounded-md bg-cl-secondary-grad p-2 text-cl-primary duration-300 hover:text-cl-primary-shades">
								<FaShare />
							</button>
						</div>
					</div>
				</ProjectDetails>
			</div>
		</main>
	);
};

export default Project;
