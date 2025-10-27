import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Calendar = ({
  selectedDate,
  isCalendarOpen,
  setIsCalendarOpen,
  setSelectedDate,
  calendarRef,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Calendar functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(newDate);
    setIsCalendarOpen(false);
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const calendarDays = generateCalendar();

  return (
    <div className="relative inline-block" ref={calendarRef}>
      <button
        className="flex text-[20px] font-inter italic leading-[100%] gap-[6px] items-center bg-transparent cursor-pointer md:text-[32px] lg:text-[40px]"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        {selectedDate.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
        })}
        <span>
          <IoIosArrowDown  className=""/>
        </span>
      </button>

      {isCalendarOpen && (
        <div
          className="mt-4 w-[88vw] absolute top-[120%] left-0 z-[100] bg-[#fff] md:w-[380px] p-[16px] rounded-[5.74px] md:rounded-[9px]"
          style={{
            boxShadow: "0.64px 10px rgba(0,0,0,0.15)",
            border: "0.46px solid #525252",
          }}
        >
          {/* Month header - FIXED: Added proper border and padding */}
          <div className="flex justify-between items-center mb-[16px] pb-[8px] border-b border-[#f0f0f0]">
            <div className="text-[12.75px] font-inter leading-[15px]">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>

            <div className="flex gap-1">
              <CalendarButton onClick={() => navigateMonth(-1)}>
                <MdKeyboardArrowLeft className="text-[25px] text-[#000000]" />
              </CalendarButton>
              <CalendarButton onClick={() => navigateMonth(1)}>
                <MdKeyboardArrowRight className="text-[25px] text-[#000000]" />
              </CalendarButton>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-[4px] text-center mb-[8px]">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                className="text-[7.65px] text-[#3C3C4399] leading-[10.2px] font-poppins font-medium"
                key={day}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-[4px]">
            {calendarDays.map((day, index) => (
              <CalendarDay
                key={index}
                day={day}
                index={index}
                selectedDate={selectedDate}
                currentMonth={currentMonth}
                onDateSelect={handleDateSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// FIXED: CalendarButton component
const CalendarButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center w-[30px] h-[30px] cursor-pointer rounded-[4px] border-none bg-transparent hover:bg-[#f5f5f5] transition-colors"
  >
    {children}
  </button>
);

// FIXED: CalendarDay component
const CalendarDay = ({
  day,
  index,
  selectedDate,
  currentMonth,
  onDateSelect,
}) => {
  const isSelected =
    day &&
    selectedDate.getDate() === day &&
    selectedDate.getMonth() === currentMonth.getMonth() &&
    selectedDate.getFullYear() === currentMonth.getFullYear();

  const isOtherMonth =
    (index < 7 && day && day > 20) || (index > 20 && day && day < 10);

  return (
    <button
      onClick={() => day && onDateSelect(day)}
      disabled={!day}
      className={`
        w-full h-8 flex items-center justify-center rounded-[4px] border-none transition-all
        ${!day ? 'cursor-default transparent' : 'cursor-pointer'}
        ${isSelected ? 'bg-black text-white' : 'bg-transparent'}
        ${isOtherMonth ? 'text-[#ccc]' : 'text-[#333]'}
        hover:${!isSelected && day ? 'bg-[#f5f5f5]' : ''}
      `}
    >
      {day || ""}
    </button>
  );
};

export default Calendar;
