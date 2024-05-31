import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logOut: function(state) {
            state.status = false;
            state.userData = null;
        }
    }
})


export  const {logIn, logOut} = authSlice.actions

export default authSlice.reducer;