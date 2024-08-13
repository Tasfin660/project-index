import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
	FaAngular,
	FaCheck,
	FaCrown,
	FaEdit,
	FaRegStopCircle,
	FaShare
} from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ProjectOverview from '../features/project/ProjectOverview';

const User = () => {
	const scrollRef = useRef(null);
	const copied = () =>
		toast('Link Copied!', {
			duration: 2000,
			position: 'top-center',
			className:
				'bg-cl-gray-dark text-cl-white px-4 py-1.5 tracking-wide text-sm',
			icon: <FaCheck className="ml-1 -translate-y-[1px] text-emerald-500" />
		});

	const handleScrollLeft = () => {
		scrollRef.current.scrollBy({
			left: -370,
			behavior: 'smooth'
		});
	};

	const handleScrollRight = () => {
		scrollRef.current.scrollBy({
			left: 370,
			behavior: 'smooth'
		});
	};

	return (
		<main className="mb-16 mt-12">
			<section className="container grid grid-cols-3">
				<div></div>
				<div className="flex w-max flex-col items-center gap-4 justify-self-center">
					<img
						src="https://i.imgur.com/HoKv53T.jpg"
						alt=""
						className="size-28 rounded-full"
					/>
					<div className="text-center text-sm">
						<p className="mb-1.5 text-2xl font-medium">Tasfin Hasan</p>
						<p className="mb-1">tasfinhasan660@gmail.com</p>
						<p>User • Tasfin660</p>
					</div>
				</div>
				<div className="flex h-max gap-5 justify-self-end text-sm font-semibold">
					<p className="flex items-center gap-2 rounded-full bg-cl-white px-3 py-1.5 text-cl-gray-light">
						<FaCrown className="text-yellow-500" /> Admin
					</p>
					<p className="flex items-center gap-1.5 rounded-full bg-cl-white px-3 py-1.5 text-cl-gray-dark text-red-600">
						<FaAngular className="text-base" /> Angular
					</p>
					<button
						className="rounded-full bg-cl-secondary-grad px-4"
						onClick={copied}>
						<FaShare className="text-cl-primary" />
					</button>
				</div>
				<Toaster />
			</section>
			<section className="container relative mt-8">
				<div className="flex items-center justify-between rounded-full bg-cl-secondary-grad p-2">
					<button
						className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
						onClick={handleScrollLeft}>
						<MdKeyboardArrowLeft />
					</button>
					<button
						className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
						onClick={handleScrollRight}>
						<MdKeyboardArrowRight />
					</button>
				</div>
				<div
					className="user-project-scroll flex scroll-mr-[300px] gap-10 overflow-x-scroll py-6"
					ref={scrollRef}>
					<div className="sticky left-0 z-10 flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600">
						<FaCheck className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Completed</p>
					</div>
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
				</div>
			</section>
			<section className="container relative mt-16">
				<div className="flex items-center justify-between rounded-full bg-cl-secondary-grad p-2">
					<button
						className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
						onClick={handleScrollLeft}>
						<MdKeyboardArrowLeft />
					</button>
					<button
						className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
						onClick={handleScrollRight}>
						<MdKeyboardArrowRight />
					</button>
				</div>
				<div
					className="user-project-scroll flex scroll-mr-[300px] gap-10 overflow-x-scroll py-6"
					ref={scrollRef}>
					<div className="sticky left-0 z-10 flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600">
						<FaRepeat className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Ongoing</p>
					</div>
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
				</div>
			</section>
			<section className="container relative mt-16">
				<div className="flex items-center justify-between rounded-full bg-cl-secondary-grad p-2">
					<button
						className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
						onClick={handleScrollLeft}>
						<MdKeyboardArrowLeft />
					</button>
					<button
						className="box-content rounded-full bg-pink-200/10 p-1 text-2xl text-pink-500 duration-300 hover:bg-pink-500/10"
						onClick={handleScrollRight}>
						<MdKeyboardArrowRight />
					</button>
				</div>
				<div
					className="user-project-scroll flex scroll-mr-[300px] gap-10 overflow-x-scroll py-6"
					ref={scrollRef}>
					<div className="sticky left-0 z-10 flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-rose-600 to-rose-800">
						<FaRegStopCircle className="box-content rounded-full bg-emerald-200/20 p-2.5 text-lg" />
						<p className="text-xl font-medium">Postponed</p>
					</div>
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
					<ProjectOverview />
				</div>
			</section>
		</main>
	);
};

export default User;
