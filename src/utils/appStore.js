import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";

const appSore = configureStore({
    reducer: {
        user: userReducer,
    }

});

export default appSore;