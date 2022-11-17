import { createSlice } from "@reduxjs/toolkit";
import profile from '../profile/profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        changeFirstName(state, action) {
            state.firstName = action.payload.firstName
        },
        changeLastName(state, action) {
            state.lastName = action.payload.lastName
        },
        changeBio(state, action) {
            state.bio = action.payload.bio
        },
        changeHandle(state, action) {
            state.handle = action.payload.handle
        },
        changeDateOfBirth(state, action) {
            state.dateOfBirth = action.payload.dateOfBirth
        }
    }
});

export const {changeFirstName, changeLastName, changeBio, changeHandle, changeDateOfBirth} = profileSlice.actions;
export default profileSlice.reducer;