import { createSlice } from "@reduxjs/toolkit";

const islogin = localStorage.getItem('localId')
let initialAuthState = { isAutenticate: false }


if(islogin === '' || !islogin){
    initialAuthState = { isAutenticate: false }
}
else{
    initialAuthState = { isAutenticate: true }
}

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