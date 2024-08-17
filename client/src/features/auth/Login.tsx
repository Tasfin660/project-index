import { Form, Link } from 'react-router-dom'

const Login = () => {
	return (
		<Form className="auth-form flex flex-col items-center gap-6 rounded-lg p-6">
			<p className="font-heading text-2xl font-bold">
				Login in to your account
			</p>
			<input
				type="email"
				placeholder="Email"
				className="focus:border-clr-white rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10"
				required
			/>
			<input
				type="password"
				placeholder="Password"
				className="focus:border-clr-white rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10"
				required
			/>
			<button className="bg-clr-primary-grad hover:bg-clr-primary-shades w-full rounded-full py-1.5 text-lg font-medium duration-300">
				Log In
			</button>
			<p className="text-sm">
				Don't have an account?&nbsp;
				<Link to="/auth/register" className="font-medium">
					Register
				</Link>
			</p>
		</Form>
	)
}

export default Login
