export default function SquareStats() {
  return (
    <div className="flex justify-evenly w-full mt-2">
      <div className=" w-[280px] px-4 py-2 z-50 rounded-lg m-2 font-inter bg-[#36aad9]">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[36px] mr-2 rounded bg-white"></div>
            <div>
              <p className="text-[12px] font-semibold text-white">
                Meeting Volume
              </p>
              <p className="text-[10px] text-white">Total</p>
            </div>
          </div>
          <div>
            <p className="flex gap-2 text-[10px] text-green-500 font-medium bg-white rounded-md px-[4px]">
              1.6% <img src="/arrowUp.svg" alt="" width={7} />
            </p>
          </div>
        </div>
        <p className="text-white mt-2 text-[20px] font-semibold">1,209</p>
      </div>
      <div className="w-[280px] px-4 py-2 z-50 rounded-lg m-2 font-inter bg-[#36aad9] bg-opacity-10">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[36px] mr-2 rounded bg-[#36aad9]"></div>
            <div>
              <p className="text-[12px] font-semibold text-[#36aad9]">
                Peak Meeting Times
              </p>
              <p className="text-[10px] text-[#36aad9]">Total</p>
            </div>
          </div>
        </div>
        <p className="text-[#36aad9] mt-2 text-[20px] font-semibold">Monday</p>
      </div>
      <div className="w-[280px] px-4 py-2 z-50 rounded-lg m-2 font-inter bg-[#36aad9] bg-opacity-10">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[36px] mr-2 rounded bg-[#36aad9]"></div>
            <div>
              <p className="text-[12px] font-semibold text-[#36aad9]">
                Recurring Meetings
              </p>
              <p className="text-[10px] text-[#36aad9]">Total</p>
            </div>
          </div>
        </div>
        <p className="text-[#36aad9] mt-2 text-[20px] font-semibold">902</p>
      </div>
    </div>
  );
}
