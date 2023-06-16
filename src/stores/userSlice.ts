import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  isAuthenticated: boolean;
  data?: any,
  bearerToken?: string,


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
  },
});

export const { updateUserData } = userSlice.actions;

export const isAuthenticated = (state: RootState) => {
  

  return state.user.isAuthenticated;
};

export default userSlice.reducer;
