import express from 'express'
import { protect } from '../controllers/authController.js'
import {
	createProject,
	getProject,
	getProjects,
	getStats
} from '../controllers/projectController.js'

const router = express.Router()

router.get('/stats', getStats)
router.get('/:category', getProjects)
router.get('/:category/:_id', getProject)

router.use(protect)

router.post('/', createProject)

export default router
