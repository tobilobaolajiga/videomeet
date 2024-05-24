import { ClipLoader } from 'react-spinners';

export default function MailReset({
  userMail,
  setUserMail,
  otpReset,
  otpLoading,
}) {
  return (
    <div>
      <div className=" fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer flex justify-center ">
        <div className="bg-white m-auto md:w-fit lg:w-[500px] md:h-fit lg:h-fit w-2/3 h-2/3 rounded-2xl font-inter sm:shadow-lg">
          <div className="flex flex-col items-center pt-[24px] border-b pb-[20px]">
            <div className="relative w-full flex justify-center items-center">
              <img src="/TM30.svg" alt="" width={80} />{' '}
              <img
                src="/cross.svg"
                alt=""
                width={14}
                className="absolute top-[4px] right-[25px]"
              />
            </div>

            <p className="text-[18px] font-bold pt-[12px] text-[#101828]">
              Password Reset
            </p>
            <p className="text-[#667085] text-[10px] tracking-tight">
              Enter your mail to reset your password
            </p>
          </div>
          <div className="px-8 pb-8 pt-4">
            <form action="" className="relative">
              <label
                htmlFor=""
                className="text-[11px] font-medium text-[#344054]"
              >
                Email address
                <span
                  className="text-[#36AAD9]
"
                >
                  *
                </span>
              </label>{' '}
              <br />
              <input
                type="text"
                value={userMail}
                onChange={(e) => setUserMail(e.target.value)}
                placeholder="Enter your email address"
                className="border w-full rounded-md pl-8 pr-4 py-[12px] text-[11px] mb-[6px] mt-[4px] placeholder:text-[9px]  placeholder:text-[#667085] outline-none"
              />
              <img
                src="/mail.svg"
                alt=""
                width={12}
                className="absolute top-[43px] left-[12px]"
              />
            </form>
            <button
              className="bg-[#36AAD9] text-white w-full py-[12px] rounded-md mt-6 text-[11px]"
              onClick={otpReset}
            >
              {otpLoading ? (
                <ClipLoader color="#ffffff" loading={otpLoading} size={16} />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
