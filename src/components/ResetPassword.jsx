import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import ResetSuccess from './ResetSuccess';

export default function ResetPassword({
  resendOTP,
  showResetPwd,
  userMail,
  OTP,
  setResetPwd,
}) {
  const [resetSuccess, setResetSuccess] = useState(false);
  const showResetSuccess = () => {
    setResetPwd(false);
    setResetSuccess(!resetSuccess);
  };
  const [pwd, setPwd] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const checkForCapital = (text) => {
    const regex = /[A-Z]/;

    return regex.test(text);
  };
  const checkForNumber = (text) => {
    return /\d/.test(text);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    pwd ? setPasswordVisible(!passwordVisible) : '';
  };
  const [confirmVisible, setConfirmVisible] = useState(false);
  const toggleConfirmVisibility = () => {
    confirmPass ? setConfirmVisible(!confirmVisible) : '';
  };
  const [colorOne, setColorOne] = useState('');
  const [colorTwo, setColorTwo] = useState('');
  const changeColor = (e) => {
    if (
      e.target.value.length >= 8 ||
      checkForCapital(e.target.value) ||
      checkForNumber(e.target.value)
    ) {
      setColorOne('#E46F7C');
      setColorTwo('#D0D6E3');
      if (
        (e.target.value.length >= 8 && checkForCapital(e.target.value)) ||
        (e.target.value.length >= 8 && checkForNumber(e.target.value)) ||
        (checkForCapital(e.target.value) && checkForNumber(e.target.value))
      ) {
        setColorOne('#E0D148');
        setColorTwo('#E0D148');
        if (
          e.target.value.length >= 8 &&
          checkForCapital(e.target.value) &&
          checkForNumber(e.target.value)
        ) {
          setColorOne('#50B848');
          setColorTwo('#50B848');
        }
      }
    } else if (!e.target.value) {
      setColorOne('#D0D6E3');
    }
  };

  const checkPassword = (e) => {
    setPwd(e.target.value);
    console.log(e.target.value);
    changeColor(e);
  };

  const resetPassword = async () => {
    setLoading(true);
    console.log(userMail);
    console.log(OTP);
    console.log(pwd);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'auth/reset-password',
        {
          email: userMail,
          otp: OTP,
          password: pwd,
        }
      );

      const data = response;

      console.log(data);

      setLoading(false);
      setResetSuccess(true);
    } catch (error) {
      setLoading(false);

      setError(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error.response.data.status);
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer flex justify-center">
        <div className="bg-white m-auto lg:w-fit lg:h-fit w-2/3 h-fit rounded-2xl font-inter sm:shadow-lg pb-4">
          <div className="flex flex-col items-center py-[20px] border-b">
            <div className="relative w-full flex justify-center items-center">
              <img src="/TM30.svg" alt="" width={60} />
              <img
                src="/cross.svg"
                alt=""
                width={10}
                className="absolute top-[4px] right-[25px]"
                onClick={showResetPwd}
              />
            </div>
            <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
              Change Password{' '}
            </p>
            <p className="text-[#667085] text-[10px] tracking-tight">
              {error ? error : ''}
            </p>
          </div>
          <form action="" className="relative px-6  pt-[10px] pb-[6px]">
            <label className="text-[10px] font-medium text-[#344054]">
              New Password
              <span
                className="text-[#36AAD9]
  "
              >
                *
              </span>
            </label>{' '}
            <br />
            <input
              required
              value={pwd}
              onChange={checkPassword}
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              className="border w-full rounded-md pl-[26px] pr-2 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none"
            />
            <img
              src="/password.svg"
              alt=""
              width={14}
              className="absolute top-[48px] left-[34px]"
            />
            <img
              src={passwordVisible ? 'dontshow.svg' : '/show.svg'}
              alt=""
              width={14}
              className="absolute right-[34px] top-[48px]"
              onClick={togglePasswordVisibility}
            />
            <label
              htmlFor=""
              className="text-[10px] font-medium text-[#344054]"
            >
              Confirm New Password
              <span
                className="text-[#36AAD9]
  "
              >
                *
              </span>
            </label>{' '}
            <br />
            <input
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              type={confirmVisible ? 'text' : 'password'}
              placeholder="Confirm your password"
              className="border w-full rounded-md pl-[26px] pr-2 py-[8px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px] placeholder:text-[#667085] outline-none"
            />
            <img
              src="/password.svg"
              alt=""
              width={14}
              className="absolute bottom-[22px] left-[34px]"
            />
            <img
              src={confirmVisible ? 'dontshow.svg' : '/show.svg'}
              alt=""
              width={14}
              className="absolute bottom-[20px] right-[34px]"
              onClick={toggleConfirmVisibility}
            />
          </form>
          <div className="flex gap-[5px] items-center px-6">
            <div
              style={{
                backgroundColor: colorOne,
              }}
              className="w-[92px] h-[2px] rounded bg-[#D0D6E3]"
            ></div>
            <div
              style={{
                backgroundColor: colorTwo,
              }}
              className="w-[92px] h-[2px] rounded bg-[#D0D6E3]"
            ></div>
            <div
              style={{
                backgroundColor:
                  pwd.length >= 8 && checkForCapital(pwd) && checkForNumber(pwd)
                    ? '#50B848'
                    : '',
              }}
              className="w-[92px] h-[2px] rounded bg-[#D0D6E3]"
            ></div>
          </div>
          <div className="text-[9px] pt-[4px] px-8 text-[#454545]">
            <p className="py-[6px]">Password must contain:</p>
            <ul className="py-[4px]">
              <li className="flex gap-2 items-center pt-[2px]">
                <img
                  src={checkForCapital(pwd) ? '/check.svg' : '/no.svg'}
                  alt=""
                  width={11}
                />
                At least 1 uppercase
              </li>
              <li className="flex gap-2 items-center pt-[2px]">
                <img
                  src={checkForNumber(pwd) ? '/check.svg' : '/no.svg'}
                  alt=""
                  width={11}
                />
                At least 1 number
              </li>
              <li className="flex gap-2 items-center pt-[2px]">
                <img
                  src={pwd.length >= 8 ? '/check.svg' : '/no.svg'}
                  alt=""
                  width={11}
                />
                At least 8 characters
              </li>
            </ul>
          </div>
          <div className="px-6">
            <button
              style={{
                opacity: pwd && confirm && pwd === confirmPass ? 1 : 0.5,
              }}
              className="bg-[#36AAD9] text-white w-full py-[8px] mb-4 rounded-md mt-[12px] text-[10px] opacity-50"
              onClick={resetPassword}
            >
              {loading ? (
                <ClipLoader color="#36D7B7" loading={loading} size={18} />
              ) : (
                'Continue'
              )}
            </button>
            {/* <p className="text-center pt-4 text-[#667085] text-[9px]">
              Didn't receive the code?{' '}
              <span
                className="text-[#36AAD9] underline font-semibold"
                onClick={resendOTP}
              > */}
            {/* {resendOtp ? 'OTP sent!' : 'Click to resend code'} */}
            {/* </span>
            </p>
            <p className=" text-[#667085] text-[9px] opacity-60 flex gap-2 items-center justify-center pt-[10px]">
              <img src="/arrowLef.svg" alt="" width={9} />
              Back to create account
            </p> */}
          </div>
        </div>
      </div>
      {resetSuccess && <ResetSuccess showResetSuccess={showResetSuccess} />}
    </div>
  );
}
