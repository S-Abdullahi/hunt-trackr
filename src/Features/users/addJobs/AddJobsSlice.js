import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../axios";
import { toastPosition } from "../../../helper";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  status: "interview",
  jobType: "full-time",
  statusOption: ["interview", "pending", "declined"],
  jobTypeOption: ["full-time", "part-time", "remote", "internship"],
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
  },
});

export default addJobSlice.reducer;
export const { handleChange } = addJobSlice.actions;
