import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 0,
    },
    reducers: {
        auth: (data) => {
            console.log(data);
        },

    },
})

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions

export default authSlice.reducer