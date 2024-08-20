import express from 'express'
import { protect } from '../controllers/authController.js'
import {
	createProject,
	deleteProject,
	getProject,
	getProjects,
	getStats,
	updateDevelopers,
	updateStars,
	updateStatus
} from '../controllers/projectController.js'

const router = express.Router()

router.get('/stats', getStats)
router.get('/:category', getProjects)
router.get('/:category/:_id', getProject)

router.use(protect)

router.post('/', createProject)
router.put('/update-developers', updateDevelopers)
router.put('/update-stars', updateStars)
router.put('/update-status', updateStatus)
router.delete('/:projectId', deleteProject)

export default router
