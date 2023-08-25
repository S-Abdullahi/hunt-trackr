import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../axios";
import { toastPosition } from "../../../helper";
import { toast } from "react-toastify";
import { getAllJobs } from "../allJobs/allJobsSlice";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  status: "interview",
  jobType: "full-time",
  statusOption: ["interview", "pending", "declined"],
  jobTypeOption: ["full-time", "part-time", "remote", "internship"],
  isEditing: false,
};

export const addJob = createAsyncThunk(
  "addJob/addNewJob",
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(handleClear());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const editJob = createAsyncThunk(
  "allJob/editJob",
  async (jobPayload, thunkAPI) => {
    const { jobId, job } = jobPayload;
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(handleClear());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const deleteJob = createAsyncThunk(
  "allJob/deleteJob",
  async (jobId, thunkAPI) => {
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(getAllJobs());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const addJobSlice = createSlice({
  name: "addJob",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    handleClear: () => {
      return { ...initialState };
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Job Added Successfully", toastPosition);
    },
    [addJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Job Updated", toastPosition);
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastPosition);
    },
    [deleteJob.fulfilled]: () => {
      toast.success("Job Deleted", toastPosition);
    },
  },
});

export default addJobSlice.reducer;
export const { handleChange, handleClear, setEditJob } = addJobSlice.actions;
