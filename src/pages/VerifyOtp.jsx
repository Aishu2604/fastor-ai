import { useState, useEffect } from 'react'
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/authSlice';
import { verifyOtp } from "../services/auth";

function VerifyOtp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const otpDetails = useSelector((state) => state.auth.otp);
    const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']); // Array to hold each digit of OTP

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const login = async (e) => {
        e.preventDefault();
        const result = await verifyOtp({
            otp: otp.join(""),
            phone: otpDetails.phone,
        })

        if(result.error) {
            alert(result.error);
            return ;
        }
        const user = result.data.data;
        dispatch(setUser(user));
        navigate("/home")
    }

    useEffect(() => {

        if (!otpDetails || !otpDetails.phone || otpDetails.isOtpSent === false) {
            // If the OTP is not sent, navigate to the send otp page
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [otpDetails]);

    return (
        <div>

            <Button color="gray" className='absolute left-6 mt-6'>
                h
            </Button>

            <div className="flex items-center justify-center h-screen">
                <Card href="#" className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        OTP Verification
                    </h5>
                    <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                        Enter the Verification code we just sent on your Mobile Number
                    </span>

                    <form className="flex max-w-md flex-col gap-4">
                        <div className="flex justify-center gap-4 ">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    className="w-12 h-12 text-center border rounded-md m-2"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            ))}
                        </div>
                        <Button className='w-full bg-orange-500' type="submit" onClick={login}>Verify</Button>
                    </form>
                    <span className="text-sm text-center text-gray-900 dark:text-white">
                        {`Didn't`} received code ? <span className='text-blue-700 font-semibold'>Resend</span>
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default VerifyOtp