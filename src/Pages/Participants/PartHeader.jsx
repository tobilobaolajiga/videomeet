export default function PartHeader() {
  return (
    <div>
      <div className="flex justify-between items-center mx-10 my-6 ">
        <div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[#090814] font-bold text-[28px] font-inter">
              Participants
            </p>
            <p className="text-[11px] font-semibold text-[#36aad9] bg-[#36aad9] bg-opacity-10 px-[6px] py-[2px] rounded-md flex items-center">
              473 users
            </p>
            <p className="flex items-center gap-[4px] text-[11px] text-green-500 font-semibold">
              3.6% <img src="/arrowUp.svg" alt="" width={8} />
            </p>
          </div>
          <p className="text-[#848d87] text-[12px] font-inter">
            See and manage all users registered.
          </p>
        </div>
      </div>
    </div>
  );
}
