import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import ResetPassword from './ResetPassword';
import MailReset from './MailReset';
import ResetOTP from './ResetOTP';
export default function ProfileDropdown({
  profileDrop,
  showProfDrop,
  setProfileDrop,
  pwd,
  setPwd,
  sendOTP,
  resendOTP,
}) {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const token = localStorage.getItem('userToken');
  const [otpLoading, setOtpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const Logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response;
      setProfileDrop(false);
      console.log(data);
      setLoading(false);
      localStorage.removeItem('userToken');
      navigate('/');
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const [mailReset, setMailReset] = useState(false);
  const [resetOtp, setResetOtp] = useState(false);

  const showMailReset = () => {
    setMailReset(!mailReset);
    profileDrop ? !showProfDrop() : '';
  };
  const [userMail, setUserMail] = useState('');

  const otpReset = async () => {
    setOtpLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'auth/resend-otp',
        {
          email: userMail,
        }
      );
      const data = response;
      console.log(data);
      setOtpLoading(false);
      setMailReset(false);
      setResetOtp(true);
    } catch (error) {
      setOtpLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      {profileDrop && (
        <div className="bg-white lg:w-2/12 lg:h-fit rounded-2xl py-8 px-4 fixed z-50 top-16 right-12 shadow-xl font-DMSans">
          <div className="flex gap-4 items-center justify-between">
            <div>
              <p className="text-[14px] font-bold">{userData?.fullName}</p>
              <p className="text-[10px] text-[#667185]">{userData?.email}</p>
            </div>
            <p onClick={showProfDrop} className="first">
              {userData?.fullName?.slice(0, 1)}
            </p>
          </div>
          <div className="border-4 border-[#5F5F67] border-opacity-10 rounded-md mt-[20px]">
            <div
              className="flex gap-4 items-center border-b py-[12px] justify-start pl-6 cursor-pointer"
              onClick={showMailReset}
            >
              <img src="/settings.svg" alt="" width={15} />{' '}
              <p className="text-[#1A1A1A] text-opacity-70 text-[10px] font-semibold pr-6">
                Change Password
              </p>
            </div>
            <div
              className="flex gap-4 items-center py-[12px] justify-start pl-6 cursor-pointer"
              onClick={Logout}
            >
              <img src="/logout.svg" alt="" width={15} />{' '}
              <p className="text-[#F1001a] text-[10px] font-semibold">
                {loading ? (
                  <ClipLoader color="#F1001a" loading={loading} size={16} />
                ) : (
                  'Logout'
                )}
              </p>
            </div>
          </div>
        </div>
      )}
      {mailReset && (
        <MailReset
          userMail={userMail}
          setUserMail={setUserMail}
          otpReset={otpReset}
          otpLoading={otpLoading}
          setMailReset={setMailReset}
        />
      )}
      {resetOtp && (
        <ResetOTP
          resendOTP={resendOTP}
          userMail={userMail}
          setResetOtp={setResetOtp}
          resetOtp={resetOtp}
          otpReset={otpReset}
        />
      )}
    </div>
  );
}
