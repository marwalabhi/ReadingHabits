import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux Store/authSlice";

const appStore = configureStore({
    reducer: {
        auth: authReducer,
        
    },
});

export default appStore;
