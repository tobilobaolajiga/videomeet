export default function MeetingsNav() {
  return (
    <div className="flex  h-fit justify-between items-center w-full pt-8 pb-[26px] border-b  px-10">
      <div className="font-inter text-[12px] text-[#999999]">
        Pages /<span className="text-[#212121] font-medium"> Meetings</span>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex border-r pr-2 mr-4">
          <img src="/bell.svg" alt="" width={40} />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <img src="/albert.svg" alt="" width={40} />
          </div>
          <div className="font-inter">
            <p className="text-[12px] font-[#212121] font-semibold">
              Albert Abiodun
            </p>
            <p className="text-[10px] font-[#999999]">System Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
