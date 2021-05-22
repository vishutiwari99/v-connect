import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import notifyReducer from './notify/notifySlice'
export default configureStore({
    reducer: {
        auth: authReducer,
        notify: notifyReducer
    },
})