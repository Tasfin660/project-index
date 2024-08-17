const ProjectSlider = () => {
	return (
		<div className="relative flex overflow-hidden rounded">
			<img src="/project-inspirations/img-1.jpg" alt="" />
			<div className="absolute top-4 flex w-full justify-between rounded-sm bg-slate-200/10 px-4 py-1.5 font-heading font-medium shadow-xl backdrop-blur">
				<span>Inspirational Ideas</span>
				<span>1/6</span>
			</div>
		</div>
	)
}

export default ProjectSlider
