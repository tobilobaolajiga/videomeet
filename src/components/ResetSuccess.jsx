import { Link } from 'react-router-dom';

export default function ResetSuccess({ showResetSuccess }) {
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer flex justify-center ">
        <div className="bg-white m-auto w-1/3 h-fit rounded-2xl font-inter sm:shadow-lg pb-4 sm:px-2">
          <div className="flex flex-col items-center py-[20px] ">
            <img src="Animation.gif" alt="" />
            <p className="text-[16px] font-bold pt-[12px] text-[#101828]">
              Password Reset Successfully
            </p>
          </div>

          <div className="px-8 pb-8 pt-4">
            <button
              className="bg-[#36AAD9] text-white w-full py-[9px] rounded-md mt-[14px] text-[10px] "
              onClick={showResetSuccess}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
