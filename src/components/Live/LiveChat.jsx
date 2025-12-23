import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getDatabase, onValue, ref, set, off } from "firebase/database";
import liveChat from "../../assets/images/liveChat.svg";
import smiley from "../../assets/images/ph_smiley.png";
import sendIcon from "../../assets/images/proicons_send.png";

const LiveChat = () => {
  const { user } = useSelector((state) => state.auth);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState("");
  const messagesEndRef = useRef(null);

  /* ========================
     Send Message
  ========================= */
  const sendChatMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const database = getDatabase();

    set(ref(database, `livestream_chat_messages/${Date.now()}`), {
      message: chatMessage,
      timestamp: Date.now(),
      user_id: user.id,
      username: `${user.first_name} ${user.last_name}`,
    });

    setChatMessage("");
  };

  /* ========================
     Fetch Messages
  ========================= */
  useEffect(() => {
    const database = getDatabase();
    const messagesRef = ref(database, "livestream_chat_messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const messages = Object.entries(data)
        .map(([id, value]) => ({ id, ...value }))
        .sort((a, b) => a.timestamp - b.timestamp);

      setChatMessages(messages);
    });

    return () => off(messagesRef);
  }, []);

  /* ========================
     Auto Scroll to Bottom
  ========================= */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  /* ========================
     Helpers
  ========================= */
  const getInitials = (name) => {
    if (!name) return "??";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="flex flex-col rounded-[16px] border-[2px] border-dashed border-[#FC8E33] w-full h-auto md:h-[300px] lg:h-[430px] lg:border-[5px]">
      {/* ================= Header ================= */}
      <div className="flex p-[16px] justify-between items-center border-dashed border-b-[2px] w-full lg:border-b-[5px] border-[#FC8E33]">
        <div className="flex items-center gap-[8px]">
          <img src={liveChat} alt="logo" className="w-[30px] h-[28px]" />
          <p className="text-black font-satoshi text-[18px] font-bold uppercase">
            Live Chat
          </p>
        </div>

        <button
          type="button"
          className="flex px-[18px] items-center rounded-[36px] bg-black"
        >
          <p className="text-white text-[16px] uppercase py-[5px]">Close</p>
        </button>
      </div>

      {/* ================= Messages ================= */}
      <div className="flex flex-col gap-[12px] px-[12px] py-[16px] overflow-y-auto flex-1">
        {chatMessages.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No messages yet. Be the first to chat!
          </p>
        ) : (
          chatMessages.map((chat) => {
            const isCurrentUser = chat.user_id === user.id;

            return (
              <div
                key={chat.id}
                className={` flex  items-start gap-[8px] self-stretch ${
                  isCurrentUser ? "justify-end" : "justify-start"
                }`}
              >
                {/* User Info - Only show for other users' messages on left side */}
                {!isCurrentUser && (
                  <div className="flex gap-[10px] items-center min-w-fit">
                    <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#BCBCBC]">
                      <p className="text-xs">{getInitials(chat.username)}</p>
                    </div>

                    <p className="text-black font-satoshi text-[16px] font-bold leading-[1.4] capitalize">
                      {chat.username}
                    </p>
                  </div>
                )}

                {/* Message Bubble */}
                <div className=" flex  pt-[8px]">
                  <p
                    className={`
                      font-satoshi text-[16px] font-normal leading-[1.4] capitalize 
                      ${isCurrentUser ? "text-black" : "text-black"}
                    `}
                  >
                    {chat.message}
                  </p>
                </div>

                {/* User Info - Only show for current user's messages on right side */}
                {isCurrentUser && (
                  <div className="flex gap-[10px] items-center min-w-fit ">
                    <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full bg-[#BCBCBC]">
                      <p className="text-xs">{getInitials(chat.username)}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ================= Input ================= */}
      <div className="flex px-[px] py-[16px] border-t-2 border-dashed border-[#FC8E33]  ">
        <form
          onSubmit={sendChatMessage}
          className="flex  items-center gap-[12px] w-full  px-[8px] py-[2px] rounded-[30px] bg-[#E8E8E8] mx-[8px]"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#FC8E33] border-none"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <div className="flex gap-[8px] items-center">
            <button type="button" className="">
              <img
                src={smiley}
                alt="smiley"
                className="w-[23px] h-[23px] button"
              />
            </button>
            <button
              type="submit"
              className="text-[#333] font-satoshi text-[16px] underline hover:text-[#FC8E33]"
            >
              <img
                src={sendIcon}
                alt="sendIcon"
                className="w-[24px] h-[24px] button cursor-pointer"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LiveChat;
