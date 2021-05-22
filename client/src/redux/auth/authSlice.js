import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postDataAPI } from '../../utils/fetchData'

export const loginAPI = createAsyncThunk(
    'auth/loginAPI',
    async (data) => {
        const response = await postDataAPI('login', data)
        return response;
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState: {

    },
    extraReducers: {
        [loginAPI.pending]: (state, action) => {
            state.status = 'loading'
        },
        [loginAPI.fulfilled]: (state, { payload }) => {
            state.token = payload.data.access_token
            state.user = payload.data.user
            state.status = 'success'
            localStorage.setItem("firstLogin", true)
        },
        [loginAPI.rejected]: (state, action) => {
            state.status = 'Failed'
        },


    },
})

// Action creators are generated for each case reducer function
// export const { loginAPI } = authSlice.actions

export default authSlice.reducer