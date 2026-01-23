import { useState, useEffect } from "react";
import { useCreateBibleMutation } from "../../../../redux/apiSlice";
import closeImg from "../../../../assets/images/closeIcon.png";
import publish from "../../../../assets/images/publish.png";

const CreateBibleModal = ({ isOpen, onClose, onSuccess }) => {
  const [createBible, { isLoading }] = useCreateBibleMutation();

  const initialState = {
    date: "",
  };

  const [bibleData, setBibleData] = useState(initialState);

  // Set initial date to today
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setBibleData(prev => ({ ...prev, date: today }));
  }, []);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      const today = new Date().toISOString().split("T")[0];
      setBibleData({
        date: today,
      });
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBibleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault()   
    try {
      await createBible(bibleData).unwrap();
      alert("Bible reading created successfully!");
      onSuccess(); // This will close modal and refresh list
    } catch (error) {
      console.error("Error creating Bible reading:", error);
      alert("Something went wrong while creating the Bible reading.");
    }
  };

  if (!isOpen) return null;

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="fixed inset-0 flex justify-center items-center bg-black/40 px-5 h-full z-[9999] overflow-hidden">
      <section className="bg-[#E8E8E8] w-full rounded-[30px] overflow-auto md:w-[897px] h-[754px] overflow-y-auto hide-scrollbar scrollbar-height">
        {/* Header */}
        <div className="pt-[36px] pb-[12px] px-[36px] flex justify-between items-center md:px-[36px]">
          <h2 className="text-[24px] font-satoshi font-bold uppercase py-[10px] leading-[100%] md:text-[28px]">
            Add Bible Reading
          </h2>
          <div onClick={onClose} className="cursor-pointer">
            <img src={closeImg} className="w-[33px] h-auto md:w-[50px]" alt="Close" />
          </div>
        </div>
        
        {/* Orange Border */}
        <p className="border-b-[2px] border-[#FD9F2B] border-dotted md:border-[2.5px]"></p>

        {/* Form Content */}
        <section className="p-[36px]">
          <form onSubmit={handleSubmit}>
            {/* Date Selection */}
            <div className="mb-8">
              <label
                htmlFor="date"
                className="block text-[18px] font-medium text-gray-800 mb-3 uppercase font-satoshi"
              >
                Reading Date *
              </label>
              <div className="relative">
                <input
                  id="date"
                  type="date"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-[15px] focus:ring-2 focus:ring-[#FD9F2B] focus:border-transparent outline-none transition-all bg-white text-[16px]"
                  required
                  value={bibleData.date}
                  onChange={handleInputChange}
                  name="date"
                  min={today}
                />
                <svg
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              {bibleData.date && (
                <p className="mt-3 text-[14px] text-gray-600 font-satoshi">
                  Selected:{" "}
                  <span className="font-medium">
                    {new Date(bibleData.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </p>
              )}
            </div>

           

           

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center justify-center gap-3 bg-[#FD9F2B] text-white font-semibold py-4 px-8 rounded-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FD9F2B] focus:ring-offset-2 flex-1 text-[18px] font-satoshi
                  ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#E88F25]"}`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  <>
                    <img src={publish} alt="Publish" className="w-5 h-5" />
                    Create Reading
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 font-medium py-4 px-8 rounded-[15px] hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-1 text-[18px] font-satoshi"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default CreateBibleModal;