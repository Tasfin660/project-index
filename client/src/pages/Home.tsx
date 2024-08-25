import projectCategories from '../data/Project-Index.categories.json'
import ProjectCategory from '../features/project/ProjectCategory'
import Header from '../ui/layouts/Header'

const Home = () => {
	return (
		<main className="container my-16 space-y-16">
			<Header />
			<ul className="grid grid-cols-[repeat(4,300px)] justify-center gap-10">
				{projectCategories.map(category => (
					<ProjectCategory key={category.id} data={category} />
				))}
			</ul>
		</main>
	)
}

export default Home
