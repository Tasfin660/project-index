import { useRouteError } from 'react-router-dom';

const PageNotFound = () => {
	const error = useRouteError();
	console.log(error.message || error.data);

	return <div>PageNotFound</div>;
};

export default PageNotFound;
