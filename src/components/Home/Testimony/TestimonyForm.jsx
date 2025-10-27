import { useState } from "react";
import uploadICon from "../../../assets/images/upload.png";
import SubmitBtn from "../../shared/SubmitBtn";

const TestimonyForm = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };
  return (
    <section>
      <div className="py-4 w-full">
        <label
          htmlFor="name"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-white placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
        />
      </div>
      <div className="py-4 w-full">
        <label
          htmlFor="mail"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          Email
        </label>
        <input
          id="mail"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-white placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
        />
      </div>

      <div className="bg-transparent py-4 w-full">
        <label
          htmlFor="mail"
          className="text-base uppercase leading-[19px] text-[#000] font-inter"
        >
          Email
        </label>
        <textarea
          id="mail"
          className="w-full h-[192px]  border border-black my-4 text-black outline-none py-[16px] px-[32px] rounded-[20px] font-inter text-base resize-none md:rounded-[30px] md:h-[268px]"
          required
        />
      </div>

      <div className="">
        <h2 className="text-base uppercase mb-4 text-[#000] font-inter">
          Upload your picture
        </h2>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-3 border-dashed rounded-lg p-[24px] w-full h-[186px] flex flex-col items-center justify-center transition-all
          ${isDragging ? "border-[#FC8E33]" : "border-[#FC9032]"}`}
        >
          <img
            src={uploadICon}
            alt="Upload icon"
            className="w-[42px] h-[42px] object-cover"
          />
          {fileName ? (
            <p className="text-[#0B0B0B] text-sm">{fileName}</p>
          ) : (
            <>
              <p className="text-[#0B0B0B] text-sm mb-1">
                Drag here to start uploading
              </p>
              <div className="flex items-center w-full px-4">
                <div className="flex-1 border-t border-gray-400"></div>
                <span className="mx-2 text-[#6D6D6D] text-xs">OR</span>
                <div className="flex-1 border-t border-gray-400"></div>
              </div>
              <label className="mt-2">
                <span className="text-xs text-[#FC9032] font-inter font-semibold bg-transparent border-1 border-[#FC9032] rounded-[8px]  px-[12px] py-[6px] cursor-pointer">
                  Browse files
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </>
          )}
        </div>
      </div>

      <div className="py-4 md:py-10">
        <SubmitBtn text="Submit" className="w-[100%] h-[58px]" />
      </div>
    </section>
  );
};

export default TestimonyForm;
