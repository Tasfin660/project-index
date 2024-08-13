import { Form, Link } from 'react-router-dom';

const Login = () => {
	return (
		<Form className="auth-form gap-6 space-y-6 rounded-lg bg-gradient-to-br from-slate-50/10 to-transparent p-6 backdrop-blur-md">
			<p className="text-center font-heading text-2xl font-bold">
				Login as a Developer
			</p>
			<input
				type="email"
				placeholder="Email"
				className="w-full rounded-full border-2 border-slate-300/20 bg-transparent px-4 py-2 duration-300 hover:bg-slate-500/10 focus:border-cl-white focus:outline-none"
				required
			/>
			<input
				type="password"
				placeholder="Password"
				className="w-full rounded-full border-2 border-slate-300/20 bg-transparent px-4 py-2 duration-300 hover:bg-slate-500/10 focus:border-cl-white focus:outline-none"
				required
			/>
			<button className="w-full rounded-full bg-cl-primary py-1.5 text-lg font-medium duration-300 hover:bg-cl-primary-shades">
				Log In
			</button>
			<p className="text-center text-sm">
				Don't have an account?&nbsp;
				<Link to="/auth/register" className="font-medium">
					Register
				</Link>
			</p>
		</Form>
	);
};

export default Login;
