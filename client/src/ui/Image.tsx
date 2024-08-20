import { useState } from 'react'

interface Image {
	src: string
	alt: string
	className: string
}

const Image = ({ src, alt, className }: Image) => {
	const [loading, setLoading] = useState(true)
	return (
		<div>
			{loading && (
				<img
					src="/errors/user-placeholder.png"
					alt="user"
					className={`${className} !rounded-none !shadow-none`}
				/>
			)}
			<img
				src={src}
				alt={alt}
				className={`${className} ${loading && 'hidden'}`}
				onLoad={() => setLoading(false)}
			/>
		</div>
	)
}

export default Image
