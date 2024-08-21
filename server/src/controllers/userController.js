import UserModel from '../models//userModel.js'
import ProjectModel from '../models/projectModel.js'
import bcrypt from 'bcrypt'

const getUsers = async (req, res) => {
	try {
		const users = await UserModel.find(
			{},
			{ projects: 0, email: 0, __v: 0, password: 0 }
		)
		return res.status(200).json({
			status: 'success',
			message: 'Users retrieved successfully.',
			data: users
		})
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

const getUser = async (req, res) => {
	try {
		const user = await UserModel.findOne(req.params, {
			password: 0,
			__v: 0
		})

		if (!user) throw new Error('404')

		const projects = await ProjectModel.find({
			_id: { $in: user.projects }
		})

		return res.status(200).json({
			status: 'success',
			message: 'User retrieved successfully.',
			data: { ...user._doc, projects }
		})
	} catch (err) {
		if (err.message.includes('404'))
			return res.status(404).json({
				status: 'fail',
				message:
					'User does not exist. Please check your username and try again.'
			})
		else
			return res
				.status(500)
				.json({ message: 'Internal server error.', err: err.message })
	}
}

const updateAdminStatus = async (req, res) => {
	try {
		const { status, userId } = req.body
		const user = await UserModel.findById({
			_id: userId
		})
		if (status === 'pending') user.requested_at = new Date()
		if (status === 'accepted') {
			user.accepted_at = new Date()
			user.role = 'Admin'
		}
		user.admin_status = status

		await user.save()
		res.status(200).json({
			status: 'success',
			message: `User admin status updated to ${status}`
		})
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

const updateInfo = async (req, res) => {
	try {
		let user = await UserModel.findById({ _id: req.userId })
		user = { ...user._doc, ...req.body }
		await UserModel.updateOne({ _id: req.userId }, user)
		return res
			.status(200)
			.json({ status: 'success', message: 'User info updated successfully.' })
	} catch (err) {
		return res.status(500).json({
			status: 'fail',
			message: 'Internal server error.',
			err: err.message
		})
	}
}

const updatePassword = async (req, res) => {
	try {
		const { oldPassword, newPassword } = req.body.data
		const user = await UserModel.findById({ _id: req.userId })

		const isPassValid = await bcrypt.compare(oldPassword, user.password)
		if (!isPassValid) throw new Error('400')

		const newHashedPassword = await bcrypt.hash(newPassword, 10)
		user.password = newHashedPassword
		await user.save()
		res.status(200).json({
			status: 'success',
			message: "User's passowrd updated successfully."
		})
	} catch (err) {
		console.log(err)
		if (err.message.includes('400'))
			return res
				.status(400)
				.json({ status: 'fail', message: 'Invalid old password.' })
		return res.status(500).json({
			status: 'fail',
			message: 'Internal server error.',
			err: err.message
		})
	}
}

export { getUser, getUsers, updateAdminStatus, updateInfo, updatePassword }
// $2b$10$584QwaRlgyhkSzcAsIi8FOmb3HthjPcRXz1eQ9jqyjfdc2BgQjV56
