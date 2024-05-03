import { useState } from 'react';
import './hourdropdown.css';
export default function RemHour({ hours, remHour, setRemHour, setRemPeriod }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const remHourChange = (hour) => {
    setRemHour(hour);
    // onSelect(hour);
    setIsOpen(false);
    hour < 13 ? setRemPeriod('AM') : setRemPeriod('PM');
  };
  return (
    <div>
      <div className="dropdown-hour font-DMSans">
        <div onClick={toggleDropdown}>
          {remHour}
          {isOpen && (
            <div className="hour-options overflow-y-scroll h-[100px]">
              {hours.map((hour, index) => (
                <div
                  key={index}
                  className=" hour-option hover:text-[#36aad9]"
                  onClick={() => remHourChange(hour)}
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
