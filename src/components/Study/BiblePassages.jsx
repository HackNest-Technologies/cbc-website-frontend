const BiblePassages = ({ todayReading, selectedPassage, setSelectedPassage, readingType }) => {
  // Ensure passages exists and is an array
  const passages = todayReading?.passages || [];

  return (
    <div className="mt-6">
      
      <div className="space-y-3 md:flex  justify-center gap-4">
        {passages.length > 0 ? (
          passages.map((p, index) => (
            <button
              key={index}
              onClick={() => setSelectedPassage(p.content)}
              className={`w-full h-[48px] text-center text-[24px] text-[#333333] leading-[100%] font-inter  capitalize border-[#333333] py-[8px] px-[30px] rounded-[50px]  border-2 transition-all md:w-[285px] ${
                selectedPassage === p.content
                  ? "bg-[#000000] text-[#ffffff]"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              {p.content}
              {p.description && (
                <p className="">{p.description}</p>
              )}
            </button>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No passages available for today.</p>
        )}
      </div>
    </div>
  );
};

export default BiblePassages;