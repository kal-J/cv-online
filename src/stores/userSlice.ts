import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  isAuthenticated: boolean;
  data?: any,
  bearerToken?: string,
  cv_access_code?: string


}

const initialState: UserState = {
  isAuthenticated: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<any>) => {
      state.bearerToken = action.payload?.bearerToken
      state.isAuthenticated = action.payload?.isAuthenticated
      state.data = {
        ...state.data,
        ...action.payload?.data,
      };
    },
    setAccessCode: (state, action: PayloadAction<any>) => {
      state.cv_access_code = action.payload?.cv_access_code
      
    },
  },
});

export const { updateUserData, setAccessCode } = userSlice.actions;

export const isAuthenticated = (state: RootState) => {
  

  return state.user.isAuthenticated;
};

export default userSlice.reducer;
