import { isValidObjectId } from 'mongoose'
import ProjectModel from '../models/projectModel.js'
import UserModel from '../models/userModel.js'

const getProjects = async (req, res) => {
	try {
		const projects = await ProjectModel.find(req.params)

		if (projects.length === 0) throw new Error('404')

		return res.status(200).json({
			status: 'success',
			message: 'Projects retrieved successfully.',
			data: projects
		})
	} catch (err) {
		if (err.message.includes('404'))
			res.status(404).json({
				status: 'fail',
				message:
					'Projects not found. Please check the projects category and try again.'
			})
		else
			return res
				.status(500)
				.json({ message: 'Internal server error.', err: err.message })
	}
}
const getProject = async (req, res) => {
	try {
		if (!isValidObjectId(req.params._id)) throw new Error('404')

		const project = await ProjectModel.findOne(req.params)

		if (!project) throw new Error('404')

		const owner = await UserModel.findById(project.owner, {
			_id: 1,
			fullname: 1,
			username: 1,
			avatar: 1
		})

		return res.status(200).json({
			status: 'success',
			message: 'Projects retrieved successfully.',
			data: { ...project._doc, owner }
		})
	} catch (err) {
		if (err.message.includes('404'))
			res.status(404).json({
				status: 'fail',
				message:
					'Project not found. Please check the project category or ID and try again.'
			})
		else
			return res
				.status(500)
				.json({ message: 'Internal server error.', err: err.message })
	}
}

const getStats = async (req, res) => {
	try {
		const project_status = await ProjectModel.find(
			{},
			{
				_id: 0,
				status: 1
			}
		)
		const user_frameworks = await UserModel.find(
			{},
			{
				_id: 0,
				framework: 1
			}
		)

		res.status(200).json({
			status: 'success',
			message: 'Project status and Users frameworks retrieved successfully.',
			project_status,
			user_frameworks
		})
		res.end()
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

const createProject = async (req, res) => {
	try {
		const project = {
			...req.body,
			owner: req.userId,
			status: 'Ongoing',
			starred: [req.userId],
			developers: [req.userId],
			created_at: new Date()
		}
		const newProject = new ProjectModel(project)
		await newProject.save()
		return res.status(201).json({
			status: 'success',
			message: 'New project has successfully created.',
			data: newProject
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

export { getProjects, getProject, getStats, createProject }
