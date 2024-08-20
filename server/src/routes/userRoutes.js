import express from 'express'
import { login, register } from '../controllers/authController.js'
import { getUser, getUsers } from '../controllers/userController.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.get('/', getUsers)
router.get('/:username', getUser)

export default router
