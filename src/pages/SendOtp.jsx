import { useState } from 'react';
import { Card, Button, TextInput } from 'flowbite-react';
import { useDispatch } from 'react-redux'
import { otpSent } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';

function SendOtp() {
	const [phone, setPhone] = useState('9818979450');
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const sentOtp = async (e) => {
		e.preventDefault();
		const result = await registerUser(phone);
		if(result.error || (result.data.status || "").toLowerCase() !== 'success') {
			alert(result.error)
		} else {
			dispatch(otpSent(phone));
			navigate('/verify-otp');
		}
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<Card href="#" className="max-w-sm">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Enter Your Mobile Number
				</h5>
				<span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
					We Will send you the 4 digit veification code
				</span>

				<form className="flex max-w-md flex-col gap-4">
					<div>
						<TextInput
							id="email1"
							type="number"
							value={phone}
							placeholder="Enter your number"
							required
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<Button className='w-full bg-orange-500' type="submit" onClick={sentOtp} >Submit</Button>
				</form>
			</Card>
		</div>
	)
}

export default SendOtp