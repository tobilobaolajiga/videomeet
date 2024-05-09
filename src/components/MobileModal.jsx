import Products from './Products';

export default function MobileModal({
  showMobileModal,
  showLogin,
  showCreateAccount,
  products,
  showProducts,
}) {
  return (
    <div>
      <div className="lg:hidden fixed z-50 top-0 left-0 w-2/3 h-full bg-white cursor-pointer flex justify-start ">
        <div className="ml-6">
          <div className="flex items-center justify-start gap-4 py-[12px]">
            <img
              src="/mobile.svg"
              alt=""
              className=""
              onClick={showMobileModal}
            />
            <img src="/TM30.svg" alt="" className="w-[100px] h-[28px]" />
          </div>
          <ul className="list-none mt-6 flex flex-col gap-8 text-[#667185] font-DMSans">
            <li onClick={showProducts}>TM30 Products</li>
            <li onClick={showLogin}>Sign in</li>
            <li onClick={showCreateAccount}>Create Account</li>
          </ul>
        </div>
      </div>
      <Products products={products} showProducts={showProducts} />
    </div>
  );
}
