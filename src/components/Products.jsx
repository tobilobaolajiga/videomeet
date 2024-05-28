import { useState } from 'react';
import Agency from '../ProductModals/Agency';
import Pmb from '../ProductModals/Pmb';
import Hope from '../ProductModals/Hope';
import PayAttitude from '../ProductModals/PayAttitude';
import Tmsaas from '../ProductModals/Tmsaas';
import BackUpCash from '../ProductModals/BackupCash';
import Payarena from '../ProductModals/Payarena';
import MoneyField from '../ProductModals/MoneyField';

export default function Products({ products, showProducts }) {
  const [agency, setAgency] = useState(false);
  const [pmb, setPmb] = useState(false);
  const [hope, setHope] = useState(false);
  const [pay, setPay] = useState(false);
  const [tmSaas, setTmsaas] = useState(false);
  const [backup, setBackup] = useState(false);
  const [payArena, setPayarena] = useState(false);
  const [money, setMoney] = useState(false);

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
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setAgency(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href=" http://agencybanking.tm30.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/agency.svg" alt="" width={50} />
                </a>
                {agency && <Agency setAgency={setAgency} />}
              </div>
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setPmb(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://paymybills.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/pmb.svg" alt="" width={80} />
                </a>
                {pmb && <Pmb setPmb={setPmb} />}
              </div>
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setHope(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://hopebank.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/hope.svg" alt="" width={80} />
                </a>
                {hope && <Hope setHope={setHope} />}
              </div>
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setPay(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://payattitude.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/payattitude.svg" alt="" width={80} />{' '}
                </a>
                {pay && <PayAttitude setPay={setPay} />}
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://softpos.tm30.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/pos.svg" alt="" width={80} />
                </a>
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center">
                <img src="/bi.svg" alt="" width={50} />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 lg:flex gap-2 mt-4 items-center">
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setTmsaas(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://saas.tm30.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/tmsaas.svg" alt="" width={100} />
                </a>
                {tmSaas && <Tmsaas setTmsaas={setTmsaas} />}
              </div>
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setBackup(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://mybackupcash.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/backUpCash.svg" alt="" width={80} />
                </a>
                {backup && <BackUpCash setBackup={setBackup} />}
              </div>
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setPayarena(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://pxmonitoring.up-ng.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/payarena.svg" alt="" width={80} />
                </a>
                {payArena && <Payarena setPayarena={setPayarena} />}
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <img src="/partyTime.svg" alt="" width={80} />
              </div>
              <div className="bg-white rounded-md px-2 py-2 basis-1/6 w-[100px] h-[60px] flex justify-center">
                <a
                  className="flex justify-center"
                  href="https://residify.ng/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/homes.svg" alt="" width={80} />
                </a>
              </div>
              <div
                className="bg-white rounded-md px-2 py-2 basis-1/6  w-[100px] h-[60px] flex justify-center"
                onMouseEnter={() => {
                  setMoney(true);
                }}
              >
                <a
                  className="flex justify-center"
                  href="https://moneyfieldmfb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <img src="/moneyField.svg" alt="" width={60} />
                </a>
                {money && <MoneyField setMoney={setMoney} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
