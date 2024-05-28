import { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import ColorPicker from './ColorPicker';
import HourDropdown from './HourDropdown';
import MinutesDropdown from './MinutesDropdown';
import PeriodDropdown from './PeriodDropdown';
import EndHourDropdown from './EndHourDropdown';
import EndMinutesDropdown from './EndMinutesDropdown';
import EndPeriodDropdown from './EndPeriodDropdown';
import 'react-time-picker/dist/TimePicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import './datepickerstyles.css';
import Description from './Description';
import Reminder from './Reminder';
import Scheduled from './Scheduled';
import axios from 'axios';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Repeat from './Repeat';
import { ClipLoader } from 'react-spinners';

// import '../styles.css';
export default function Scheduler({
  scheduler,
  setScheduler,
  showScheduler,
  startHour,
  setStartMinutes,
  minutes,
  startMinutes,
  startPeriod,
  setStartPeriod,
  endHour,
  endMinutes,
  setEndHour,
  setEndMinutes,
  setEndPeriod,
  endPeriod,
  desc,
  title,
  startHourChange,
  startMinutesChange,
  startPeriodChange,
  endHourChange,
  endMinutesChange,
  endPeriodChange,
  setTitle,
  setDesc,
  colors,
  hours,
  selectedColor,
  handleColorSelect,
  setSelectedColor,
  setStartHour,
  apm,
  selectedDate,
  handleDateChange,
  handleAddEvent,
  addTitles,
  email,
  userId,
  showScheduled,
  description,
  setDescription,
  reminder,
  setReminder,
  scheduled,
  setScheduled,
  repeatBtn,
  setRepeatBtn,
}) {
  const [realDate, setRealDate] = useState(new Date());
  const [error, setError] = useState('');
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [guest, setGuest] = useState('');
  const [guests, setGuests] = useState([userData.email]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRealDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onChangeRepeat = (e) => {
    setRepeatBtn(e.target.value);
  };

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const showDescription = () => {
    setScheduler(false);

    setDescription(!description);
  };

  const showReminder = () => {
    setDescription(false);
    setScheduler(false);
    setReminder(!reminder);
  };

  const closeScheduler = () => {
    setScheduler(!scheduler);
    setGuests([userData.email]);
  };
  const closeDescription = () => {
    setDescription(!description);
  };
  const closeReminder = () => {
    setReminder(!reminder);
  };

  const addGuests = (guest) => {
    setGuests([...guests, guest]); // Prevent the default action of submitting a form
    setGuest('');
    console.log(guest, guests);
  };
  //meetinginputs

  // const [error, setError] = useState('');
  const newUserId = localStorage.getItem('userId');
  const token = localStorage.getItem('userToken');
  // const allGuests = JSON.stringify(guests);

  const scheduleMeeting = async () => {
    console.log(guests);
    setLoading(true);
    const startTime = `${selectedDate.getFullYear()}-${(
      selectedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${selectedDate
      .getDate()
      .toString()
      .padStart(2, '0')}T${startHour}:${startMinutes}:00Z`;

    const endTime = `${selectedDate.getFullYear()}-${(
      selectedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${selectedDate
      .getDate()
      .toString()
      .padStart(2, '0')}T${endHour}:${endMinutes}:00Z`;
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL + 'meeting/schedule-meeting',
        {
          emails: guests,
          meetingTime: startTime,
          meetingName: title,
          endTime: endTime,
          color: selectedColor,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response?.data?.data?.meetingId);
      setLoading(false);
      toast.success(response.data.message);
      localStorage.setItem(
        'meetingId',
        `${window.location.origin}/video/${response?.data?.data?.meetingId}`
      );
      localStorage.setItem(
        'guests',
        JSON.stringify(response?.data?.data?.emails)
      );
      console.log(response?.data?.data?.emails);
      setSelectedColor(selectedColor);
      handleAddEvent();
      showScheduled();
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
      toast.error(error.response.data.message);
      console.log(error.response.data.status);
      console.log(error.response.data.message);
    }
  };

  const [loading, setLoading] = useState(false);
  const [reminderDate, setReminderDate] = useState(new Date());
  const [reminderDateTwo, setReminderDateTwo] = useState(new Date());
  const [remHour, setRemHour] = useState('12');
  const [remMinutes, setRemMinutes] = useState('00');
  const [remPeriod, setRemPeriod] = useState('PM');
  const [remHourTwo, setRemHourTwo] = useState('12');
  const [remMinutesTwo, setRemMinutesTwo] = useState('00');
  const [remPeriodTwo, setRemPeriodTwo] = useState('PM');

  const handleReminderDate = (date) => {
    setReminderDate(date);
  };
  const handleReminderDateTwo = (date) => {
    setReminderDateTwo(date);
  };
  useEffect(() => {
    // Set the selected date to the current date when the component mounts
    setReminderDate(new Date());
    setReminderDateTwo(new Date());
  }, []);

  return (
    <div>
      {scheduler && (
        <div className="fixed z-50 top-0 left-0 w-full h-screen sm:bg-white  lg:bg-[#000000] lg:bg-opacity-25 cursor-pointer sm:flex sm:justify-center sm:items-center  ">
          <div className=" w-fit h-fit md:w-[350px] rounded-xl md:h-[450px] shadow-lg  bg-white relative">
            <div className="border-b">
              <img
                src="/cross.svg"
                alt=""
                width={13}
                className="absolute right-[25px] pt-[8px]"
                onClick={closeScheduler}
              />
              <p className="text-center py-[13px] font-inter font-semibold text-[16px]">
                Schedule New Meeting
              </p>
            </div>
            <div className="py-4 px-6 font-inter">
              <p className="text-[12px] font-medium opacity-95 pb-[6px]">
                Meeting Title
              </p>
              <div className="flex ">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add title"
                  className="border py-[2px] px-4 placeholder:opacity-50 w-4/5 rounded-l-lg placeholder:text-[10px] placeholder:text-[#667085] outline-none text-[11px] font-semibold font-inter"
                />

                <div className="border py-[6px] px-[8px] flex gap-2 items-center rounded-r-lg border-l-0 ">
                  {' '}
                  <ColorPicker
                    colors={colors}
                    handleColorSelect={handleColorSelect}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                </div>
              </div>
            </div>
            <div className=" pt-[12px] ">
              <ul className="flex gap-6 text-[11px] items-center border-b pb-2 px-6 relative">
                <li className="flex gap-[5px] text-[#36AAD9] items-center font-medium ">
                  <img src="/event.svg" alt="" width={15} />
                  Event
                  <img
                    src="/highlight.svg"
                    alt=""
                    className="absolute bottom-0"
                    width={50}
                  />
                </li>
                <li
                  className="flex gap-[5px] text-[#667085] opacity-70 items-center"
                  onClick={showDescription}
                >
                  <img src="/description.svg" alt="" width={15} />
                  Description
                </li>
                <li
                  className="flex gap-[5px] text-[#667085] opacity-70 items-center"
                  onClick={showReminder}
                >
                  <img src="/alarm.svg" alt="" width={15} />
                  Reminder
                </li>
              </ul>
              <div className="">
                <p className="font-DMSans px-6 py-[10px] text-[11px] font-semibold text-[#344054]">
                  Meeting Date & Time
                </p>
                <div
                  className="px-6 flex gap-2 items-center tracking-tight relative "
                  id="date"
                >
                  <ReactDatePicker
                    className="border py-[4px] pl-[24px] font-DMSans w-[90px] outline-none rounded text-[10px] font-semibold cursor-pointer"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={realDate.toLocaleString('en-US', options)}
                  />
                  <img
                    src="/greyCalendar.svg"
                    alt=""
                    className="absolute left-[30px]"
                    width={13}
                  />
                </div>
                <div className="flex items-center">
                  <div
                    className=" time-picker px-6 py-[4px] ml-6 mr-2 mt-2 mb-2 flex gap-[4px] items-center border w-[90px]  rounded text-[10px] font-semibold"
                    id="time"
                  >
                    <HourDropdown
                      startHourChange={startHourChange}
                      hours={hours}
                      startHour={startHour}
                      setStartHour={setStartHour}
                      setStartPeriod={setStartPeriod}
                    />

                    <p>:</p>
                    <MinutesDropdown
                      startMinutes={startMinutes}
                      minutes={minutes}
                      startMinutesChange={startMinutesChange}
                      setStartMinutes={setStartMinutes}
                    />

                    <span></span>
                    <PeriodDropdown
                      startPeriodChange={startPeriodChange}
                      apm={apm}
                      startHour={startHour}
                      startPeriod={startPeriod}
                      setStartPeriod={setStartPeriod}
                    />
                    <img
                      src="/clock.svg"
                      alt=""
                      className="absolute left-[30px]"
                      width={13}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#667085]">To</p>
                  </div>
                  <div
                    className=" time-picker px-6 py-[4px] mx-2 mt-2 mb-2 flex gap-[4px] items-center border w-[90px] rounded text-[10px] font-semibold"
                    id="time"
                  >
                    <EndHourDropdown
                      endHourChange={endHourChange}
                      hours={hours}
                      endHour={endHour}
                      setEndHour={setEndHour}
                      setEndPeriod={setEndPeriod}
                    />
                    <p>:</p>
                    <EndMinutesDropdown
                      endMinutes={endMinutes}
                      minutes={minutes}
                      endMinutesChange={endMinutesChange}
                      setEndMinutes={setEndMinutes}
                    />
                    <span></span>
                    <EndPeriodDropdown
                      endPeriodChange={endPeriodChange}
                      apm={apm}
                      endPeriod={endPeriod}
                      setEndPeriod={setEndPeriod}
                      endHour={endHour}
                    />
                    <img
                      src="/clock.svg"
                      alt=""
                      className="absolute left-[145px]"
                      width={13}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 px-6 relative font-DMSans">
                  <p className="flex items-center gap-2 text-[10px] font-bold">
                    {' '}
                    All day
                    <input
                      className="border rounded outline-none"
                      type="checkbox"
                    />
                  </p>

                  <button className="border rounded">
                    <Repeat repeatBtn={repeatBtn} setRepeatBtn={setRepeatBtn} />
                  </button>
                </div>
              </div>
              <div className="relative pt-4 pb-12 px-6 ">
                <p className="text-[10px] font-semibold text-[#344054] pt-[6px]">
                  Add guests
                </p>
                <div className="relative">
                  <input
                    type="text"
                    value={guest}
                    onChange={(e) => setGuest(e.target.value)}
                    placeholder="Add guest"
                    className="border rounded w-full mt-[6px] px-8 py-[6px] placeholder:text-[9px] text-[9px] placeholder:font-inter outline-none"
                  />
                  <button
                    className="bg-[#36AAD9] text-white rounded-sm px-[9px] py-[2px] text-[10px] absolute top-[10px] right-[3px]"
                    onClick={() => {
                      addGuests(guest);
                    }}
                  >
                    Invite
                  </button>
                </div>
                <img
                  src="/people.svg"
                  alt=""
                  className="absolute top-[48px] left-[30px]"
                  width={15}
                />
                {guests ? (
                  <ul className="text-[9px] mt-[4px] list-disc mx-4">
                    {guests.map((guest, index) =>
                      index == 0 ? '' : <li key={index}>{guest}</li>
                    )}
                  </ul>
                ) : (
                  <img
                    src="/noguest.svg"
                    alt=""
                    width={60}
                    className="mx-16 mt-4"
                  />
                )}
              </div>
            </div>

            <button
              className="border bg-[#36AAD9] px-[12px] py-[4px] rounded text-white text-[10px] mb-4 cursor-pointer absolute bottom-0 right-6"
              onClick={scheduleMeeting}
            >
              {loading ? (
                <ClipLoader color="#36D7B7" loading={loading} size={16} />
              ) : (
                'Save'
              )}
            </button>
          </div>
        </div>
      )}
      <Description
        description={description}
        showDescription={showDescription}
        showReminder={showReminder}
        showScheduler={showScheduler}
        closeDescription={closeDescription}
        title={title}
        showScheduled={showScheduled}
        desc={desc}
        setDesc={setDesc}
        selectedColor={selectedColor}
        colors={colors}
        onSelect={handleColorSelect}
        setSelectedColor={setSelectedColor}
      />
      <Reminder
        reminder={reminder}
        showReminder={showReminder}
        showDescription={showDescription}
        showScheduler={showScheduler}
        closeReminder={closeReminder}
        title={title}
        showScheduled={showScheduled}
        selectedColor={selectedColor}
        colors={colors}
        onSelect={handleColorSelect}
        setSelectedColor={setSelectedColor}
        reminderDate={reminderDate}
        handleReminderDate={handleReminderDate}
        reminderDateTwo={reminderDateTwo}
        handleReminderDateTwo={handleReminderDateTwo}
        hours={hours}
        minutes={minutes}
        remHour={remHour}
        setRemHour={setRemHour}
        remMinutes={remMinutes}
        setRemMinutes={setRemMinutes}
        remHourTwo={remHourTwo}
        setRemHourTwo={setRemHourTwo}
        remMinutesTwo={remMinutesTwo}
        setRemMinutesTwo={setRemMinutesTwo}
        setRemPeriod={setRemPeriod}
        remPeriod={remPeriod}
        setRemPeriodTwo={setRemPeriodTwo}
        remPeriodTwo={remPeriodTwo}
        apm={apm}
      />

      <Scheduled
        scheduled={scheduled}
        showScheduled={showScheduled}
        selectedDate={selectedDate}
        title={title}
        setTitle={setTitle}
        startHour={startHour}
        setStartHour={setStartHour}
        startMinutes={startMinutes}
        setStartMinutes={setStartMinutes}
        startPeriod={startPeriod}
        setStartPeriod={setStartPeriod}
        endHour={endHour}
        setEndHour={setEndHour}
        endMinutes={endMinutes}
        setEndMinutes={setEndMinutes}
        endPeriod={endPeriod}
        setEndPeriod={setEndPeriod}
        desc={desc}
        repeatBtn={repeatBtn}
        selectedColor={selectedColor}
        colors={colors}
        onSelect={handleColorSelect}
        setSelectedColor={setSelectedColor}
        setScheduled={setScheduled}
        addTitles={addTitles}
        handleAddEvent={handleAddEvent}
        // setGuests={setGuests}
      />
    </div>
  );
}
Scheduler.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};
