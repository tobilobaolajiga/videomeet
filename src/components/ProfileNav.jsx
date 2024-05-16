import { useEffect, useRef, useState } from 'react';
import Products from './Products';
import MobileModal from './MobileModal';

export default function ProfileNav({
  profileDrop,
  showProfDrop,
  setProfileDrop,
  showProducts,
  products,
  mobileModal,
  showMobileModal,
}) {
  const refreshed = useRef(false);
  const userData = JSON.parse(localStorage.getItem('userData'));
  // useEffect(() => {
  //   if (!refreshed.current) {
  //     // window.location.assign(window.location.pathname);
  //     refreshed.current = true;
  //   }
  // }, []);

  return (
    <div>
      <div className=" flex justify-between items-center px-[38px] py-[12px] font-DMSans border-b ">
        <div className="flex items-center">
          <img
            src="/menu.svg"
            alt=""
            className="lg:hidden h-[28px] cursor-pointer"
            onClick={showMobileModal}
          />

          <img
            src="/TM30.svg"
            alt=""
            className="w-[120px] lg:h-[34px] h-[28px]"
          />
        </div>
        <div className="flex items-center gap-[25px] pr-[20px]">
          <img
            src="/fe_app-menu.svg"
            alt=""
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={showProducts}
          />
          <p onClick={showProfDrop} className="cursor-pointer first">
            {userData?.fullName?.slice(0, 1)}
          </p>
        </div>
      </div>
      <Products products={products} showProducts={showProducts} />
      {mobileModal && (
        <MobileModal
          showMobileModal={showMobileModal}
          products={products}
          showProducts={showProducts}
        />
      )}
    </div>
  );
}
