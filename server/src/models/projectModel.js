import mongoose from 'mongoose'

const ProjectSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	category: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	stars: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			required: true
		}
	],
	developers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
			required: true
		}
	],
	created_at: {
		type: String,
		required: true
	}
})

const ProjectModel = new mongoose.model('projects', ProjectSchema)

export default ProjectModel
