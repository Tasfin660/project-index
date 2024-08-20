import UserModel from '../models//userModel.js'

const getUsers = async (req, res) => {
	try {
		const users = await UserModel.find(
			{ role: 'User' },
			{ fullname: 1, username: 1, avatar: 1, framework: 1, github: 1 }
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

		return res.status(200).json({
			status: 'success',
			message: 'User retrieved successfully.',
			data: user
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

export { getUsers, getUser }
