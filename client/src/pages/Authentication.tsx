import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';

const Authentication = () => {
	const { authForm } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (authForm !== 'login' && authForm !== 'register')
			throw new Error('not-found');
		if (!true) navigate('/', { replace: true });
	}, [authForm, navigate]);

	return (
		<main className="mx-auto my-36 w-[350px]">
			{authForm === 'login' && <Login />}
			{authForm === 'register' && <Register />}
		</main>
	);
};

export default Authentication;
