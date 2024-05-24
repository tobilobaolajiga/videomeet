import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function AdminLogin({
  adminEmail,
  setAdminEmail,
  adminPassword,
  setAdminPassword,
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [adminId, setAdminId] = useState('');

  const adminLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'admin/logins',
        {
          email: adminEmail,
          password: adminPassword,
        }
      );
      const data = response;
      console.log(data?.data?.data?.token?.refreshToken);
      localStorage.setItem('adminToken', data?.data?.data?.token?.refreshToken);
      localStorage.setItem('ref', data?.data?.referenceId);
      // setLogin(false);
      setLoading(false);
      const ref = localStorage.getItem('ref');
      console.log(ref);
      navigate(`/dashboard/${ref}`);
      console.log(data);
      console.log(localStorage.getItem('userData'));
      console.log(localStorage.getItem('adminToken'));
      console.log(data?.data?.data?.token?.refreshToken);
      try {
        const token = localStorage.getItem('adminToken');
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
          'adminData',
          JSON.stringify(response?.data?.data?.user)
        );
        localStorage.setItem('userId', response?.data?.data?.user?.id);
        setLoading(false);
        console.log(response);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      const userNo = error?.response?.data?.data?.userId;
      setAdminId(userNo);
      localStorage.setItem('userId', error?.response?.data?.data?.userId);
      if (error.response.data.message === 'please verify your account') {
        setLoading(false);
        // setOTP(!otp);
        // setLogin(!login);
      }
      console.log(error?.response?.data?.data?.userId);
      console.log(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className=" ml-[70px] mt-[80px] mb-[60px] basis-1/2 ">
        <div className=" pr-[120px] font-inter">
          <img src="/TM30.svg" alt="" className="mb-10" />
          <div>
            <p className="font-bold  text-[#101828] text-[18px]">
              Login to your account
            </p>
            <p className="text-[#667085] text-[14px] mt-2 mb-8">
              Welcome back! Please enter your details.
            </p>
            <form action="">
              <label
                htmlFor=""
                className="mb-[4px] text-[14px] text-[#344054] font-medium"
              >
                Email
              </label>
              <br />
              <input
                type="text"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="border w-full rounded mb-4 outline-none py-[6px] placeholder:text-[12px] px-4 font-inter text-[12px]"
                placeholder="Enter your email"
              />
              <br />
              <label
                htmlFor=""
                className="mb-[4px] text-[14px] text-[#344054] font-medium"
              >
                Password
              </label>
              <br />
              <input
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                type="password"
                className="border w-full rounded-md mb-4 outline-none py-[6px] placeholder:text-[12px] px-4 font-inter text-[12px]"
                placeholder="Enter your password"
              />
              <br />
            </form>
            <div className="flex justify-between mb-4">
              <p className="text-[11px] flex items-center gap-2 font-medium">
                <input
                  className="border rounded-md outline-none"
                  type="checkbox"
                />
                Remember for 30 days
              </p>
              <p
                className="text-[#36aad9] text-[11px] cursor-pointer hover:underline"
                onClick={() => {
                  navigate('/admin/forgot');
                }}
              >
                Forgot password
              </p>
            </div>
            <button
              className="w-full bg-[#36aad9] text-white rounded-md py-[8px] text-[12px]"
              onClick={adminLogin}
            >
              {loading ? (
                <ClipLoader color="#36D7B7" loading={loading} size={16} />
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#36aad9] rounded-lg h-full m-6 px-6 py-16 font-inter basis-1/2">
        <p className="text-white text-[36px] tracking-tight">
          Analytic Overview:
        </p>
        <p className="text-white text-[36px] tracking-tight">
          Tracking System Insights
        </p>
        <p className="text-white text-[15px] mt-2 font-light">
          Say goodbye to chaos and hello to accuracy!
        </p>
        <div className="mt-8">
          <img src="/ooo.svg" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <p className="flex items-center justify-center w-max text-[#9e9e9e] gap-[4px] bg-[#ececec] rounded-2xl py-[4px] shadow-md mt-14 px-2">
            <span className="text-[10px] font-DMSans">Secured by</span>{' '}
            <img src="/tmCol.svg" alt="" width={25} />
          </p>
        </div>
      </div>
    </div>
  );
}
