import { createSlice, current } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetail: [
      {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    ],
  },
  reducers: {
    asignup: (state, action) => {
      state.userDetail.push(action.payload);
      console.log(current(state));
      
    },
    alogout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { asignup, alogout } = authSlice.actions;
export default authSlice.reducer;
