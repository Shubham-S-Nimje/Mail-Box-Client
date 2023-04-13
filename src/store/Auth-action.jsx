import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAutenticate: false }

const AuthSlice = createSlice({
    name: 'authstatechange',
    initialState: initialAuthState,
    reducers : {
        login(state) {
            state.isAutenticate = true;
        },
        logout(state) {
            state.isAutenticate = false;
        }
    }
});


export const authActions = AuthSlice.actions;
export default AuthSlice;