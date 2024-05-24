export default function FeatureUsage() {
  return (
    <div>
      <div className=" z-50 rounded-lg border mt-2 mb-8 ml-4 mr-8 pb-[12px]">
        <div className=" px-4 py-4">
          <p className="text-[#131313] font-semibold text-[16px]">
            Feature Usage
          </p>
          <p className="text-[#818181] text-[14px] mt-[4px]">
            See the usage of the platform features
          </p>
        </div>

        <img
          src="/feature.svg"
          alt=""
          className="px-6 mt-4  mb-6"
          width={300}
        />
        <div className="px-4 flex justify-between mb-[14px]">
          <div className="flex gap-2">
            <img src="/airplay.svg" alt="" width={15} />
            <p className="text-[11px] text-[#667185] font-medium">
              Screen sharing
            </p>
          </div>
          <div className="flex gap-6 text-[12px]">
            <p className="font-semibold text-green-500">+1.6%</p>
            <p className="font-bold">46%</p>
          </div>
        </div>
        <div className="px-4 flex justify-between mb-[14px]">
          <div className="flex gap-2">
            <img src="/rec.svg" alt="" width={15} />
            <p className="text-[11px] text-[#667185] font-medium">Recording</p>
          </div>
          <div className="flex gap-6 text-[12px]">
            <p className="font-semibold text-[#ff394e]">-0.4%</p>
            <p className="font-bold">17%</p>
          </div>
        </div>
        <div className="px-4 flex justify-between mb-[13px]">
          <div className="flex gap-2">
            <img src="/chat.svg" alt="" width={15} />
            <p className="text-[11px] text-[#667185] font-medium">Chat</p>
          </div>
          <div className="flex gap-6 text-[12px]">
            <p className="font-semibold text-green-500">+3.2%</p>
            <p className="font-bold">39%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
