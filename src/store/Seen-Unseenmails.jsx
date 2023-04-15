import { createSlice } from "@reduxjs/toolkit";

let initialAuthState = { isSeen: 0, isUnseen: 0 }

const SeenMailsSlice = createSlice({
    name: 'seenunseenmails',
    initialState: initialAuthState,
    reducers : {
        seen(state) {
            state.isSeen++;
        },
        unseen(state) {
            state.isUnseen++;
        },
        unseenclicked(state) {
            state.isSeen++;
            state.isUnseen--;
        }
    }
});


export const SeenMailsAction = SeenMailsSlice.actions;
export default SeenMailsSlice;