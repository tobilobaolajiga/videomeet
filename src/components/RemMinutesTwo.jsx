import { useState } from 'react';

export default function RemMinutesTwo({
  minutes,
  remMinutesTwo,
  setRemMinutesTwo,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const remMinutesTwoChange = (minute) => {
    setRemMinutesTwo(minute);
    // onSelect(hour);
    setIsOpen(false);
    // hour < 13 ? setStartPeriod('AM') : setStartPeriod('PM');
  };
  return (
    <div>
      <div className="dropdown-hour font-DMSans">
        <div onClick={toggleDropdown}>
          {remMinutesTwo}
          {isOpen && (
            <div className="hour-options overflow-y-scroll h-[100px]">
              {minutes.map((minute, index) => (
                <div
                  key={index}
                  className=" hour-option hover:text-[#36aad9]"
                  onClick={() => remMinutesTwoChange(minute)}
                >
                  {minute}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
