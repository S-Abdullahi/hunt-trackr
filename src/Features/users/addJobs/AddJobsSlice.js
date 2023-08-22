import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../axios";

const initialState = {
  position: "",
  company: "",
  jobLocation: "",
  status: "interview",
  jobType: "",
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
});

export default addJobSlice.reducer;
export const { handleChange } = addJobSlice.actions;
