import express from 'express'
import { login, protect, register } from '../controllers/authController.js'
import {
	getUser,
	getUsers,
	updateAdminStatus,
	updatePassword,
	updateInfo
} from '../controllers/userController.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.get('/', getUsers)
router.get('/:username', getUser)

router.use(protect)

router.put('/admin-status', updateAdminStatus)
router.put('/info', updateInfo)
router.put('/password', updatePassword)

export default router
