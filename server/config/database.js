import mongoose from 'mongoose'
export let dbConnected = false

const connectDB = () => {
	try {
		mongoose.connect(`${process.env.MONGO_URL}/Project-Index`)
		dbConnected = true
	} catch (err) {
		dbConnected = false
	}
}

export default connectDB
