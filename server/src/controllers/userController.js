import UserModel from '../models//userModel.js'
import ProjectModel from '../models/projectModel.js'

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
			_id: 0,
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
		const user = await UserModel.findById({
			_id: req.userId
		})
		user.admin_status = req.body.status
		await user.save()
		console.log(req.userId)
		res.status(200).json({
			status: 'success',
			message: `User admin status updated to ${req.body.status}`
		})
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

export { getUser, getUsers, updateAdminStatus }
