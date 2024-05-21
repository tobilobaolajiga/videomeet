export default function ReportsSquare() {
  return (
    <div className="flex w-fit ml-6">
      <div className="shadow-lg w-[257px] px-4 py-4 z-50 rounded-lg m-2 font-inter">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[40px] mr-2 rounded bg-[#36aad9]"></div>
            <div>
              <p className="text-[14px] font-semibold">Meetings conducted</p>
              <p className="text-[12px] text-[#818181]">Total</p>
            </div>
          </div>
          <div>
            <p className="flex gap-2 text-[14px] text-green-500 font-medium">
              1.6% <img src="/arrowUp.svg" alt="" width={10} />
            </p>
          </div>
        </div>
        <p className="text-[#1a1a1a] mt-6 text-[20px] font-semibold">1,209</p>
      </div>

      <div className="shadow-lg w-[257px] px-4 py-4 z-50 rounded-lg m-2 font-inter">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[40px] mr-2 rounded bg-[#fcb5c3]"></div>
            <div>
              <p className="text-[14px] font-semibold">Participant feedback</p>
              <p className="text-[12px] text-[#818181]">Total</p>
            </div>
          </div>
          <div>
            <p className="flex gap-2 text-[14px] text-green-500 font-medium">
              1.3% <img src="/arrowUp.svg" alt="" width={10} />
            </p>
          </div>
        </div>
        <p className="text-[#1a1a1a] mt-6 text-[20px] font-semibold">281</p>
      </div>

      <div className="shadow-lg w-[257px] px-4 py-4 z-50 rounded-lg m-2 font-inter">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[40px] mr-2 rounded bg-[#6036d9]"></div>
            <div>
              <p className="text-[14px] font-semibold">Meeting duration</p>
              <p className="text-[12px] text-[#818181]">Total</p>
            </div>
          </div>
          <div>
            <p className="flex gap-[4px] text-[14px] text-red-500 font-medium">
              0.9% <img src="/arrowDown.svg" alt="" width={18} />
            </p>
          </div>
        </div>
        <p className="text-[#1a1a1a] mt-6 text-[20px] font-semibold">
          <span>00</span>
          <span className=" text-[#1a1a1a] text-opacity-50">h</span>
          <span>:56</span>
          <span className=" text-[#1a1a1a] text-opacity-50">m</span>
          <span>:21</span>
          <span className=" text-[#1a1a1a] text-opacity-50">s</span>
        </p>
      </div>
      <div className="shadow-lg w-[257px] px-4 py-4 z-50 rounded-lg m-2 font-inter">
        <div className="flex justify-between ">
          <div className="flex ">
            <div className="w-[4px] h-[40px] mr-2 rounded bg-[#a1a0f4]"></div>
            <div>
              <p className="text-[14px] font-semibold">Attendance rates</p>
              <p className="text-[12px] text-[#818181]">Total</p>
            </div>
          </div>
          <div>
            <p className="flex gap-2 text-[14px] text-green-500 font-medium">
              1.8% <img src="/arrowUp.svg" alt="" width={10} />
            </p>
          </div>
        </div>
        <p className="text-[#1a1a1a] mt-6 text-[20px] font-semibold">56%</p>
      </div>
    </div>
  );
}
