import { useState, useEffect } from "react";
import { useGetBiblePassageQuery } from "../../../redux/apiSlice";
import BiblePassages from "../BiblePassages";
import PassageContent from "../PassageContent";

const BibleInOneYear = ({ todayReading }) => {
  const [selectedPassage, setSelectedPassage] = useState(null);

  // Auto-select the first passage when todayReading changes
  useEffect(() => {
    if (todayReading?.passages?.length > 0 && !selectedPassage) {
      setSelectedPassage(todayReading.passages[0].content);
    }
  }, [todayReading, selectedPassage]);

  // Fetch passage details for bible in one year
  const {
    data: bibleData,
    isFetching: isFetchingPassage,
    error: passageError,
  } = useGetBiblePassageQuery({ 
    passage: selectedPassage,
    version: "kjv" 
  }, {
    skip: !selectedPassage,
  });

  return (
    <div className="space-y-6">
    

      {todayReading && (
        <div className="">
          {/* Left - Bible Passages List */}
          <div>
            <BiblePassages
              todayReading={todayReading}
              selectedPassage={selectedPassage}
              setSelectedPassage={setSelectedPassage}
              readingType="bible"
            />
          </div>

          {/* Right - Passage Content */}
          <div>
            {selectedPassage && (
              <PassageContent
                selectedPassage={selectedPassage}
                bibleData={bibleData}
                isFetchingPassage={isFetchingPassage}
                passageError={passageError}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BibleInOneYear;