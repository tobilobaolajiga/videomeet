import { useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import ResetPassword from './ResetPassword';

export default function ResetOTP({
  resendOTP,
  resetOtp,
  userMail,
  setResetOtp,
  otpReset,
}) {
  const [loading, setLoading] = useState(false);
  // const userID = userId.current;
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');
  // const [error, setError] = useState('');

  const OTP = inputOne + inputTwo + inputThree + inputFour;
  const [error, setError] = useState('');
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();

  const focusNextInput = (e, currentRef, nextRef) => {
    if (currentRef.current) {
      nextRef.current.focus();
    }
  };

  const handleChange1 = (e, input1Ref, input2Ref) => {
    setInputOne(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, oneRef, twoRef);
    }
  };
  const handleChange2 = (e, input2Ref, input3Ref) => {
    setInputTwo(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, twoRef, threeRef);
    }
  };
  const handleChange3 = (e, input3Ref, input4Ref) => {
    setInputThree(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, threeRef, fourRef);
    }
  };
  const handleChange4 = (e, input4Ref) => {
    setInputFour(e.target.value);
    const { value } = e.target;
    if (value.length === e.target.maxLength) {
      focusNextInput(e, threeRef, fourRef);
    }
    handleBlurLastInput();
  };
  const handleBlurLastInput = () => {
    fourRef.current.blur();
  };

  const closeResetOtp = () => {
    setResetOtp(false);
  };
  const [resetPwd, setResetPwd] = useState(false);
  const showResetPwd = () => {
    console.log('click');

    setResetPwd(!resetPwd);
  };
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer flex justify-center ">
        <div className="bg-white m-auto w-fit lg:h-fit h-fit rounded-2xl font-inter sm:shadow-lg pb-4">
          <div className="flex flex-col items-center py-[20px] border-b">
            <div className="relative w-full flex justify-center items-center">
              <img src="/TM30.svg" alt="" width={60} className="mt-[12px]" />
              <img
                src="/cross.svg"
                alt=""
                width={14}
                className="absolute top-[4px] right-[25px]"
                onClick={closeResetOtp}
              />
            </div>
            <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
              Request Code{' '}
            </p>
            <p className="text-[#667085] text-[10px] tracking-tight">
              {!error ? 'We sent a code to you' : error}
            </p>
          </div>
          <div className="px-8 pb-8 pt-4">
            <ul className="flex gap-[12px] items-center">
              <li>
                <input
                  type="text"
                  autoFocus
                  ref={oneRef}
                  value={inputOne}
                  maxLength={1}
                  onChange={(e) => handleChange1(e, oneRef, twoRef)}
                  style={{ borderColor: inputOne ? '#36AAD9' : '' }}
                  className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl"
                />
              </li>
              <li>
                <input
                  type="text"
                  ref={twoRef}
                  value={inputTwo}
                  maxLength={1}
                  onChange={(e) => handleChange2(e, twoRef, threeRef)}
                  style={{ borderColor: inputTwo ? '#36AAD9' : '' }}
                  className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl"
                />
              </li>
              <li>
                <input
                  ref={threeRef}
                  type="text"
                  value={inputThree}
                  maxLength={1}
                  onChange={(e) => handleChange3(e, threeRef, fourRef)}
                  style={{ borderColor: inputThree ? '#36AAD9' : '' }}
                  className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl"
                />
              </li>
              <li>
                <input
                  type="text"
                  ref={fourRef}
                  value={inputFour}
                  maxLength={1}
                  onChange={(e) => handleChange4(e, fourRef, null)}
                  style={{ borderColor: inputFour ? '#36AAD9' : '' }}
                  className="w-[60px] h-[50px] border-2 rounded-sm focus:outline-[#36AAD9] text-center font-inter font-bold text-3xl "
                />
              </li>
            </ul>
            <button
              className="bg-[#36AAD9] text-white w-full py-[8px] rounded-md mt-[20px] text-[10px]"
              onClick={showResetPwd}
            >
              {loading ? (
                <ClipLoader color="#36D7B7" loading={loading} size={18} />
              ) : (
                'Continue'
              )}
            </button>
            <p className="text-center  text-[#667085] text-[10px] pt-[12px] ">
              Didn't receive the code?{' '}
              <span className="text-[#36AAD9] underline font-semibold">
                Click to resend code
              </span>
            </p>
          </div>
        </div>
      </div>

      {resetPwd && (
        <ResetPassword
          resendOTP={resendOTP}
          showResetPwd={showResetPwd}
          userMail={userMail}
          OTP={OTP}
          setResetPwd={setResetPwd}
        />
      )}
    </div>
  );
}
