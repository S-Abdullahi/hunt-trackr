import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../axios";

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

export const getAllJobs = createAsyncThunk(
  "jobs/getAllJobs",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/jobs", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllJobs.pending]: (state)=>{
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, {payload})=>{
      state.isLoading = false
      state.jobs = payload?.jobs
    },
    [getAllJobs.rejected]: (state, {payload})=>{
      state.isLoading = false
    }
  }
});

export default allJobsSlice.reducer;
