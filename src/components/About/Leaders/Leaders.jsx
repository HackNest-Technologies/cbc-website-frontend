import leadersData from "../../../data/leadersData";
import Overseer from "./Overseer";
import PastorPopup from "./PastorPopup";
import Pastors from "./Pastors";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Leaders = () => {
  const isOverseer = leadersData.filter((pastor) => pastor.isToggle === true);
  const pastors = leadersData.filter((pastor) => pastor.isToggle === false);


    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <section id="leadership" className="pt-[30px] md:pt-[40px]">
      {isOverseer.map((leader) => (
        <Overseer key={leader.id} overseer={leader} />
      ))}
      <div className="container mx-auto mt-10 md:grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
        {pastors.map((pastor) => (
          <div key={pastor.id}>
            <Pastors pastors={pastor} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
