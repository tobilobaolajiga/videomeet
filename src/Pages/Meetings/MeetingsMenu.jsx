export default function MeetingsMenu() {
  return (
    <div className="bg-[#f6f6f6] fixed left-0 h-screen  w-1/5 flex flex-col justify-between my-4 ml-4 rounded-lg font-inter">
      <div>
        <div className="flex place-content-center py-6 border-b">
          <img src="/TM30.svg" alt="" className="h-[34px]" />
        </div>
        <p className="py-4 mx-4 text-[#98a2b3] text-[12px]">Main</p>
        <ul className="flex flex-col justify-center ml-6 font-inter  gap-6">
          <li className="flex gap-4 text-[12px] text-[#5f5f5f]">
            <img src="/greyDash.svg" alt="" width={16} />
            Dashboard
          </li>
          <li className="flex gap-4 text-[12px] text-[#5f5f5f]">
            <img src="/users.svg" alt="" width={16} />
            Participants
          </li>
          <li className="flex gap-4 text-[12px] w-[140px] bg-white rounded px-2 py-[6px] font-bold -ml-2">
            <img src="/blueMeet.svg" alt="" width={16} />
            Meetings
          </li>
          <li className="flex gap-4 text-[12px] text-[#5f5f5f]">
            <img src="/report.svg" alt="" width={16} />
            Report & Analytics
          </li>
        </ul>
      </div>
      <div>
        <ul className="ml-6 text-[12px] [#5f5f5f] gap-6 flex flex-col justify-center pb-6">
          <li className="flex gap-2">
            <img src="/gem.svg" alt="" width={16} />
            Support center
          </li>
          <li className="flex gap-2 ">
            <img src="/set.svg" alt="" width={16} />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
}
