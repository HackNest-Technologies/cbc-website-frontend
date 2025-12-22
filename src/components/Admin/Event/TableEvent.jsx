import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deletebtn from "../../../assets/images/deleteIcon.png";
import editBtn from "../../../assets/images/editIcon.png";
import ConfirmModal from "../ConfirmModal";
import { useGetEventQuery, useDeleteEventMutation } from "../../../redux/apiSlice";
const TableEvent = ({ events = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();
  const [deleteEvent] = useDeleteEventMutation();
  const { refetch } = useGetEventQuery();

  const handleDelete = async () => {
    const {id} = selectedEvent
    await deleteEvent(id).unwrap()
    await refetch(); // Manually trigger refetch
    closeModal();
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEdit = (event) => {
    navigate("/admin/edit-event", { state: { event } });
  };

  return (
    <div>
      <table className="w-full mt-14">
        <thead
          className="h-[44px] rounded-[20px] border shadow-sm"
          style={{ backgroundColor: "rgba(228, 231, 236, 1)" }}
        >
          <tr className="text-left font-medium font-inter text-sm">
            <th className=" py-[12px] px-[10px]">Title</th>
            <th className="">Image</th>
            <th className="">Date</th>
            <th className="w-[15%]">Modify</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border-b">
              <td
                className="pt-8 pb-3 font-spartan text-base font-bold"
                style={{ color: "rgba(71, 84, 103, 1)" }}
              >
                {event.title}
              </td>
              <td className="pt-8 pb-3">
                {/* {event.image_url && (
                  <img
                    src={event.image_url} // Assuming your API returns image.url
                    alt={event.title}
                    className="w-[99px] h-[68px] rounded-[5px] object-cover"
                  />
                )} */}
              </td>
              <td className="pt-8 pb-3 text-sm font-inter">{event.start_date} - {event.end_date}</td>
              <td className="pt-8 pb-3 flex gap-10">
                <button onClick={() => openModal(event)}>
                  <img
                    src={deletebtn}
                    alt="Delete"
                    className="w-[40px] h-[40px]"
                  />
                </button>
                <button onClick={() => handleEdit(event)}>
                  <img src={editBtn} alt="Edit" className="w-[40px] h-[40px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleDelete}
        msg={"Delete Event Post?"}
      />
    </div>
  );
};


export default TableEvent;