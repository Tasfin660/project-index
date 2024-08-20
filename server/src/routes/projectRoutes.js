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
router.put('/developers', updateDevelopers)
router.put('/stars', updateStars)
router.put('/status', updateStatus)
router.delete('/:projectId', deleteProject)

export default router
