export default function ResScheduler({ showScheduler }) {
  return (
    <div className="md:hidden  absolute right-4 bottom-[15px]">
      <div
        className="rounded-full flex justify-center items-center bg-[#36AAD9] w-[60px] px-6 py-6 cursor-pointer"
        onClick={showScheduler}
      >
        <img src="/plus.svg" alt="" width={20} />
      </div>
    </div>
  );
}
