import { useEffect, useState } from 'react';
import ColorPicker from './ColorPicker';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RemHour from './RemHour';
import RemMinutes from './RemMinutes';
import RemHourTwo from './RemHourTwo';
import RemMinutesTwo from './RemMinutesTwo';
import RemPeriod from './RemPeriod';
import RemPeriodTwo from './RemPeriodTwo';
export default function Reminder({
  reminder,
  showReminder,
  showDescription,
  showScheduler,
  closeReminder,
  title,
  showScheduled,
  colors,
  handleColorSelect,
  setSelectedColor,
  selectedColor,
  reminderDate,
  handleReminderDate,
  reminderDateTwo,
  handleReminderDateTwo,
  hours,
  minutes,
  remHour,
  setRemHour,
  remHourTwo,
  setRemHourTwo,
  remMinutes,
  setRemMinutes,
  remMinutesTwo,
  setRemMinutesTwo,
  setRemPeriod,
  setRemPeriodTwo,
  remPeriod,
  remPeriodTwo,
  apm,
}) {
  const showDesc = () => {
    !showReminder();

    showDescription();
  };

  const showSchedu = () => {
    !showReminder();

    showScheduler();
  };
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {reminder && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer sm:flex sm:justify-center sm:items-center">
          <div className="w-fit md:h-[420px] rounded-xl h-fit shadow-lg  bg-white relative">
            <div className="border-b">
              <img
                src="/cross.svg"
                alt=""
                width={13}
                className="absolute right-[25px] pt-[8px]"
                onClick={closeReminder}
              />
              <p className="text-center py-[13px] font-inter font-semibold text-[16px]">
                Schedule New Meeting
              </p>
            </div>
            <div className="py-4 px-6 font-inter">
              <p className="text-[10px] font-medium opacity-95 pb-[6px]">
                Meeting Title
              </p>
              <div className="flex ">
                <input
                  value={title}
                  type="text"
                  placeholder="Add title"
                  className="border py-[4px] px-4 placeholder:opacity-50 w-4/5 rounded-l-lg placeholder:text-[11px] placeholder:text-[#667085] text-[10px] font-semibold font-inter"
                />
                <div className="border py-[6px] px-[8px] flex gap-2 items-center rounded-r-lg border-l-0">
                  <ColorPicker
                    colors={colors}
                    onSelect={handleColorSelect}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                </div>
              </div>
            </div>
            <div className=" pt-[12px] ">
              <ul className="flex gap-6 text-[11px] text-[#667085] items-center border-b pb-2 px-6 relative">
                <li
                  className="flex gap-[5px]  items-center  "
                  onClick={showSchedu}
                >
                  <img src="/nocolEvent.svg" alt="" width={15} />
                  Event
                </li>
                <li
                  className="flex gap-[5px]  text-[#667085] opacity-70 items-center "
                  onClick={showDesc}
                >
                  <img src="/description.svg" alt="" width={15} />
                  Description
                </li>
                <li
                  className="flex gap-[5px] text-[#36AAD9] opacity-70 items-center font-medium"
                  onClick={showReminder}
                >
                  <img src="/colAlarm.svg" alt="" width={15} />
                  Reminder
                  <img
                    src="/highlight.svg"
                    alt=""
                    className="absolute bottom-0"
                  />
                </li>
              </ul>
              <div className="py-[10px] px-6 relative">
                <div>
                  <p className="text-[11px] pb-[2px] font-semibold">
                    Reminder 1
                  </p>
                  <div
                    className="flex gap-2 items-center tracking-tight relative mb-2 "
                    id="date"
                  >
                    <ReactDatePicker
                      className="border py-[4px] pl-[24px] font-DMSans w-[90px] outline-none rounded text-[10px] font-semibold cursor-pointer"
                      selected={reminderDate}
                      onChange={handleReminderDate}
                      dateFormat="dd/MM/yyyy"
                      placeholderText={date.toLocaleString('en-US', options)}
                    />
                    <img
                      src="/greyCalendar.svg"
                      alt=""
                      className="absolute left-[6px]"
                      width={13}
                    />
                  </div>
                  <div
                    className=" time-picker px-6 py-[4px] mr-2 mt-2 mb-2 flex gap-[4px] items-center border w-[90px]  rounded text-[10px] font-semibold"
                    id="time"
                  >
                    <RemHour
                      // startHourChange={startHourChange}
                      hours={hours}
                      remHour={remHour}
                      setRemHour={setRemHour}
                      setRemPeriod={setRemPeriod}
                    />

                    <p>:</p>
                    <RemMinutes
                      // startMinutes={startMinutes}
                      minutes={minutes}
                      remMinutes={remMinutes}
                      setRemMinutes={setRemMinutes}
                      // startMinutesChange={startMinutesChange}
                    />

                    <span></span>
                    <RemPeriod
                      // startPeriodChange={startPeriodChange}
                      apm={apm}
                      // startHour={startHour}
                      remPeriod={remPeriod}
                      setRemPeriod={setRemPeriod}
                    />
                    <img
                      src="/clock.svg"
                      alt=""
                      className="absolute left-[30px]"
                      width={13}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] pb-[2px] font-semibold">
                    Reminder 2
                  </p>
                  <div
                    className="flex gap-2 items-center tracking-tight relative mb-2"
                    id="date"
                  >
                    <ReactDatePicker
                      className="border py-[4px] pl-[24px] font-DMSans w-[90px] outline-none rounded text-[10px] font-semibold cursor-pointer"
                      selected={reminderDateTwo}
                      onChange={handleReminderDateTwo}
                      dateFormat="dd/MM/yyyy"
                      placeholderText={date.toLocaleString('en-US', options)}
                    />
                    <img
                      src="/greyCalendar.svg"
                      alt=""
                      className="absolute left-[6px]"
                      width={13}
                    />
                  </div>
                  <div
                    className=" time-picker px-6 py-[4px] mr-2 mt-2 mb-2 flex gap-[4px] items-center border w-[90px]  rounded text-[10px] font-semibold"
                    id="time"
                  >
                    <RemHourTwo
                      // startHourChange={startHourChange}
                      hours={hours}
                      remHourTwo={remHourTwo}
                      setRemHourTwo={setRemHourTwo}
                      setRemPeriodTwo={setRemPeriodTwo}
                      // startHour={startHour}
                      // setStartHour={setStartHour}
                      // setStartPeriod={setStartPeriod}
                    />

                    <p>:</p>
                    <RemMinutesTwo
                      // startMinutes={startMinutes}
                      minutes={minutes}
                      remMinutesTwo={remMinutesTwo}
                      setRemMinutesTwo={setRemMinutesTwo}
                      // startMinutesChange={startMinutesChange}
                      // setStartMinutes={setStartMinutes}
                    />

                    <span></span>
                    <RemPeriodTwo
                      // startPeriodChange={startPeriodChange}
                      apm={apm}
                      // startHour={startHour}
                      remPeriodTwo={remPeriodTwo}
                      setRemPeriodTwo={setRemPeriodTwo}
                    />
                    <img
                      src="/clock.svg"
                      alt=""
                      className="absolute left-[30px]"
                      width={13}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-[6px] flex justify-end">
              <button
                onClick={showScheduled}
                className="border bg-[#36AAD9] px-[12px] py-[4px] rounded text-white text-[11px] mr-6 mt-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
