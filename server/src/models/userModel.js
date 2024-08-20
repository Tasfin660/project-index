import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
	fullname: {
		type: String
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	avatar: {
		type: String,
		required: true,
		unique: true
	},
	framework: {
		type: String
	},
	github: {
		type: String
	},
	projects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'projects'
		}
	],
	email: {
		type: String,
		required: true,
		unique: true
	},
	role: {
		type: String,
		required: true
	},
	admin_status: {
		type: String
	},
	requested_at: {
		type: String
	},
	accepted_at: {
		type: String
	},
	password: {
		type: String,
		required: true
	}
})

const UserModel = new mongoose.model('users', UserSchema)
export default UserModel
