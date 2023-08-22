import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/users/UserSlice.js";
import addJobReducer from "./Features/users/addJobs/AddJobsSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    addJobs: addJobReducer,
  },
});
