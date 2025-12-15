import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import publish from "../../../assets/images/publish.png";
import { useCreateEventMutation } from "../../../redux/apiSlice";
import { FaArrowLeft } from "react-icons/fa6";
import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "2px auto",
};
const PostEvent = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [createEvent] = useCreateEventMutation();

  const initialState = {
    title: "",
    desc: "",
    start_date: "",
    end_date: "",
    time:""
  };

  const [eventKey, setEventKey] = useState(initialState);

  const handleBlogValue = (e) => {
    const { name, value } = e.target;
    setEventKey((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setStatus(null);
      setMsg("");
    }, 2000);
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createEvent(eventKey).unwrap();
      setStatus("success");
      setMsg(res.msg);
      clearMessageAfterTimeout();
      navigate("/admin-events", { state: { refresh: true } });
    } catch (error) {
      setStatus("reject");
      setMsg(error.msg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleEventSubmit} className="pb-20">
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-50 bg-opacity-55">
          <BarLoader
            color="#7F8F22"
            loading={loading}
            cssOverride={override}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <section>
        {status === "success" && (
          <div>
            <div className=" px-6 pb-4 fixed inset-0 flex justify-center flex-col items-center bg-slate-200">
              <div className="bg-white shadow-lg ">
                <p className="text-base  p-2 text-black font-spartan font-medium  md:text-xl">
                  {msg}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="pb-7 w-[40px]">
          <Link to="/admin-events">
            <FaArrowLeft className="text-xl" />
          </Link>
        </div>
        <div className="flex justify-between border-b border-[#C3C3C3] pb-4">
          <div>
            <h2 className="text-2xl font-inter font-semibold pb-1">
              Enter your event details
            </h2>
            <small className="text-sm font-inter text-[#B0B0B0] ">
              Fill in the details of the Event you want to create
            </small>
          </div>
          <div className="buttons flex gap-[20px] items-center">
            <button
              type="submit"
              className="flex font-inter font-semibold text-sm text-white rounded-[8px] py-[10px] px-[18px] gap-[8px] bg-[#FD9F2B] items-center w-[108px] h-[44px]"
            >
              <img src={publish} className="w-[14px] h-[14px]" />
              Publish
            </button>
          </div>
        </div>
      </section>
      <div className="flex gap-5 mt-5">
        <div className="w-full pt-4">
          <label htmlFor="title" className="text-base font-inter pb-1 block">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={eventKey.title}
            onChange={handleBlogValue}
            placeholder="Input event title"
            className="border-[2px] w-full h-[48px] py-[8px] px-[16px] rounded-[8px] outline-none"
            required
          />
        </div>
      </div>

      <div className="w-full pt-4">
        <label htmlFor="desc" className="text-base font-inter pb-1 block">
          Description
        </label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={eventKey.desc}
          onChange={handleBlogValue}
          placeholder="Enter your event description"
          className="border-[2px] w-full h-[90px] py-[8px] px-[16px] rounded-[8px] outline-none"
          required
        />
      </div>
      <div className="text-sm text-gray-500 font-inter"></div>
      <div className="flex gap-5 mt-5">
        <div className="w-full pt-4">
          <label htmlFor="date" className="text-base font-inter pb-1 block">
            Start Date
          </label>
          <input
            id="date"
            type="text"
            name="start_date"
            value={eventKey.start_date}
            onChange={handleBlogValue}
            placeholder="Input event  start date"
            className="border-[2px] w-full h-[48px] py-[8px] px-[16px] rounded-[8px] outline-none"
            required
          />
        </div>

        <div className="w-full pt-4">
          <label htmlFor="date" className="text-base font-inter pb-1 block">
            End Date
          </label>
          <input
            id="date"
            type="text"
            name="end_date"
            value={eventKey.end_date}
            onChange={handleBlogValue}
            placeholder="Input event end date"
            className="border-[2px] w-full h-[48px] py-[8px] px-[16px] rounded-[8px] outline-none"
            required
          />
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-full pt-4">
          <label htmlFor="time" className="text-base font-inter pb-1 block">
            Time
          </label>
          <input
            id="time"
            type="text"
            name="time"
            value={eventKey.time}
            onChange={handleBlogValue}
            placeholder="Input event time"
            className="border-[2px] w-full h-[48px] py-[8px] px-[16px] rounded-[8px] outline-none"
            required
          />
        </div>
      </div>

      {/* <div className="flex gap-5 mt-5">
        <div className="w-full pt-4">
          <label htmlFor="location" className="text-base font-inter pb-1 block">
            Location
          </label>
          <input
            id="location"
            type="text"
            name="location"
            value={eventKey.location}
            onChange={handleBlogValue}
            placeholder="Input event Location"
            className="border-[2px] w-full h-[48px] py-[8px] px-[16px] rounded-[8px] outline-none"
            required
          />
        </div>
      </div> */}
    </form>
  );
};

export default PostEvent;
