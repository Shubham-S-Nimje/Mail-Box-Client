import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Auth-action'
import SeenMailsSlice from "./Seen-Unseenmails";

const store = configureStore({
    reducer : { auth : AuthSlice.reducer, seenunseenmails : SeenMailsSlice.reducer },
});

export default store;