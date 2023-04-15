import { createSlice } from "@reduxjs/toolkit";

let initialAuthState = { isSeen: 0, isUnseen: 0, data: true }

const SeenMailsSlice = createSlice({
    name: 'seenunseenmails',
    initialState: initialAuthState,
    reducers : {
        seen(state) {
            state.isSeen++;
            state.data = false;
        },
        unseen(state) {
            state.isUnseen++;
            state.data = false;
        }
    }
});


export const SeenMailsAction = SeenMailsSlice.actions;
export default SeenMailsSlice;