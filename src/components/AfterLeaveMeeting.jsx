import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from './Products';
export default function AfterLeaveMeeting({
  isVideoOn,
  isAudioOn,
  displayName,
  meetingName,
  showProducts,
  products,
}) {
  const [starOne, setStarOne] = useState('/rate.svg');
  const fillStarOne = () => {
    setStarOne('/starFill.svg');
    if (
      starTwo == '/starFill.svg' ||
      starThree == '/starFill.svg' ||
      starFour == '/starFill.svg' ||
      starFive == '/starFill.svg'
    ) {
      setStarTwo('/rate.svg');
      setStarThree('/rate.svg');
      setStarFour('/rate.svg');
      setStarFive('/rate.svg');
    }
  };
  const [starTwo, setStarTwo] = useState('/rate.svg');
  const fillStarTwo = () => {
    setStarOne('/starFill.svg');
    setStarTwo('/starFill.svg');
    if (
      starThree == '/starFill.svg' ||
      starFour == '/starFill.svg' ||
      starFive == '/starFill.svg'
    ) {
      setStarThree('/rate.svg');
      setStarFour('/rate.svg');
      setStarFive('/rate.svg');
    }
  };
  const [starThree, setStarThree] = useState('/rate.svg');
  const fillStarThree = () => {
    setStarOne('/starFill.svg');
    setStarTwo('/starFill.svg');
    setStarThree('/starFill.svg');
    if (starFour == '/starFill.svg' || starFive == '/starFill.svg') {
      setStarFour('/rate.svg');
      setStarFive('/rate.svg');
    }
  };
  const [starFour, setStarFour] = useState('/rate.svg');
  const fillStarFour = () => {
    setStarOne('/starFill.svg');
    setStarTwo('/starFill.svg');
    setStarThree('/starFill.svg');
    setStarFour('/starFill.svg');
    if (starFive == '/starFill.svg') {
      setStarFive('/rate.svg');
    }
  };
  const [starFive, setStarFive] = useState('/rate.svg');
  const fillStarFive = () => {
    setStarOne('/starFill.svg');
    setStarTwo('/starFill.svg');
    setStarThree('/starFill.svg');
    setStarFour('/starFill.svg');
    setStarFive('/starFill.svg');
  };
  const keysToRemove = [
    'meeting',
    'meetingCode',
    'meetingDeets',
    'admitName',
    'admitRoom',
    'admitMsg',
    'meetingName',
    'meetingRef',
    'hostAgent',
    'meeting',
    'meetingId',
    'userAgent',
    'videoId',
    'meetId',
  ];
  const navigate = useNavigate();
  const goHome = () => {
    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });
    navigate('/');
  };
  const meetingCode = localStorage.getItem('meetingCode');
  const rejoin = () => {
    navigate(`/video/${meetingCode}`, {
      state: {
        isVideoOn,
        isAudioOn,
        displayName,
        meetingName,
      },
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b py-4 px-6">
        <img
          src="/TM30.svg"
          alt=""
          className="w-[120px] lg:h-[34px] h-[28px]"
        />
        <img
          src="/fe_app-menu.svg"
          alt=""
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={showProducts}
        />
      </div>
      <div className="h-screen w-screen flex justify-center flex-col items-center font-inter">
        <p className="text-[#1a1a1a] text-[20px]">
          You are no longer in the meeting
        </p>
        <div className="flex gap-2 my-4 justify-center items-center w-[320px]">
          <button
            className="text-[#36aad9] bg-white text-[16px] px-6 py-[6px] border rounded-md border-[#36aad9]"
            onClick={rejoin}
          >
            Rejoin
          </button>
          <button
            className="bg-[#36aad9] text-white px-4 py-2 rounded text-[16px]"
            onClick={goHome}
          >
            Back to Home Screen
          </button>
        </div>
        <div className="shadow-md border px-[12px] py-4 text-[14px] mt-2 rounded-md">
          <p>How would you rate the audio and video?</p>
          <div className="flex gap-2 items-center justify-center my-4">
            <img
              src={starOne}
              alt=""
              width={35}
              onClick={fillStarOne}
              className="cursor-pointer"
            />
            <img
              src={starTwo}
              alt=""
              width={35}
              onClick={fillStarTwo}
              className="cursor-pointer"
            />
            <img
              src={starThree}
              alt=""
              width={35}
              onClick={fillStarThree}
              className="cursor-pointer"
            />
            <img
              src={starFour}
              alt=""
              width={35}
              onClick={fillStarFour}
              className="cursor-pointer"
            />
            <img
              src={starFive}
              alt=""
              width={35}
              onClick={fillStarFive}
              className="cursor-pointer"
            />
          </div>
          <div className="mt-4 pt-2 relative">
            <label
              htmlFor=""
              className="border-t border-x flex justify-center items-center rounded-t py-2 font-medium"
            >
              Anything that can be improved?
            </label>{' '}
            <textarea
              type="text"
              className="border h-[120px] w-[280px] rounded-b placeholder:text-[10px] px-2 py-2 placeholder:absolute placeholder:top-2 outline-none text-[10px] shadow-md resize-none "
              placeholder="Your feedback(optional)"
            />
          </div>
          <button className="w-full p-2 bg-[#36aad9] rounded text-white text-[12px] mt-2">
            Submit
          </button>
        </div>
      </div>
      <Products products={products} showProducts={showProducts} />
    </div>
  );
}
