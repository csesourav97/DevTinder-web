import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";
import feedReducer from "./feedSlice"

const appSore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer
    }

});

export default appSore;