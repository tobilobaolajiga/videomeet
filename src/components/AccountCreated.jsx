import { useState } from 'react';
import LoginSuccessful from './LoginSuccessful';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function AccountCreated({ accountSuccess, email, pwd }) {
  // const goToProfile = () => {
  //   window.location.href = '/login';
  //   setLogin(true);
  // };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const signIn = async () => {
    console.log(email, pwd);
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'auth/login',
        {
          email: email,
          password: pwd,
        }
      );
      const data = response;
      console.log(data?.data?.data?.token?.refreshToken);
      localStorage.setItem('userToken', data?.data?.data?.token?.refreshToken);
      localStorage.setItem('ref', data?.data?.referenceId);

      const ref = localStorage.getItem('ref');
      console.log(ref);

      console.log(data);

      console.log(localStorage.getItem('userToken'));
      console.log(data?.data?.data?.token?.refreshToken);
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL + 'profile/me',

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response?.data?.data?.user);
        localStorage.setItem(
          'userData',
          JSON.stringify(response?.data?.data?.user)
        );

        localStorage.setItem('userId', response?.data?.data?.user?.id);
        setLoading(false);
        navigate(`/login/${ref}`);
        console.log(response);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      const userNo = error?.response?.data?.data?.userId;
      setUserId(userNo);
      localStorage.setItem('userId', error?.response?.data?.data?.userId);
      if (error.response.data.message === 'please verify your account') {
        setLoading(false);
      }
      console.log(error?.response?.data?.data?.userId);
      console.log(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div>
      {accountSuccess && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer flex justify-center ">
          <div className="bg-white m-auto w-1/3 h-fit rounded-2xl font-inter sm:shadow-lg pb-4 sm:px-2">
            <div className="flex flex-col items-center py-[20px] ">
              <img src="Animation.gif" alt="" />
              <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
                You're good to go..
              </p>
            </div>
            {/* <Link to={`/login/${ref}`}> */}
            <div className="px-8 pb-8 pt-4">
              <button
                className="bg-[#36AAD9] text-white w-full py-[9px] rounded-md mt-[14px] text-[10px] "
                onClick={signIn}
              >
                Continue
              </button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      )}
      {/* <LoginSuccessful loginProfile={loginProfile} showProfile={showProfile} /> */}
    </div>
  );
}
