import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../axios";
import { toast } from "react-toastify";

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "users/register",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      console.log(resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const toastPosition = {
  position: toast.POSITION.TOP_CENTER,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Account Created, Dear ${user.name.split(' ')[0]}`, toastPosition);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, toastPosition);
    },
  },
});

export default userSlice.reducer;
