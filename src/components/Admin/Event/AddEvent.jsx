import { Link } from "react-router-dom";
const AddEvent = () => {
  return (
    <section>
      <section className="pt-2">
        <div className="flex justify-between">
          <h2 className="text-3xl font-inter font-semibold text-[#101828]">
            Events
          </h2>
          <Link
            to="/admin/events/add-events"
            className="flex items-center gap-2 w-[168px] h-[44px] py-[10px] px-[18px] bg-[#62A516] rounded-[8px] text-sm font-inter font-semibold text-white"
          >
            <button to="" className="text-lg">
              +
            </button>
            Add New Event
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AddEvent;
