import { createSlice } from '@reduxjs/toolkit'
import { postDataAPI } from '../../utils/fetchData'
export const notifySlice = createSlice({
    name: 'notify',
    initialState: {
    },
    reducers: {
        login: async (state, action) => {
            try {
                state.loading = true;
                const { payload } = action;
                const res = await postDataAPI('login', payload)
                state.success = res.data.message;
            } catch (err) {

            }

        },

    },
})

// Action creators are generated for each case reducer function
export const { login } = notifySlice.actions

export default notifySlice.reducer