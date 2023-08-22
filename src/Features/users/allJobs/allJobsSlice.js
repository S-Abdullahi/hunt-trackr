import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialParams = {
  search: "",
  status: "all",
  jobType: "all",
  sort: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  ...initialParams,
};

export const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
});

export default allJobsSlice.reducer;
