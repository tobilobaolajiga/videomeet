import { useState } from 'react';

export default function RemMinutes({ minutes, remMinutes, setRemMinutes }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const remMinutesChange = (minute) => {
    setRemMinutes(minute);
    // onSelect(hour);
    setIsOpen(false);
    // hour < 13 ? setStartPeriod('AM') : setStartPeriod('PM');
  };
  return (
    <div>
      <div className="dropdown-hour font-DMSans">
        <div onClick={toggleDropdown}>
          {remMinutes}
          {isOpen && (
            <div className="hour-options overflow-y-scroll h-[100px]">
              {minutes.map((minute, index) => (
                <div
                  key={index}
                  className=" hour-option hover:text-[#36aad9]"
                  onClick={() => remMinutesChange(minute)}
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
