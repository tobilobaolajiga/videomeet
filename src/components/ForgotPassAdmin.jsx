import { useNavigate } from 'react-router-dom';

export default function ForgotAdminPass() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center">
      <div className=" ml-[70px] mt-[80px] mb-[60px] basis-1/2 ">
        <div className=" pr-[120px] font-inter">
          <img src="/TM30.svg" alt="" className="mb-10" />
          <div>
            <p className="font-bold  text-[#101828] text-[20px] mt-12">
              Forgot Password
            </p>
            <p className="text-[#667085] text-[14px] mt-2 mb-8">
              Enter your email and we’ll send you a reset link.
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
                className="border w-full rounded mb-4 outline-none py-[8px] placeholder:text-[12px] px-4 font-inter text-[12px]"
                placeholder="Enter your email"
              />
            </form>

            <button className="w-full bg-[#36aad9] text-white rounded-md py-[8px] text-[12px]">
              Submit
            </button>
            <p className="text-center mt-2 text-[#36aad9] text-[12px] font-medium">
              Remember your password?{' '}
              <span
                className="text-[#36aad9] hover:underline cursor-pointer"
                onClick={() => {
                  navigate('/admin');
                }}
              >
                Login
              </span>
            </p>
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
