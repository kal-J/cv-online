import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isAuthenticated: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<Object>) => {
      state = {
        ...state,
        ...action,
      };
    },
  },
});

export const { updateUserState } = userSlice.actions;

export const isAuthenticated = (state: RootState) => {
  

  return state.user.isAuthenticated;
};

export default userSlice.reducer;
