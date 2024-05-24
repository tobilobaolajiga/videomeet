export default function BarChart() {
  return (
    <div>
      <div className="mx-8 rounded-lg shadow-md py-4 px-4 border my-2 font-inter">
        <div className="border-b pb-4">
          <div className="flex gap-4 border bg-[#f6f6f6] text-[#1a1a1a] text-opacity-50 text-[12px]  py-[2px] px-[4px] w-fit rounded items-center">
            <p className="bg-white text-black font-semibold px-[8px] py-[4px] rounded">
              Meeting
            </p>
            <p className="pr-[4px]">Participant</p>
          </div>
        </div>

        <div className="border-b pb-2 pt-2">
          <p className="font-semibold">Meeting frequency trends</p>
          <p className="text-[12px] text-[#667085] ">
            See how your meetings conducted during reporting period
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="border rounded-lg px-2 text-[11px] text-[#667085] font-medium flex justify-center items-center">
            Analysis of meeting conducted over time
          </p>
          <div className="border p-2 flex rounded-md text-[#344054] gap-2 text-[11px] font-inter font-medium">
            Showing for: <img src="/dashCalendar.svg" alt="" width={16} />{' '}
            <span>Jan 6,2023 - Jan 12, 2023</span>
          </div>
        </div>
        <img src="/bar.svg" alt="" className="mt-6 border-b pb-6 " />
      </div>
    </div>
  );
}
