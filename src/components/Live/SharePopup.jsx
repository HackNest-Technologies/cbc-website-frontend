import solar from "../../assets/images/solar_share-outline.svg";

const SharePopup = ({ onClose }) => {
  const url = encodeURIComponent(window.location.href);

  return (
    <section className="flex flex-col rounded-[16px] border-[2px] border-dashed border-[#FC8E33] w-full h-auto md:h-[300px] lg:h-[430px]">

      {/* Header */}
      <div className="flex p-[16px] justify-between items-center border-b-[2px] border-dashed border-[#FC8E33]">
        <div className="flex items-center gap-[8px]">
          <img src={solar} alt="share" className="w-[30px] h-[28px]" />
          <p className="text-black text-[18px] font-bold uppercase">
            Share
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="px-[18px] rounded-[36px] bg-black"
        >
          <p className="text-white text-[16px] uppercase py-[5px]">
            Close
          </p>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[12px] p-[16px]">
        <a
          href={`https://wa.me/?text=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          WhatsApp
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          Facebook
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          Twitter (X)
        </a>

        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            onClose();
          }}
          className="share-btn"
        >
          Copy Link
        </button>
      </div>
    </section>
  );
};

export default SharePopup;
