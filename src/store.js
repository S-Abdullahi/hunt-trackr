import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Features/users/UserSlice.js'

export default configureStore({
    reducer: {
        user: userReducer
    }
})