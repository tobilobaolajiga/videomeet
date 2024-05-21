export default function PartInteraction() {
  return (
    <div>
      <div className="ml-8 mr-4 rounded-lg shadow-md py-4 px-4 border my-2 font-inter ">
        <div className="border-b pb-2">
          <p className="font-semibold">Participant interaction frequency</p>
          <p className="text-[12px] text-[#667085] ">
            See how your interaction was conducted during reporting period
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="border rounded-lg px-2 text-[11px] text-[#667085] font-medium flex justify-center items-center">
            Analysis of the level of participant interaction
          </p>
          <div className="border p-2 flex rounded-md text-[#344054] gap-2 text-[11px] font-inter font-medium">
            Showing for: <img src="/dashCalendar.svg" alt="" width={16} />{' '}
            <span>Jan 1,2024 - Dec 31, 2023</span>
          </div>
        </div>
        <img
          src="/chartone.svg"
          alt=""
          className="mt-6 border-b pb-6"
          width={790}
        />
      </div>
    </div>
  );
}
