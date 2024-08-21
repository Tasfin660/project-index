import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User, UserState } from '../../types/userTypes'

export const fetchUsers = createAsyncThunk<User[]>(
	'users/fetchUsers',
	async () => {
		try {
			const res = await fetch(`${import.meta.env.VITE_API}/users`)
			const { status, message, data } = await res.json()
			if (status !== 'success') throw new Error(message)
			return data
		} catch (err) {
			if (err instanceof Error) return Promise.reject(err.message)
			return Promise.reject('An unknown error occurred')
		}
	}
)

export const fetchUser = createAsyncThunk<User, string>(
	'users/fetchUser',
	async username => {
		try {
			const res = await fetch(`${import.meta.env.VITE_API}/users/${username}`)
			const { status, message, data } = await res.json()
			if (status === 'fail') throw new Error(message)
			return data
		} catch (err) {
			if (err instanceof Error) return Promise.reject(err.message)
			return Promise.reject('An unknown error occurred')
		}
	}
)

const initialState: UserState = {
	status: 'idle',
	users: [],
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: null,
	guestUser: null,
	error: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload
		},
		setAdminReq(state, action) {
			if (state.guestUser) state.guestUser.admin_status = action.payload
		},
		setAdminStatus(state, action) {
			state.users = state.users.map(user =>
				user._id === action.payload.userId
					? { ...user, admin_status: `pending--${action.payload.status}` }
					: user
			)
		},
		setUserInfo(state, action) {
			state.user = { ...state.user, ...action.payload }
			localStorage.setItem('user', JSON.stringify(state.user))
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload
				state.status = 'succeed'
			})
			.addCase(fetchUsers.rejected, state => {
				state.status = 'failed'
			})

		builder
			.addCase(fetchUser.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.status = 'succeed'
				state.guestUser = action.payload
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message as string
			})
	}
})

export const { setUser, setAdminReq, setAdminStatus, setUserInfo } =
	userSlice.actions

export default userSlice.reducer

export const getUsers = (state: { user: UserState }) => state.user.users
export const getUser = (state: { user: UserState }) => state.user.user
export const getGuestUser = (state: { user: UserState }) => state.user.guestUser
