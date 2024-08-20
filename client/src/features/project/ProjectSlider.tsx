import { useRef, useState } from 'react'
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight
} from 'react-icons/md'

const ProjectSlider = () => {
	const [imgIdx, setImgIdx] = useState(0)
	const sliderRef = useRef(null)

	const handleLeftSlider = () => {
		if (imgIdx > 0) setImgIdx(imgIdx - 1)
	}

	const handleRightSlider = () => {
		if (imgIdx < 5) setImgIdx(imgIdx + 1)
	}

	return (
		<div className="relative flex overflow-hidden rounded">
			<div className="flex duration-1000" ref={sliderRef}>
				{Array.from({ length: 6 }, (_, i) => (
					<img
						src={`/project-inspirations/img-${i}.jpg`}
						alt={`img ${i}`}
						className="duration-[0.6s]"
						style={{ translate: `${-100 * imgIdx}%` }}
					/>
				))}
			</div>
			<div className="absolute top-4 flex w-full items-center gap-4 rounded-sm bg-slate-200/5 px-4 py-2 font-heading font-medium shadow-xl backdrop-blur">
				<button
					className="box-content rounded bg-slate-50 px-[1px] py-1 text-xl text-clr-gray-dark duration-200 hover:bg-slate-300"
					onClick={handleLeftSlider}>
					<MdOutlineKeyboardArrowLeft />
				</button>
				<p className="translate-y-[1px]">
					Inspirational Ideas
					<span className="ml-2.5 rounded-full bg-clr-white px-2 py-[1px] text-sm font-semibold text-clr-gray-dark">
						{imgIdx + 1}/6
					</span>
				</p>
				<button
					className="ml-auto box-content rounded bg-slate-50 px-[1px] py-1 text-xl text-clr-gray-dark duration-200 hover:bg-slate-300"
					onClick={handleRightSlider}>
					<MdOutlineKeyboardArrowRight />
				</button>
			</div>
		</div>
	)
}

export default ProjectSlider
