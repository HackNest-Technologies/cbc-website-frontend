import { useState, useEffect, useRef } from "react";
import Spinner from "../../components/Loader/Spinner";
import {
  useGetDailyDevotionalQuery,
  useGetBiblePassageQuery,
  useGetBibleInOneYearQuery,
} from "../../redux/apiSlice";
import { useSearchParams } from "react-router-dom";
import Calendar from "./Calendar";
import DailyDevotional from "./devotional/DailyDevotional";
import BibleInOneYear from "./bible/BibleInOneYear";

const StudyBtn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(searchParams.get("type") || "daily");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  // Get readings based on active toggle
  const {
    data: dailyReadings,
    isLoading: isLoadingDaily,
    error: dailyError,
  } = useGetDailyDevotionalQuery();

  const {
    data: bibleYearReadings,
    isLoading: isLoadingBibleYear,
    error: bibleYearError,
  } = useGetBibleInOneYearQuery();

  // Determine which data to use based on active toggle
  const currentReadings =
    isActive === "daily" ? dailyReadings : bibleYearReadings;
  const isLoading = isActive === "daily" ? isLoadingDaily : isLoadingBibleYear;
  const readingsError = isActive === "daily" ? dailyError : bibleYearError;

  const formattedDate = selectedDate.toISOString().split("T")[0];
  const todayReading = currentReadings?.find((r) => r.date === formattedDate);

  // Handle URL parameters for type and date
  useEffect(() => {
    const urlType = searchParams.get("type");
    const urlDate = searchParams.get("date");

    if (urlType && ["daily", "bible"].includes(urlType)) {
      setIsActive(urlType);
    }

    if (urlDate) {
      const date = new Date(urlDate);
      if (!isNaN(date.getTime())) {
        setSelectedDate(date);
      }
    }
  }, [searchParams]);

  // Update URL when toggle or date changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("type", isActive);
    params.set("date", formattedDate);
    setSearchParams(params);
  }, [isActive, formattedDate, setSearchParams]);

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleBtn = (toggleType) => {
    setIsActive(toggleType);
  };

  const handleSwitchToBible = () => {
    setIsActive("bible");
  };

  return (
    <section className="container mx-auto">
      <section className="px-6 mb-10 mt-10 md:flex items-center lg:mt-[120px] lg:mb-12 md:px-0 md:gap-4">
        {/* Left Column - Calendar */}
        <div className="">
          <Calendar
            selectedDate={selectedDate}
            isCalendarOpen={isCalendarOpen}
            setIsCalendarOpen={setIsCalendarOpen}
            setSelectedDate={setSelectedDate}
            calendarRef={calendarRef}
          />
        </div>

        {/* Middle Column - Toggle Buttons */}
        <div className="my-6 flex-1 md:my-0 flex justify-center">
          <div className="border rounded-[10.87px] p-[8.15px] flex justify-between items-center md:p-[15px] md:rounded-[20px] lg:w-[560px] ">
            <span
              className={`py-[5.43px] px-[16.3px] text-inter font-semibold text-sm leading-[100%] cursor-pointer md:text-[24px] ${
                isActive === "daily"
                  ? "bg-[#FD9F2B] py-[5.43px] px-[16.3px] font-inter rounded-[8px] text-white md:rounded-[12px] md:py-[10px] md:px-[30px]"
                  : "text-gray-600"
              }`}
              onClick={() => toggleBtn("daily")}
            >
              Daily Devotional
            </span>
            <span
              className={`py-[5.43px] px-[16.3px] text-inter font-semibold text-sm leading-[100%] cursor-pointer md:text-[24px] ${
                isActive === "bible"
                  ? "bg-[#FD9F2B] py-[5.43px] px-[16.3px] font-inter rounded-[8px] text-white md:rounded-[12px] md:py-[10px] md:px-[30px]"
                  : "text-gray-600"
              }`}
              onClick={() => toggleBtn("bible")}
            >
              Bible in one year
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-0">
        {/* Loading and error handling */}
        {isLoading && (
          <div className="">
            <Spinner />
          </div>
        )}
        {readingsError && (
          <div className="text-center py-8">
            <p className="text-red-500">
              Failed to load{" "}
              {isActive === "daily" ? "daily devotionals" : "bible in one year"}{" "}
              from the server.
            </p>
          </div>
        )}

        {/* No readings message */}
        {!isLoading && !todayReading && (
          <div className="text-center py-8">
            <p>
              No{" "}
              {isActive === "daily" ? "daily devotionals" : "bible in one year"}{" "}
              found for {formattedDate}.
            </p>
          </div>
        )}

        {/* Render the appropriate component based on toggle */}
        {isActive === "daily" ? (
          <DailyDevotional
            isLoading={isLoading}
            todayReading={todayReading}
            onSwitchToBible={handleSwitchToBible}
          />
        ) : (
          <BibleInOneYear
            selectedDate={selectedDate}
            todayReading={todayReading}
          />
        )}
      </section>
    </section>
  );
};

export default StudyBtn;
