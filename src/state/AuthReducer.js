import { createSlice } from '@reduxjs/toolkit';

const initialAuth = {
    token: '',
    userId: '',
};

export const AuthReducer = createSlice({
    name: 'AuthReducer',
    initialState: initialAuth,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        },
        setLogout: (state, action) => {
            state.token = '';
            state.userId = '';
        },
    },
});

export const { setToken, setLogout } = AuthReducer.actions;
export default AuthReducer.reducer;
