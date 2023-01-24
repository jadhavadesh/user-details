import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    message: '',
    heading: '',
    type: 'info',
};

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (state, action) => {
            state.open = true
            state.message = action.payload.message;
            state.heading = action.payload.heading;
            state.type = action.payload.type;
        },
        hideSnackbar: (state) => {
            state.open = false
        }

    },

});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;


export default snackbarSlice.reducer;
