import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/users/UserSlice.js";
import addJobReducer from "./Features/users/addJobs/AddJobsSlice.js";
import allJobsReducer from "./Features/users/allJobs/allJobsSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    addJobs: addJobReducer,
    allJobs: allJobsReducer,
  },
});
