import ImageSlider from './ImageSlider';
import CreateMeetingOptions from './CreateMeetingOptions';
import MobileModal from './MobileModal';
import { useState } from 'react';

export default function Hero({
  showLogin,
  closeLogin,
  showOptions,
  options,
  setOptions,
  login,
  closeOptions,
  showCreateAccount,
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  otp,
  setOTP,
  showOtp,
  resendOTP,
  df,
  setId,
  setNewAccount,
  closeCreate,
  setLogin,
  verifyOTP,
  meetingLink,
}) {
  return (
    <div className="  flex flex-col lg:flex-row bg-white items-center justify-between">
      <div className="px-[55px]  flex justify-center items-center mt-6">
        <div className="flex flex-col gap-6 font-DMSans basis-[1000px] sm:text-center sm:justify-center sm:items-center lg:block lg:text-left">
          <div className=" sm:text-[34px] md:text-[39px] font-bold">
            <p className="text-[#36AAD9]">
              Connect, Collaborate, Succeed{' '}
              <span className="-mt-[5px] text-black">Together</span>
            </p>
          </div>
          <p className="sm:text-[13px] md:text-[16px] text-[#667185] mb-2 mt-[4px] font-normal leading-tight lg:mt-4">
            TMmeet makes it easier for us to conduct meetings and <br />
            video calls from various places, anytime, anywhere.
          </p>

          <div className=" relative lg:w-full lg:mt-6">
            <input
              type="text"
              placeholder="Enter a link"
              className="border border-[#c6c6c6] rounded-lg -mb-2 px-12 sm:w-[300px] lg:w-8/12 py-[9px]  sm:placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#1F1F1F] placeholder:opacity-80 outline-none sm:text-[13px] md:text-[15px]"
              onClick={showLogin}
            />{' '}
            <img
              src="/link.svg"
              alt=""
              className="absolute w-[14x] h-[16px] top-[12px] left-[20px]"
            />{' '}
            <button className="text-white bg-[#36AAD9] bg-opacity-50 py-[7px] px-[7px] sm:text-[10px] md:text-[12px] rounded absolute top-[5px] sm:right-[6px] lg:right-[225px]">
              Join Meeting
            </button>
          </div>

          <div className=" flex sm:flex-col lg:flex-row sm:gap-[8px] lg:justify-between w-[215px] lg:mt-8 relative lg:w-8/12">
            <button
              className="flex gap-2 items-center justify-center bg-[#36AAD9] rounded-lg text-white font-medium border-none outline-none px-6 py-[9px] sm:text-[13px] md:text-[15px] relative sm:w-[215px]"
              onClick={showOptions}
            >
              <img src="/video.svg" alt="" className="w-[20px] h-[20px]" />
              Create Meeting
            </button>
            <CreateMeetingOptions
              options={options}
              showOptions={showOptions}
              setOptions={setOptions}
              showLogin={showLogin}
              closeLogin={closeLogin}
              closeOptions={closeOptions}
              showCreateAccount={showCreateAccount}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
              otp={otp}
              setOTP={setOTP}
              showOtp={showOtp}
              resendOTP={resendOTP}
              df={df}
              setId={setId}
              setNewAccount={setNewAccount}
              closeCreate={closeCreate}
              setLogin={setLogin}
              verifyOTP={verifyOTP}
              meetingLink={meetingLink}
            />
            <button
              className="text-[#36AAD9] sm:text-[13px] lg:text-[15px] flex gap-2 items-center font-medium bg-white border-[#36AAD9] border rounded-lg outline-none px-4 py-[9px]"
              onClick={showLogin}
            >
              <img src="/calendar.svg" alt="" className="w-[20px] h-[18px]" />
              Schedule your Meeting
            </button>
          </div>
        </div>
      </div>
      <div>
        <ImageSlider />
      </div>
    </div>
  );
}
