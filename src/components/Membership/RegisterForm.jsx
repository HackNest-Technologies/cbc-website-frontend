import { useState } from "react";
import InputField from "../../utils/InputField";
import ResponseModal from "../../utils/ResponseModal";
import ChurchLoadingAnimation from "../Loader/ChurchLoadingAnimation";
import { useMembershipRegistrationMutation } from "../../redux/apiSlice";

const RegisterForm = () => {
  const [createMembership, { isLoading, isSuccess }] = useMembershipRegistrationMutation();

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    salvation_date: "",
    baptized_in_water: false,
    interested_in_baptism: false,
    willingness_to_serve: false,
    prayer_needs: "",
    notes: "",
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
            label="Salvation Date"
            type="text"
            name="salvation_date"
            value={formVal.salvation_date}
            handleChanges={handleChange}
          />

          <InputField
            label="Prayer Needs"
            type="text"
            name="prayer_needs"
            value={formVal.prayer_needs}
            handleChanges={handleChange}
            textarea
          />

          <InputField
            label="Notes"
            type="text"
            name="notes"
            value={formVal.notes}
            handleChanges={handleChange}
            textarea
          />

          {/* ---------- Checkboxes ---------- */}
          <div className="pt-4 space-y-3 text-black">
            <label className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="baptized_in_water"
                checked={formVal.baptized_in_water}
                onChange={handleChange}
              />
              Baptized in Water
            </label>

            <label className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="interested_in_baptism"
                checked={formVal.interested_in_baptism}
                onChange={handleChange}
              />
              Interested in Baptism
            </label>

            <label className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="willingness_to_serve"
                checked={formVal.willingness_to_serve}
                onChange={handleChange}
              />
              Willing to Serve
            </label>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="text-lg flex justify-center font-medium text-white w-full
              bg-[radial-gradient(133.33%_122.42%_at_52.23%_0%,#FFB91E_0%,#FC8E33_54.74%)]
              h-[58px] rounded-[200px]"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
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
