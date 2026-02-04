import { useState } from "react";
import InputField from "../../utils/InputField";
import ResponseModal from "../../utils/ResponseModal";
import ChurchLoadingAnimation from "../Loader/ChurchLoadingAnimation";
import { useMembershipRegistrationMutation } from "../../redux/apiSlice";
import SubmitBtn from "../shared/SubmitBtn";

const RegisterForm = () => {
  const [createMembership, { isLoading, isSuccess }] =
    useMembershipRegistrationMutation();

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    gender: "",
  };

  const [formVal, setFormVal] = useState(initialState);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormVal((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createMembership({
        membership_class_registration: formVal,
      }).unwrap();

      setModalMessage(
        "Your membership class registration has been submitted successfully!.",
      );
      setShowModal(true);
      setFormVal(initialState);
    } catch (error) {
      // Show error modal
      setModalMessage(
        error?.data?.message ||
          error?.error ||
          "There was an error submitting the registration form. Please try again.",
      );
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* ---------- Loader ---------- */}
      {isLoading && (
        <div className="fixed inset-0 z-[40] flex items-center justify-center bg-black/50">
          <ChurchLoadingAnimation />
        </div>
      )}

      <section className="px-6 pt-20 container mx-auto md:px-0 lg:w-[70vw] lg:pt-[190px]">
        <h2 className="text-center text-[32px] border-b-[3px] border-dotted border-[#FC8E33] pt-[16px] pb-[32px] font-satoshi uppercase md:text-[48px] md:text-left">
          Membership Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="px-6 pt-[50px] md:px-0 space-y-4"
        >
          <InputField
            label="First Name"
            type="text"
            name="first_name"
            value={formVal.first_name}
            handleChanges={handleChange}
            required
          />

          <InputField
            label="Last Name"
            type="text"
            name="last_name"
            value={formVal.last_name}
            handleChanges={handleChange}
            required
          />

          <InputField
            label="Email"
            type="text"
            name="email"
            value={formVal.email}
            handleChanges={handleChange}
            required
          />

          <InputField
            label="Phone Number"
            type="text"
            name="phone_number"
            value={formVal.phone_number}
            handleChanges={handleChange}
            required
          />

          <InputField
            label="Gender"
            type="text"
            name="gender"
            value={formVal.gender}
            placeholder="Input Date"
            handleChanges={handleChange}
          />
          <div className="pt-6">
            <SubmitBtn
              text={isLoading ? "Submitting..." : "Submit"}
              className="w-[100%] h-[58px]"
              type="submit"
            />
          </div>
        </form>
        {/* ---------- Modal ---------- */}
        <ResponseModal
          open={showModal}
          onClose={closeModal}
          success={isSuccess}
          title={
            isSuccess
              ? "Membership class registration Submitted"
              : "Submission Failed"
          }
          message={modalMessage}
        />
      </section>
    </>
  );
};

export default RegisterForm;
