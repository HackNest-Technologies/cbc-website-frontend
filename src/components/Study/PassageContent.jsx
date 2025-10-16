import bibleVersion from "../../assets/images/bibleVersion.png";
import Spinner from "../Loader/Spinner";
const PassageContent = ({
  selectedPassage,
  bibleData,
  isFetchingPassage,
  passageError,
}) => {
  return (
    <div className="text-red- mt-[20px] py-6">
      <div className="flex gap-5 items-center">
        <img src={bibleVersion} className="w-[30px] h-[27px] object-cover"/>
        <span className="text-[24px] italic leading-[100%] font-inter">
          KJV
        </span>
      </div>
      {isFetchingPassage && <Spinner />}
      {passageError && (
        <p style={{ color: "red" }}>Error loading passage details.</p>
      )}
      {bibleData && (
        <pre
          className="pt-6 text-base font-inter leading-[160%] md:text-[24px] md:leading-[40px]"
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {bibleData.text}
        </pre>
      )}
    </div>
  );
};

export default PassageContent;
