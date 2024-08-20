import dotenv from 'dotenv'
import express from 'express'
import connectDB, { dbConnected } from '../config/database.js'
import vite from '../config/vite.js'
import userRouter from './routes/userRoutes.js'
import projectRouter from './routes/projectRoutes.js'

dotenv.config({ path: '.env.local' })

const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(async (req, res, next) => {
	if (dbConnected || !req.path.toLowerCase().startsWith('/api')) return next()
	if (!dbConnected) await connectDB()
	if (!dbConnected)
		return res.status(500).send({
			success: 'fail',
			message: 'There was an error connecting to MongoDB'
		})
	else return next()
})
app.use('/api/v1/users', userRouter)
app.use('/api/v1/projects', projectRouter)

await vite(express, app)

if (process.env.Serverless !== 'Yes') {
	app.listen(process.env.PORT || 5000, () => {
		console.log(`Server is running on port ${process.env.PORT}`)
	})
}

export default app
