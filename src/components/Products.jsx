export default function Products({ products, showProducts }) {
  return (
    <div>
      {products && (
        <div className="flex justify-center items-center shadow-lg bg-[#f4f4f4] rounded-xl sm:mx-auto lg:w-2/5 lg:h-3/8 fixed z-50 right-8 -mt-2 py-4 px-4  lg:animate__animated lg:animate__slideInDown w-fit h-fit  ">
          <div className="w-full h-full">
            <div className="flex lg:justify-between justify-center">
              <p className="font-DMSans text-[11px] font-bold text-[#5f5f67] ">
                TM30 Products
                <span
                  className="text-[#36AAD9]
"
                >
                  *
                </span>
              </p>
              <img
                src="/cross.svg"
                alt=""
                width={10}
                onClick={showProducts}
                className="cursor-pointer sm:hidden lg:inline "
              />
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:justify-center lg:flex gap-2 mt-4 items-center">
              <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
                {' '}
                <img src="/agency.svg" alt="" width={50} />
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://paymybills.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/pmb.svg" alt="" width={80} />
                </a>
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://hopebank.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/hope.svg" alt="" width={80} />
                </a>
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <img src="/payattitude.svg" alt="" width={80} />
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <img src="/pos.svg" alt="" width={80} />
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
                <img src="/bi.svg" alt="" width={50} />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 lg:flex gap-2 mt-4 items-center">
              <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://saas.tm30.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/tmsaas.svg" alt="" width={100} />
                </a>
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://mybackupcash.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/backUpCash.svg" alt="" width={80} />
                </a>
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://pxmonitoring.up-ng.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/payarena.svg" alt="" width={80} />
                </a>
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <img src="/partyTime.svg" alt="" width={80} />
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <img src="/homes.svg" alt="" width={80} />
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://moneyfieldmfb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <img src="/moneyField.svg" alt="" width={60} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
