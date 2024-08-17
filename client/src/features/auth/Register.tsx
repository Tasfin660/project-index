import { Form, Link } from 'react-router-dom'

const Register = () => {
	return (
		<Form className="auth-form flex flex-col items-center gap-6 rounded-lg p-6">
			<p className="font-heading text-2xl font-bold">Registers as developer</p>
			<input
				type="text"
				placeholder="Username"
				className="focus:border-clr-white rounded-full border-2 border-slate-300/20 px-4 py-2 duration-300 hover:bg-slate-500/10"
				required
			/>
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
			<button className="bg-clr-primary-grad w-full rounded-full py-1.5 text-lg font-medium duration-300">
				Register
			</button>
			<p className="text-sm">
				Already have an account?&nbsp;
				<Link to="/auth/login" className="font-medium">
					Login
				</Link>
			</p>
		</Form>
	)
}

export default Register
