import Marquee from 'react-fast-marquee';
export default function Reviews() {
  return (
    <div className="mt-10 mx-12">
      <Marquee>
        <div className="flex gap-[50px]">
          <div className="transform rotate-6 mx-4">
            <div className="bg-white shadow-lg rounded-lg w-[270px] h-fit px-6 py-4 ">
              <div className="font-DMSans text-[#101028]">
                <p className=" text-[12px] font-semibold break-words">
                  Simple and easy-to-use video conferencing platform.
                </p>
                <div className="flex items-center gap-2 mt-[4px]">
                  <img src="/imgOne.svg" alt="" width={60} />
                  <div>
                    <p className="text-[14px] font-semibold">Wura Collins</p>
                    <p className="text-[#667085] font-normal text-[11px]">
                      Founder, SEOBig
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transform -rotate-6 mx-6">
            <div className="bg-white shadow-lg rounded-lg w-[270px] h-fit px-6 py-4 ">
              <div className="font-DMSans text-[#101028]">
                <p className=" text-[12px] font-semibold break-words">
                  Well-suited for organizations already using TM30 products.
                </p>
                <div className="flex items-center gap-2 mt-[4px]">
                  <img src="/imgBad.svg" alt="" width={60} />
                  <div>
                    <p className="text-[14px] font-semibold">Badmus Adekunle</p>
                    <p className="text-[#667085] font-normal text-[11px]">
                      Co-founder & CEO Tartie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transform -rotate-6 mx-6">
            <div className="bg-white shadow-lg rounded-lg w-[270px] h-fit px-6 py-4 ">
              <div className="font-DMSans text-[#101028]">
                <p className=" text-[12px] font-semibold break-words">
                  Offers features such as screen-sharing, streaming and chat.
                </p>
                <div className="flex items-center gap-2 mt-[4px]">
                  <img src="/imgTwo.svg" alt="" width={60} />
                  <div>
                    <p className="text-[14px] font-semibold">Michael Adetona</p>
                    <p className="text-[#667085] font-normal text-[11px]">
                      Team Lead, Deslom.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transform rotate-6 mx-6">
            <div className="bg-white shadow-lg rounded-lg w-[270px] h-fit px-6 py-4 ">
              <div className="font-DMSans text-[#101028]">
                <p className=" text-[12px] font-semibold break-words">
                  Widely used and user-friendly platform.
                </p>
                <div className="flex items-center gap-2 mt-[4px]">
                  <img src="/imgDem.svg" alt="" width={60} />
                  <div>
                    <p className="text-[14px] font-semibold">Demi Adetokunbo</p>
                    <p className="text-[#667085] font-normal text-[11px]">
                      Co-Founder & CEO Shaffy Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}
