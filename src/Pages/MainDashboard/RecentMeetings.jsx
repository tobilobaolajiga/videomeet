export default function RecentMeetings() {
  return (
    <div className="mx-8 mt-2 border rounded-lg px-4 py-4 font-inter">
      <div className="flex justify-between items-center  border-b mb-2">
        <div>
          {' '}
          <p className="font-semibold">Recent Meeting</p>
          <p className="text-[#667085] text-[12px] pb-4">
            See your latest meeting created and conducted during reporting
            period
          </p>
        </div>
        <p className="text-[12px] border rounded-md px-[6px] py-[6px]">
          See all
        </p>
      </div>
      <div className=" rounded-lg mt-4">
        <div>
          <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 bg-[#f7f7f7] px-4 py-2 font-DMSans border font-semibold">
            <li className="w-[180px]">Meeting link</li>
            <li className="w-[140px]">Number of Participants</li>
            <li className="w-[100px]">Meeting Source</li>
            <li className="w-[70px] flex items-center justify-center">
              Status
            </li>
            <li className="w-[150px]">Date Created</li>
          </ul>
        </div>
        <div className="bg-white border-x border-b rounded-b-lg">
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">4</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>
              <li className="w-[150px] font-inter">12/05/24, 10:11:04 am</li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">12</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/instant.svg" alt="" width={15} />
                Instant
              </li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>
              <li className="w-[150px] font-inter">12/05/24, 10:11:04 am</li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">3</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>
              <li className="w-[150px] font-inter">12/05/24, 10:11:04 am</li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">7</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/greyCalendar.svg" alt="" width={15} />
                Scheduled
              </li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>
              <li className="w-[150px] font-inter">12/05/24, 10:11:04 am</li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">4</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>
              <li className="w-[150px] font-inter">12/05/24, 10:11:04 am</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
