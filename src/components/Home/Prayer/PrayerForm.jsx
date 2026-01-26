import { useState } from "react";
import SubmitBtn from "../../shared/SubmitBtn";
import ChurchLoadingAnimation from "../../Loader/ChurchLoadingAnimation";
import { useSendPrayerRequestMutation } from "../../../redux/apiSlice";
import ResponseModal from "../../../utils/ResponseModal";

const PrayerForm = () => {
  // Use mutation's isSuccess directly
  const [sendPrayerRequest, { isLoading, isSuccess }] =
    useSendPrayerRequestMutation();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const initialState = {
    requester_first_name: "",
    requester_last_name: "",
    requester_email_address: "",
    body: "",
  };

  const [prayerVal, setPrayerVal] = useState(initialState);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setPrayerVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendPrayerRequest(prayerVal).unwrap();

      // Show success modal
      setModalMessage(
        "Your prayer request has been submitted successfully! We will pray for you.",
      );
      setShowModal(true);

      // Clear the form
      setPrayerVal(initialState);
    } catch (error) {
      // Show error modal
      setModalMessage(
        error?.data?.message ||
          error?.error ||
          "There was an error submitting your prayer request. Please try again.",
      );
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="py-3 w-full">
          <label
            htmlFor="firstName"
            className="text-base uppercase leading-[19px] text-[#000] font-inter"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px] px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
            required
            name="requester_first_name"
            value={prayerVal.requester_first_name}
            onChange={handleValue}
            disabled={isLoading}
          />
        </div>

        <div className="py-3 w-full">
          <label
            htmlFor="lastName"
            className="text-base uppercase leading-[19px] text-[#000] font-inter"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px] px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
            required
            name="requester_last_name"
            value={prayerVal.requester_last_name}
            onChange={handleValue}
            disabled={isLoading}
          />
        </div>

        <div className="py-3 w-full">
          <label
            htmlFor="email"
            className="text-base uppercase leading-[19px] text-[#000] font-inter"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full h-[48px] bg-transparent border border-black my-2 text-black placeholder-[#ABAFB1] outline-none py-[16px] px-[32px] rounded-[100px] font-inter text-base md:h-[50px]"
            required
            name="requester_email_address"
            value={prayerVal.requester_email_address}
            onChange={handleValue}
            disabled={isLoading}
          />
        </div>

        <div className="bg-transparent py-3 w-full">
          <label
            htmlFor="prayerBody"
            className="text-base uppercase leading-[19px] text-[#000] font-inter"
          >
            Prayer Request
          </label>
          <textarea
            id="prayerBody"
            className="w-full h-[192px] border border-black my-4 text-black outline-none py-[16px] px-[32px] rounded-[20px] font-inter text-base resize-none md:rounded-[30px] md:h-[268px]"
            placeholder="Enter your prayer request here..."
            required
            name="body"
            value={prayerVal.body}
            onChange={handleValue}
            disabled={isLoading}
          />
        </div>

        <div className="my-2">
          {isLoading ? (
            <div className="flex justify-center items-center h-[58px]">
              <ChurchLoadingAnimation />
            </div>
          ) : (
            <SubmitBtn
              text="Submit"
              className="w-[100%] h-[58px]"
              type="submit"
            />
          )}
        </div>
      </form>

      {/* Response Modal */}
      <ResponseModal
        open={showModal}
        onClose={closeModal}
        success={isSuccess}
        title={isSuccess ? "Prayer Request Submitted" : "Submission Failed"}
        message={modalMessage}
      />
    </>
  );
};

export default PrayerForm;
