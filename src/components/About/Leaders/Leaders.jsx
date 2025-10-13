import leadersData from "../../../data/leadersData";
import Overseer from "./Overseer";
import PastorPopup from "./PastorPopup";
import Pastors from "./Pastors";

const Leaders = () => {
  const isOverseer = leadersData.filter((pastor) => pastor.isToggle === true);
  const pastors = leadersData.filter((pastor) => pastor.isToggle === false);



  return (
    <section>
      {isOverseer.map((leader) => (
        <Overseer key={leader.id} overseer={leader} />
      ))}
      <div className="container mx-auto mt-10 md:grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 ">
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
