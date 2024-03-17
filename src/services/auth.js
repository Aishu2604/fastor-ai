import { post } from "./api";

export const registerUser = async (phone) => {
    return post('pwa/user/register', {
        phone: phone,
        dial_code: '+91',
    });
};

export const verifyOtp = async ({phone, otp}) => {
    return post('pwa/user/login', {
        phone: phone,
        otp: otp,
        dial_code: '+91',
    });
}