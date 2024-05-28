export default function BackUpCash({ setBackup }) {
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer flex justify-center items-center ">
        <div className=" h-[400px] w-[800px]">
          <a href=" https://mybackupcash.com/" target="_blank" rel="noreferrer">
            <img
              className=" rounded-lg"
              src="/backupCashMod.svg"
              alt=""
              onMouseLeave={() => {
                setBackup(false);
              }}
            />{' '}
          </a>
        </div>
      </div>
    </div>
  );
}
