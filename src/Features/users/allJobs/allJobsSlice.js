import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../axios";
import { logOut } from "../UserSlice";

const initialParams = {
  search: "",
  status: "all",
  jobType: "all",
  sort: "lastest",
  sortOption: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  defaultStat: {},
  monthlyApplications: [],
  ...initialParams,
};

export const getAllJobs = createAsyncThunk(
  "jobs/getAllJobs",
  async (_, thunkAPI) => {
    try {
      const { search, status, jobType, sort } = thunkAPI.getState().allJobs;
      let url = `/jobs?status=${status}&jobType=${jobType}&sort=${sort}`;
      if (search) {
        url = url + `&search=${search}`;
      }
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logOut());
        return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getAllStats = createAsyncThunk(
  "alljob/getStats",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("jobs/stats", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logOut());
        return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
      }

      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    handleSearch: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    clearSearchState: (state) => {
      return { ...state, ...initialParams };
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload?.jobs;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [getAllStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllStats.fulfilled]: (state, { payload }) => {
      state.isLoading = true;
      state.defaultStat = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
      console.log(payload);
    },
  },
});

export default allJobsSlice.reducer;
export const { handleSearch, clearSearchState } = allJobsSlice.actions;
