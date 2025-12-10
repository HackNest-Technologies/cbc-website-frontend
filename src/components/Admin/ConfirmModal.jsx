import warning from "../../assets/images/warning.png"
const ConfirmModal = ({ isOpen, onClose, onConfirm,msg, warningMsg }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-100 flex items-center justify-center">
      <div className="w-[453px] bg-white p-[15px] rounded-[15px] shadow-lg">
        <h2 className="text-center font-semibold font-inter text-[26px] mb-4">{msg}</h2>
        <div className="flex justify-center">
          <img src={warning} className="bg-none w-[219px] h-[241px]" />
        </div>
        <p className="mb-4 font-inter text-base text-center pt-3">{warningMsg}</p>
        <div className="flex justify-center gap-3 py-2">
          <button onClick={onClose} className="mr-2 px-4 py-2 border border-[#D0D5DD] rounded-[8px] w-[204px] h-[44px] font-semibold text-sm font-inter">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-[#F7212E] text-white rounded-[8px] w-[204px] h-[44px] font-semibold text-sm font-inter  ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;