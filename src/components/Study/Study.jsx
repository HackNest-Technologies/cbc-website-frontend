import { useState, useEffect, useRef } from "react";
import { useGetDailyDevotionalQuery, useGetBiblePassageQuery } from "../../redux/apiSlice";
import Calendar from "./Calendar";
import BiblePassages from "./BiblePassages";
import PassageContent from "./PassageContent";

const Study = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPassage, setSelectedPassage] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  // Get all readings
  const {
    data: readings,
    isLoading: isLoadingReadings,
    error: readingsError,
  } = useGetDailyDevotionalQuery();

  const formattedDate = selectedDate.toISOString().split("T")[0];
  const todayReading = readings?.find((r) => r.date === formattedDate);

  // Fetch passage details
  const {
    data: bibleData,
    isFetching: isFetchingPassage,
    error: passageError,
  } = useGetBiblePassageQuery(selectedPassage, { skip: !selectedPassage });

  // Reset passage when date changes
  useEffect(() => {
    setSelectedPassage(null);
  }, [selectedDate]);

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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Calendar Component */}
      <Calendar
        selectedDate={selectedDate}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        setSelectedDate={setSelectedDate}
        calendarRef={calendarRef}
      />

      {/* Loading and error handling */}
      {isLoadingReadings && <p>Loading daily readings...</p>}
      {readingsError && (
        <p style={{ color: "red" }}>Failed to load readings from the server.</p>
      )}

      {/* No readings */}
      {!isLoadingReadings && !todayReading && (
        <p>No readings found for {formattedDate}.</p>
      )}

      {/* Bible Passages Component */}
      {todayReading && (
        <BiblePassages
          todayReading={todayReading}
          selectedPassage={selectedPassage}
          setSelectedPassage={setSelectedPassage}
        />
      )}

      {/* Passage Content Component */}
      {selectedPassage && (
        <PassageContent
          selectedPassage={selectedPassage}
          bibleData={bibleData}
          isFetchingPassage={isFetchingPassage}
          passageError={passageError}
        />
      )}
    </div>
  );
};

export default Study;