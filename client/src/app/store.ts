import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../features/project/projectSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
	reducer: {
		user: userReducer,
		project: projectReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
