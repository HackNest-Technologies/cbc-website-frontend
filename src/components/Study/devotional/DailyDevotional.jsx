import { useState } from "react";
import { useGetBiblePassageQuery } from "../../../redux/apiSlice";
import { IoIosArrowForward } from "react-icons/io";

const DailyDevotional = ({ todayReading, isLoading, onSwitchToBible }) => {
  const [selectedPassage, setSelectedPassage] = useState(null);

  // Fetch passage details for daily devotional
  const {
    data: bibleData,
    isFetching: isFetchingPassage,
    error: passageError,
  } = useGetBiblePassageQuery(selectedPassage, { skip: !selectedPassage });

  // Function to extract passages from the body text
  const extractPassagesFromBody = (body) => {
    if (!body) return [];

    const passages = [];

    // Extract MEMORISE verse
    const memoriseMatch = body.match(/MEMORISE:.*?"(.*?)"/);
    if (memoriseMatch) {
      passages.push({
        content: memoriseMatch[1],
        description: "Memory Verse",
      });
    }

    // Extract READ passage
    const readMatch = body.match(/READ:\s*(.*?)\s*\(KJV\)/);
    if (readMatch) {
      passages.push({
        content: readMatch[1],
        description: "Reading Passage",
      });
    }

    return passages;
  };

  // Function to format the body text by removing markdown-like formatting
  const formatBodyText = (body) => {
    if (!body) return "";

    return body
      .replace(/\n\s{4}/g, "\n") // Remove indentation
      .replace(/\n{2,}/g, "\n\n") // Normalize line breaks
      .replace(/MEMORISE:/g, "\n\nMEMORISE:")
      .replace(/READ:/g, "\n\nREAD:")
      .replace(/KEY POINT/g, "\n\nKEY POINT")
      .trim();
  };

  // Extract passages from today's reading
  const passages = todayReading
    ? extractPassagesFromBody(todayReading.body)
    : [];

  // Show content only when not loading and data is available
  return (
    <div className="space-y-6">
      {/* Main Content */}
      {todayReading ? (
        <div className="">
          {/* Left Column - Devotional Content */}
          <div className="space-y-6">
            {/* Devotional Title and Body */}
            <section className="">
              <span className="text-xs leading-[100%] font-satoshi text-[#000000] md:text-[24px]">
                Title
              </span>
              <h3 className="text-[24px] font-satoshi leading-[100%] capitalize pt-4 pb-6 border-b-3 border-[#FD9F2B] border-dotted md:text-[40px] lg:text-[52px]">
                {todayReading.title}
              </h3>
              <div className="text-sm leading-[150%] font-inter py-6 whitespace-pre-line md:text-[24px]">
                {formatBodyText(todayReading.body)}
              </div>

              {/* Clickable Bible in one year switch */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={onSwitchToBible}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#FD9F2B] transition-colors cursor-pointer"
                >
                  Bible in one year <IoIosArrowForward />
                </button>
              </div>
            </section>
          </div>
        </div>
      ) : (
        // This will only show when loading is complete and no data is available
        <div className="text-center py-8">
          <p className="">
            {isLoading ? "" : "No devotional content available for this date."}
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyDevotional;
