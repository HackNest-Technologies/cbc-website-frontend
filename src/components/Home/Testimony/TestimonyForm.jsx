import { useState } from "react";
import uploadICon from "../../../assets/images/upload.png";
import SubmitBtn from "../../shared/SubmitBtn";
import ChurchLoadingAnimation from "../../Loader/ChurchLoadingAnimation";
import { useSendTestimonyMutation } from "../../../redux/apiSlice";
import ResponseModal from "../../../utils/ResponseModal";

const TestimonyForm = () => {
  const [sendTestimony, { isLoading, isSuccess }] = useSendTestimonyMutation();

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState("");

  const initialState = {
    testifier_first_name: "",
    testifier_last_name: "",
    testifier_email_address: "",
    body: "",
    file: "",
  };

  const [testimonyVal, setTestimony] = useState(initialState);

  /* ---------------- Handlers ---------------- */

  const handleTestimonyValue = (e) => {
    const { name, value } = e.target;
    setTestimony((prev) => ({ ...prev, [name]: value }));
  };

  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleFile = async (file) => {
    if (!file || !file.type.startsWith("image/")) {
      setModalMessage("Please upload a valid image file.");
      setShowModal(true);
      return;
    }

    try {
      const base64 = await convertFileToBase64(file);
      setFileName(file.name);
      setFilePreview(base64);
      setTestimony((prev) => ({ ...prev, file: base64 }));
    } catch {
      setModalMessage("Error processing the image file.");
      setShowModal(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const clearFile = () => {
    setFileName("");
    setFilePreview("");
    setTestimony((prev) => ({ ...prev, file: "" }));
  };

  /* ---------------- Submit ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "testimony[testifier_first_name]",
      testimonyVal.testifier_first_name,
    );
    formData.append(
      "testimony[testifier_last_name]",
      testimonyVal.testifier_last_name,
    );
    formData.append(
      "testimony[testifier_email_address]",
      testimonyVal.testifier_email_address,
    );
    formData.append("testimony[body]", testimonyVal.body);
    formData.append("testimony[featured]", false);

    if (testimonyVal.file) {
      formData.append("testimony[file]", testimonyVal.file);
    }

    try {
      await sendTestimony(formData).unwrap();

      setModalMessage("Your testimony has been submitted successfully.");
      setShowModal(true);

      setTestimony(initialState);
      clearFile();
    } catch (err) {
      setModalMessage(
        err?.data?.message ||
          "There was an error submitting your testimony. Please try again.",
      );
      setShowModal(true);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="py-4">
          <label className="uppercase text-base">First Name</label>
          <input
            type="text"
            name="testifier_first_name"
            required
            disabled={isLoading}
            value={testimonyVal.testifier_first_name}
            onChange={handleTestimonyValue}
            className="w-full h-[48px] border border-black rounded-[100px] px-[32px] mt-2"
          />
        </div>

        {/* Last Name */}
        <div className="py-4">
          <label className="uppercase text-base">Last Name</label>
          <input
            type="text"
            name="testifier_last_name"
            required
            disabled={isLoading}
            value={testimonyVal.testifier_last_name}
            onChange={handleTestimonyValue}
            className="w-full h-[48px] border border-black rounded-[100px] px-[32px] mt-2"
          />
        </div>

        {/* Email */}
        <div className="py-4">
          <label className="uppercase text-base">Email</label>
          <input
            type="email"
            name="testifier_email_address"
            required
            disabled={isLoading}
            value={testimonyVal.testifier_email_address}
            onChange={handleTestimonyValue}
            className="w-full h-[48px] border border-black rounded-[100px] px-[32px] mt-2"
          />
        </div>

        {/* Body */}
        <div className="py-4">
          <label className="uppercase text-base">Testimony</label>
          <textarea
            name="body"
            required
            disabled={isLoading}
            value={testimonyVal.body}
            onChange={handleTestimonyValue}
            className="w-full h-[220px] border border-black rounded-[20px] px-[32px] py-4 mt-2 resize-none"
          />
        </div>

        {/* Upload */}
        <div className="py-4">
          <h2 className="uppercase mb-3">Upload your picture</h2>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-3 border-dashed rounded-lg p-[24px] h-[186px] flex flex-col items-center justify-center transition-all
              ${isDragging ? "border-[#FC8E33]" : "border-[#FC9032]"}`}
          >
            {filePreview ? (
              <div className="flex flex-col items-center">
                <img
                  src={filePreview}
                  alt="Preview"
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <p className="text-sm mb-2">{fileName}</p>
                <button
                  type="button"
                  onClick={clearFile}
                  className="text-xs text-red-500"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <img src={uploadICon} className="w-[42px] mb-2" />
                <p className="text-sm mb-1">Drag here to start uploading</p>

                <div className="flex items-center w-full px-4">
                  <div className="flex-1 border-t" />
                  <span className="mx-2 text-xs">OR</span>
                  <div className="flex-1 border-t" />
                </div>

                <label className="mt-2 cursor-pointer">
                  <span className="text-xs text-[#FC9032] border border-[#FC9032] rounded px-3 py-1">
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

        {/* Submit */}
        <div className="py-6">
          {isLoading ? (
            <div className="h-[58px] flex items-center justify-center">
              <ChurchLoadingAnimation />
            </div>
          ) : (
            <SubmitBtn text="Submit" className="w-full h-[58px]" />
          )}
        </div>
      </form>

      <ResponseModal
        open={showModal}
        onClose={() => setShowModal(false)}
        success={isSuccess}
        title={isSuccess ? "Testimony Submitted" : "Submission Failed"}
        message={modalMessage}
      />
    </>
  );
};

export default TestimonyForm;
