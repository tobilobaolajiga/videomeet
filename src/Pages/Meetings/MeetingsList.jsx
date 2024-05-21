export default function MeetingsList() {
  return (
    <div className="mx-8 mt-2 border rounded-lg px-4 py-4 font-inter">
      <div className="flex justify-between items-center">
        <div className="relative border-b pb-4 flex gap-4 items-center ">
          <div className="flex gap-4 border bg-[#f6f6f6] text-[#1a1a1a] text-opacity-50 text-[12px]  py-[2px] px-[4px] rounded items-center justify-center">
            <p className="bg-white text-black font-semibold px-[8px] py-[4px] rounded">
              All
            </p>
            <p>Active</p>
            <p>Inactive</p>
          </div>
          <div className="relative  w-[300px]">
            <input
              type="text"
              className="border rounded-md placeholder:text-[12px] w-full pl-8 h-8 outline-none text-[12px]"
              placeholder="Search"
            />
            <img
              src="/search.svg"
              alt=""
              className="absolute top-[10px] left-2"
              width={15}
            />
          </div>
        </div>

        <div className="border p-2 flex rounded-md text-[#344054] gap-2 text-[12px] font-inter font-medium">
          Showing for: <img src="/dashCalendar.svg" alt="" width={16} />{' '}
          <span>Jan 6,2023 - Jan 12, 2023</span>
        </div>
      </div>
      <div className=" rounded-lg mt-4">
        <div>
          <ul className="flex text-[11px] justify-between items-center text-[#1a1a1a] text-opacity-60 bg-[#f7f7f7] px-4 py-2 font-DMSans border  rounded-t font-semibold h-[40px]">
            <li className="w-[180px]">Meeting Link</li>
            <li className="w-[140px]">Number of Participants</li>
            <li className="w-[100px]">Meeting Source</li>
            <li className="w-[120px] ">Date Created</li>
            <li className="w-[70px] flex items-center justify-center">
              Status
            </li>
            <li className="w-fit">Action</li>
          </ul>
        </div>
        <div className="bg-white border-x border-b rounded-b-lg">
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">12</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">7</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/instant.svg" alt="" width={15} />
                Instant
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>
              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">4</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">3</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/greyCalendar.svg" alt="" width={15} />
                Scheduled
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded py-[4px] flex justify-center items-center">
                Inactive
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">9</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded py-[4px] flex justify-center items-center">
                Inactive
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">11</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/greyCalendar.svg" alt="" width={15} />
                Scheduled
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded py-[4px] flex justify-center items-center">
                Inactive
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">2</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/instant.svg" alt="" width={15} />
                Instant
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded py-[4px] flex justify-center items-center">
                Inactive
              </li>
              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[50px] items-center">
              <li className="w-[180px] bg-[#36aad9] bg-opacity-10 text-[#36aad9] text-opacity-100 rounded px-[4px] py-[4px]">
                Meet.tm30.com/hbnj-njsa-khsd
              </li>
              <li className="w-[140px]">4</li>
              <li className="w-[100px] flex gap-2 items-center font-semibold">
                <img src="/link.svg" alt="" width={15} />
                Link
              </li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded py-[4px] flex justify-center items-center">
                Inactive
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between text-[11px] mt-4 font-inter">
        <div>
          <p className="text-[#667185] font-medium">Page 1 of 30</p>
        </div>
        <div>
          <ul className="flex gap-2 text-[#98a2b3]">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>10</li>
            <li>11</li>
          </ul>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p className="text-[#667185] font-medium">Go to page</p>
          <p className="border flex rounded px-2 py-[4px] gap-2 items-center justify-center text-[#98a2b3]">
            00 <img src="/chev.svg" alt="" width={8} />
          </p>
          <p className="border flex gap-2 items-center justify-center rounded px-2 py-[4px] text-[#667185] font-semibold">
            <img src="/arrowL.svg" alt="" width={12} />
            Previous
          </p>
          <p className="border flex rounded px-2 py-[4px] text-[#667185] gap-2 items-center justify-center font-semibold">
            Next <img src="/arrowR.svg" alt="" width={12} />
          </p>
        </div>
      </div>
    </div>
  );
}
