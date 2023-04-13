import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Auth-action'

const store = configureStore({
    reducer : { auth : AuthSlice.reducer },
});

export default store;