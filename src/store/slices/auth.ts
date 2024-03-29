import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TOKEN_STORAGE_KEY = "auth_token";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      const err = error as any;
      console.error({ err });
      return rejectWithValue(err.response.data);
    }
  }
);

// Define other async thunks (login, verifyEmail, requestPasswordReset, resetPassword, refreshToken)...

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder;
    // Handle signupUser and other async thunks similarly...
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

export const loadUserFromStorage = () => (dispatch) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    // Validate the token if needed (optional)
    // Dispatch action to set user in Redux store
    // dispatch(setUser(decodedToken)); // Replace decodedToken with actual decoded token
  } else {
    // Dispatch action to clear user in Redux store
    dispatch(clearUser());
  }
};
