export default function ArcGraph() {
  return (
    <div className="w-full mr-8 font-inter">
      <div className="h-50% z-50 rounded-lg border mt-2">
        <div className=" px-4 py-4">
          <p className="text-[#131313] font-semibold text-[14px]">
            Device Type
          </p>
          <p className="text-[#818181] text-[11px] mt-[4px]">Total: 7,963</p>
        </div>
        <div className="flex justify-evenly border-t pt-4 text-[#615e83] text-[11px] mx-4">
          <p>Mobile</p>
          <p>Desktop</p>
          <p>Tablet</p>
        </div>
        <img src="/arc.svg" alt="" className="px-6 mt-4 pb-[12px]" />
      </div>

      <div className="h-fit z-50 rounded-lg border mt-4">
        <div className=" px-4 py-4">
          <p className="text-[#131313] font-semibold text-[14px]">
            Participants engagement
          </p>
          <p className="text-[#818181] text-[11px] mt-[4px]">
            Total(Last Month): 32,487
          </p>
        </div>
        <div className="flex justify-evenly border-t pt-4 text-[#615e83] text-[11px] mx-4">
          <p>Last month</p>
          <p>This month</p>
        </div>
        <img src="/arc.svg" alt="" className="px-6 mt-6 pb-[12px]" />
      </div>
    </div>
  );
}
