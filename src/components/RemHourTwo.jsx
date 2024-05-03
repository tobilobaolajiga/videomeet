import { useState } from 'react';

export default function RemHourTwo({
  hours,
  remHourTwo,
  setRemHourTwo,
  setRemPeriodTwo,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const remHourTwoChange = (hour) => {
    setRemHourTwo(hour);
    // onSelect(hour);
    setIsOpen(false);
    hour < 13 ? setRemPeriodTwo('AM') : setRemPeriodTwo('PM');
  };
  return (
    <div>
      <div className="dropdown-hour font-DMSans">
        <div onClick={toggleDropdown}>
          {remHourTwo}
          {isOpen && (
            <div className="hour-options overflow-y-scroll h-[100px]">
              {hours.map((hour, index) => (
                <div
                  key={index}
                  className=" hour-option hover:text-[#36aad9]"
                  onClick={() => remHourTwoChange(hour)}
                >
                  {hour}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
