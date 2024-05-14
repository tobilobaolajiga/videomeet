export default function PartList() {
  return (
    <div className="mx-8 mt-2 border rounded-lg px-4 py-4 font-inter">
      <div className="relative border-b pb-4 ">
        <input
          type="text"
          className="border rounded-md placeholder:text-[12px] pl-8 h-8 w-2/5 outline-none text-[12px]"
          placeholder="Search"
        />
        <img
          src="/search.svg"
          alt=""
          className="absolute top-[10px] left-2"
          width={15}
        />
      </div>
      <div className=" rounded-lg mt-4">
        <div>
          <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 bg-[#f7f7f7] px-4 py-2 font-DMSans border  rounded-t font-semibold h-[40px]">
            <li className="w-[120px]">Participant Name</li>
            <li className="w-[140px]">Email Address</li>
            <li className="w-[120px]">Last Login</li>
            <li className="w-[120px] ">Date Created</li>
            <li className="w-[70px] flex items-center justify-center">
              Status
            </li>
            <li className="w-fit">Action</li>
          </ul>
        </div>
        <div className="bg-white border-x border-b rounded-b-lg">
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px] ">Femi Adekunle</li>
              <li className="w-[140px]">femiadekunle1@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px]">Uzogie Albert</li>
              <li className="w-[140px]">uzogiealbert@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
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
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px]">Musa Mohammed</li>
              <li className="w-[140px]">musamohammed@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px] ">Adesola Akinwunmi</li>
              <li className="w-[140px]">adesolaakinwunmi@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>
              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px]">Femi Adekunle</li>
              <li className="w-[140px]">femiadekunle@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px] ">Femi Adekunle</li>
              <li className="w-[140px]">femiadekunle1@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px]   flex justify-center items-center">
                <span className="bg-[#39b44a] bg-opacity-15 text-[#39b44a] rounded px-2 py-[4px]">
                  Active
                </span>
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px]">Uzogie Albert</li>
              <li className="w-[140px]">uzogiealbert@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
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
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px]">Musa Mohammed</li>
              <li className="w-[140px]">musamohammed@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px] ">Adesola Akinwunmi</li>
              <li className="w-[140px]">adesolaakinwunmi@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>
              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-[11px] justify-between text-[#1a1a1a] text-opacity-60 px-4 py-2 font-DMSans border-b h-[40px]">
              <li className="w-[120px]">Femi Adekunle</li>
              <li className="w-[140px]">femiadekunle@gmail.com</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[120px] font-inter">12/05/24, 10:11:04 am</li>
              <li className="w-[70px] bg-[#d2b729] bg-opacity-15 text-[#d2b729] rounded px-[4px] flex items-center">
                Not Started
              </li>

              <li className="w-fit text-[#36aad9] font-medium">
                {' '}
                <a href="">View</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <p>Page 1 of 30</p>
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
