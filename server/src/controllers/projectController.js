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
			stars: [req.userId],
			developers: [req.userId],
			created_at: new Date()
		}
		const newProject = new ProjectModel(project)
		await newProject.save()
		await UserModel.updateOne(
			{ _id: req.userId },
			{
				$addToSet: {
					projects: newProject._id
				}
			}
		)
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

const updateDevelopers = async (req, res) => {
	try {
		const { projectId } = req.body
		const project = await ProjectModel.findById(projectId)

		if (project.developers.includes(req.userId)) {
			await ProjectModel.updateOne(
				{
					_id: projectId
				},
				{
					$pull: { developers: req.userId }
				}
			)
			await UserModel.updateOne(
				{
					_id: req.userId
				},
				{
					$pull: { projects: projectId }
				}
			)
			return res.status(200).json({
				status: 'success',
				message: `User was removed from project developers list. Project was removed from user projects list.`
			})
		} else {
			await ProjectModel.updateOne(
				{
					_id: projectId
				},
				{
					$addToSet: { developers: req.userId }
				}
			)
			await UserModel.updateOne(
				{
					_id: req.userId
				},
				{
					$addToSet: { projects: projectId }
				}
			)
			return res.status(200).json({
				status: 'success',
				message: `User was added to project developers list. Project was added to user projects list.`
			})
		}
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

const updateStars = async (req, res) => {
	try {
		const { projectId } = req.body
		const project = await ProjectModel.findById(projectId)

		if (project.stars.includes(req.userId)) {
			await ProjectModel.updateOne(
				{
					_id: projectId
				},
				{
					$pull: { stars: req.userId }
				}
			)
			return res.status(200).json({
				status: 'success',
				message: `Removed a star from ${project.title}.`
			})
		} else {
			await ProjectModel.updateOne(
				{
					_id: projectId
				},
				{
					$addToSet: { stars: req.userId }
				}
			)
			return res
				.status(200)
				.json({ status: 'success', message: `${project.title} got a star.` })
		}
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

const deleteProject = async (req, res) => {
	try {
		const { projectId } = req.params
		await ProjectModel.deleteOne({
			_id: projectId
		})
		await UserModel.updateMany(
			{ projects: projectId },
			{ $pull: { projects: projectId } }
		)
		res
			.status(200)
			.json({ status: 'success', message: 'Successfully deleted project.' })
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

const updateStatus = async (req, res) => {
	try {
		const { projectId, value } = req.body
		const project = await ProjectModel.findById(projectId)
		project.status = value
		await project.save()
		res.status(200).json({
			status: 'success',
			message: `Project: ${projectId} status updated to ${value}.`
		})
	} catch (err) {
		return res
			.status(500)
			.json({ message: 'Internal server error.', err: err.message })
	}
}

export {
	getProjects,
	getProject,
	getStats,
	createProject,
	updateDevelopers,
	updateStars,
	updateStatus,
	deleteProject
}
