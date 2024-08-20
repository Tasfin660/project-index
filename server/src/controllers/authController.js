import UserModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const protect = (req, res, next) => {
	const token = req.headers?.authorization?.split(' ')[1]

	if (!token)
		return res
			.status(404)
			.json({ status: 'fail', message: 'No token provided.' })

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err)
			return res.status(401).json({ status: 'fail', message: 'Invalid token.' })
		req.userId = decoded.userId
		next()
	})
}

const register = async (req, res) => {
	try {
		const { username, password } = req.body
		const hashedPassword = await bcrypt.hash(password, 10)
		const newUser = new UserModel({
			...req.body,
			role: 'User',
			admin_status: 'idle',
			password: hashedPassword
		})
		await newUser.save()
		return res.status(201).json({
			status: 'success',
			message: `${username} has successfully registered!`
		})
	} catch (err) {
		if (err.code === 11000)
			return res.status(409).json({
				status: 'fail',
				message: `The ${Object.keys(err.keyPattern)[0]} has already been taken.`,
				err: err.message
			})
		else
			return res
				.status(500)
				.json({ message: 'Internal server error.', err: err.message })
	}
}

const login = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await UserModel.findOne({ email })

		if (!user) throw new Error('Login failed. Incorrect email.')

		const isPassValid = await bcrypt.compare(password, user.password)

		if (!isPassValid) throw new Error('Login failed. Incorrect password.')

		const { password: _, ...data } = user._doc
		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

		return res
			.status(200)
			.json({ status: 'success', message: 'Login successful!', token, data })
	} catch (err) {
		if (err.message.includes('Login failed.'))
			return res.status(401).json({ status: 'fail', message: err.message })
		else
			return res
				.status(500)
				.json({ message: 'Internal server error.', err: err.message })
	}
}

export { protect, register, login }
