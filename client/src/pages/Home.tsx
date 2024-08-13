import category from '../data/project-category.json';
import ProjectCategory from '../features/project/ProjectCategory';
import Header from '../ui/layouts/Header';

const Home = () => {
	return (
		<main>
			<Header />
			<section className="container grid grid-cols-[repeat(4,300px)] items-center justify-center gap-10 pb-16">
				{category.map(el => (
					<ProjectCategory key={el.id} data={el} />
				))}
			</section>
		</main>
	);
};

export default Home;
