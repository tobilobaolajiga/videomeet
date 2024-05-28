import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import ColorPicker from './ColorPicker';
export default function ScheduledMeeting({
  closeMeeting,
  repeatBtn,
  handleDeleteEvent,
  selectedColor,
}) {
  const meetingRef = localStorage.getItem('meetingRef}');
  const meetingDetails = JSON.parse(localStorage.getItem('meetingDetails'));
  const startTime = new Date(meetingDetails.meetingTime);
  const endTime = new Date(meetingDetails.endTime);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/video/${meetingDetails.meetingId}`
    );
    toast.success('Copied!');
  };
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer sm:flex sm:justify-center sm:items-center">
        <div className="w-fit rounded-xl md:w-[350px] md:h-[420px] h-fit shadow-lg bg-white relative pb-6">
          <div className="border-b">
            <img
              onClick={closeMeeting}
              src="/cross.svg"
              alt=""
              width={13}
              className="absolute right-[25px] pt-[8px]"
            />
            <p className="text-center py-[15px] font-inter font-semibold text-[16px] outline-none rounded-2xl w-full ">
              {meetingDetails?.meetingName}
            </p>
          </div>
          <div className="flex justify-end mr-6 gap-2 mt-2 text-[#454545]">
            <button className="border px-[4px] my-[4px] text-[8px] flex gap-2 items-center rounded-sm">
              EDIT
              <img src="/edit.svg" alt="" width={12} />
            </button>
            <button
              className="border px-[4px] my-[4px] text-[8px] flex gap-2 items-center rounded-sm"
              onClick={() => handleDeleteEvent(meetingDetails.meetingId)}
            >
              DELETE <img src="/delete.svg" alt="" width={8} />
            </button>
          </div>
          <div className="mx-6 my-2">
            <div className="border w-[40px] py-[6px] px-[8px] rounded-sm flex justify-center">
              <ColorPicker selectedColor={meetingDetails.color} />
            </div>
          </div>

          <div className="mx-6 relative">
            <p className="text-[10px] font-semibold pt-2">Join with TMmeet</p>
            <input
              type="text"
              className="w-full border border-[#D0D5DD] bg-[#F4F4F4] py-[2px] px-[3px] my-[4px] rounded-lg shadow-sm"
            />
            <div className="absolute text-[9px]  text-[#667085] left-2 bottom-[12px] font-inter tracking-tight text-nowrap w-full">
              <p className=" overflow-x-clip w-[150px] md:w-4/5">
                {`${window.location.origin}/video/${meetingDetails.meetingId}`}
              </p>
              <img
                width={14}
                src="/tabler_copy.svg"
                alt=""
                className="absolute md:top-[1px] md:right-4 right-[14px] bottom-[0px]"
                onClick={copyToClipboard}
              />
            </div>
          </div>
          <div className="mx-6">
            <p className="flex items-center gap-2 py-[4px] tracking-tight">
              <span className="text-[10px]">
                {startTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </span>
              <img src="/dot.svg" alt="" width={3} />
              <span className="text-[10px]">
                {startTime.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}{' '}
                -{' '}
                {endTime.toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </span>
            </p>
            <button className="bg-[#36AAD9] bg-opacity-15 text-[#36AAD9] text-[8px] px-2 py-[4px] rounded-sm">
              {repeatBtn}
            </button>
          </div>
          <div className="mx-6 mt-2 ">
            <p className="flex gap-2 text-[10px] font-medium">
              <img src="/people.svg" alt="" width={15} />
              Guests
            </p>

            <ul className="text-[9px] mt-[4px] list-disc mx-4">
              {meetingDetails.emails.map((guest, index) =>
                index == 0 ? (
                  ''
                ) : (
                  <li key={index} className="font-medium font-DMSans">
                    {guest}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mx-6 mt-2 text-[#344054]">
            <p className="flex gap-2 text-[10px] font-medium mt-4 font-inter">
              <img src="/description.svg" alt="" width={15} />
              Description
            </p>
            <p className="text-[9px] my-4 font-DMSans">
              A short description of the meeting
            </p>
          </div>
          <div className="mx-6 mt-2 text-[#344054]">
            <p className="flex gap-2 text-[10px] font-medium mt-4 font-inter">
              <img src="/BellRinging.svg" alt="" width={15} />
              Reminder
            </p>
            <p className="flex gap-2 text-[9px] items-center mt-2 font-DMSans">
              30 minutes before{' '}
              <span>
                <img src="/dot.svg" alt="" width={4} />
              </span>
              {/* 6:30 AM */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
ScheduledMeeting.propTypes = {
  meetingTime: PropTypes.instanceOf(Date).isRequired,
};
