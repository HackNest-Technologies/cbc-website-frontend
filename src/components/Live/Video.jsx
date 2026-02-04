import { useState } from "react";
import { useSelector } from "react-redux";
import GuestLiveActions from "./GuestLiveActions";
import LiveChat from "./LiveChat";
import GivePopup from "./GivePopup";
import SharePopup from "./SharePopup";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState("actions");
  const [openShare, setOpenShare] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const handleShareClick = async () => {
  const shareData = {
    title: "Truth of Calvary Ministries",
    text: "Join us live",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      // user cancelled
    }
  } else {
    setActiveSidebar("share");
  }
};


  return (
    <section className="container mx-auto pt-[100px] px-6 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Video */}
        <div className="md:col-span-6 lg:col-span-7 lg:h-[70vh]">
          <div className="bg-black rounded-xl overflow-hidden shadow-lg">
            <div className="relative pt-[56.25%]">
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay={isPlaying}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-3 h-auto">
          {activeSidebar === "actions" && (
            <GuestLiveActions
              onLiveChatClick={() => setActiveSidebar("chat")}
              onGiveClick={() => setActiveSidebar("give")}
              onShareClick={handleShareClick}
            />
          )}

          {activeSidebar === "chat" && (
            <LiveChat
              onClose={() => setActiveSidebar("actions")}
              showLoginPrompt={!user}
            />
          )}

          {activeSidebar === "give" && (
            <GivePopup onClose={() => setActiveSidebar("actions")} />
          )}

          {activeSidebar === "share" && (
            <SharePopup onClose={() => setActiveSidebar("actions")} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
