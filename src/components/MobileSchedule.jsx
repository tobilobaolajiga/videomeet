import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
export default function MobileSchedule({
  showMobileSchedule,
  showScheduler,
  allScheduledMeetings,
  events,
  showMeeting,
  currentTime,
  options,
}) {
  const ref = localStorage.getItem('ref');
  return (
    <div>
      <div className="lg:hidden fixed z-50 top-0 left-0 w-2/3 h-full bg-white cursor-pointer flex justify-start ">
        <div className="ml-6">
          <div className="flex items-center justify-start gap-4 py-[12px]">
            <img
              src="/mobile.svg"
              alt=""
              className=""
              onClick={showMobileSchedule}
            />
            <img src="/TM30.svg" alt="" className="w-[100px] h-[28px]" />
          </div>
          <Link to={`/login/${ref}`}>
            <div className="flex gap-4 items-center py-[14px]">
              <img src="/arrowLeft.svg" alt="" width={10} />
              <p className="font-semibold text-[#1A1A1A] opacity-90 text-[12px]">
                Back to Home
              </p>
            </div>
          </Link>
          <div className="px-2">
            <p className="pt-4 text-[12px] font-semibold">
              {currentTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
            <p className="py-2 font-semibold text-[14px]">
              {currentTime.toLocaleDateString('en-US', options)}
            </p>
          </div>
          <button
            className="flex gap-4 bg-[#36AAD9] items-center py-[12px] px-10 rounded-md text-white text-[12px] mt-4"
            onClick={showScheduler}
          >
            <img src="/add.svg" alt="" width={14} />
            Schedule Meeting
          </button>

          <div className="">
            <p
              className="text-[#98A2B3] text-[12px] pt-2 mb-4 mt-6"
              onClick={allScheduledMeetings}
            >
              Scheduled meetings
            </p>
            <ul className="text-[11px] text-[#344054] tracking-tight">
              {events.map((event, index) =>
                event.title === 'Meeting' ? (
                  ''
                ) : (
                  <li
                    key={event.id}
                    className="mb-4 flex items-center gap-2 font-DMSans font-medium text-[#344054] cursor-pointer "
                  >
                    {' '}
                    <span
                      alt=""
                      style={{ backgroundColor: event.backgroundColor }}
                      className=" w-[15px] h-[15px] border rounded-full"
                    ></span>
                    <p
                      className="flex items-center-justify-between w-full relative"
                      onClick={() => showMeeting(event.id)}
                    >
                      {' '}
                      {event.title}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
MobileSchedule.propTypes = {
  currentTime: PropTypes.instanceOf(Date).isRequired,
};
