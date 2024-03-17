import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        otp: {
            isOtpSent: false,
            phone: null,
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem("AUTH_TOKEN", action.payload.token);
        },
        otpSent: (state, action) => {
            state.otp.isOtpSent = true;
            state.otp.phone = action.payload;
        },
    },
});

export const { setUser, otpSent } = authSlice.actions;
export default authSlice.reducer;