import WebError from '../ui/WebError'

const ErrorPage = () => {
	return (
		<main className="relative min-h-screen bg-clr-secondary text-clr-white">
			<section className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
				<WebError
					code="500"
					msg="An unexpected error occurred. Please try again later or contact support if the issue persists"
					btn="error"
				/>
			</section>
		</main>
	)
}
export default ErrorPage
