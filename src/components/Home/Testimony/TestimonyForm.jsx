import { useState } from "react";
import uploadICon from "../../../assets/images/upload.png";
import SubmitBtn from "../../shared/SubmitBtn";
import { useSendTestimonyMutation } from "../../../redux/apiSlice";

const TestimonyForm = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [sendTestimony] = useSendTestimonyMutation();
  const initialState = {
    testifier_first_name: "",
    testifier_last_name: "",
    testifier_email_address: "",
    body: "",
    file: "",
  };

  const [testimonyVal, setTestimony] = useState(initialState);
  const handleTestimonyValue = (e) => {
    const { name, value } = e.target;
    setTestimony((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    if (file) {
      setFileName(file.name);
      setTestimony((prev) => ({ ...prev, file }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setTestimony((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "testimony[testifier_first_name]",
      testimonyVal.testifier_first_name
    );
    formData.append(
      "testimony[testifier_last_name]",
      testimonyVal.testifier_last_name
    );
    formData.append("testimony[body]", testimonyVal.body);
    formData.append("testimony[featured]", false);
    if (testimonyVal.file) {
      formData.append("testimony[file]", testimonyVal.file);
    }

    try {
      const res = await sendTestimony(formData).unwrap();
      setTestimony(initialState);
      setFileName("");
      alert("Testimony submitted successfully!");
    } catch (error) {
      alert("Something went wrong while sending your testimony.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-4 w-full">
        <label
          htmlFor="name"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          First Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
          value={testimonyVal.testifier_first_name}
          onChange={handleTestimonyValue}
          name="testifier_first_name"
        />
      </div>
      <div className="py-4 w-full">
        <label
          htmlFor="last_name"
          className="text-base  uppercase leading-[19px] text-[#000] font-inter"
        >
          Last Name
        </label>
        <input
          id="last_naame"
          type="text"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
          value={testimonyVal.testifier_last_name}
          onChange={handleTestimonyValue}
          name="testifier_last_name"
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
          type="email"
          className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px]  px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
          required
          value={testimonyVal.testifier_email_address}
          onChange={handleTestimonyValue}
          name="testifier_email_address"
        />
      </div>

      <div className="bg-transparent py-4 w-full">
        <label
          htmlFor="body"
          className="text-base uppercase leading-[19px] text-[#000] font-inter"
        >
          Testimony
        </label>
        <textarea
          id="body"
          className="w-full h-[192px]  border border-black my-4 text-black outline-none py-[16px] px-[32px] rounded-[20px] font-inter text-base resize-none md:rounded-[30px] md:h-[268px]"
          required
          value={testimonyVal.body}
          onChange={handleTestimonyValue}
          name="body"
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
    </form>
  );
};

export default TestimonyForm;
