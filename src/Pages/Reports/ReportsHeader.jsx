export default function ReportsHeader() {
  return (
    <div>
      <div className="flex justify-between items-center mx-10 my-6 ">
        <div>
          <p className="text-[#090814] font-bold text-[28px] font-inter">
            Report & Analytics
          </p>
          <p className="text-[#848d87] text-[12px] font-inter">
            All general information appears in this field.
          </p>
        </div>
        <div className="border p-2 flex rounded-md text-[#344054] gap-2 text-[12px] font-inter font-medium">
          Showing for: <img src="/dashCalendar.svg" alt="" width={16} />{' '}
          <span>Jan 6,2023 - Jan 12, 2023</span>
        </div>
      </div>
    </div>
  );
}
