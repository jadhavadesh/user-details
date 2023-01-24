import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedUserDetails: []
};



export const loginSlice = createSlice({
    name: 'loginDetails',
    initialState,
    reducers: {
        storeLoggedUserDetails: (state, action) => {
            state.loggedUserDetails = action.payload;
        },
    }
});

export const { storeLoggedUserDetails } = loginSlice.actions;

export default loginSlice.reducer;
