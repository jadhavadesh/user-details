import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: []
};



export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        storeUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    }
});

export const { storeUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
