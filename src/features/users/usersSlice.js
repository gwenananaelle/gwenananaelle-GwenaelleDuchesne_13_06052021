import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginMock, getProfileMock } from '../../api/argentBankAPI'

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(loginAsync(user))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loginAsync = createAsyncThunk('user/login', async (user) => {
    const response = await loginMock({ user })
    // The value we return becomes the `fulfilled` action payload
    return response.body
})
export const getProfileAsync = createAsyncThunk(
    'user/profile',
    async (token) => {
        const response = await getProfileMock({ token })
        return response.body
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isLoggedIn: false,
            token: '',
            createdAt: '',
            updatedAt: '',
            id: '',
        },
        status: 'idle',
        error: null,
    },
    reducers: {
        logOut: (state) => state.users.initialState,
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user.token += action.payload.token
                state.user.isLoggedIn = true
            })
            .addCase(getProfileAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user.firstName = action.payload.firstName
                state.user.lastName = action.payload.lastName
                state.user.email = action.payload.email
                state.user.createdAt = action.payload.createdAt
                state.user.updatedAt = action.payload.updatedAt
                state.user.id = action.payload.id
            })
    },
})

export const { logOut } = usersSlice.actions

export default usersSlice.reducer
