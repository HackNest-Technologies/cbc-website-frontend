import branches from "../../data/branches";
import leadersData from "../../data/leadersData";
import Overseer from "./Overseer";
import Pastors from "./Pastors";

const Leaders = () => {
  const isOverseer = leadersData.filter((pastor) => pastor.isToggle === true);
  const pastors = leadersData.filter((pastor) => pastor.isToggle === false);

  console.log(isOverseer);
  return (
    <section className="">
      {isOverseer.map((leader) => (
        <Overseer
          key={leader.id}
          pastorName={leader.pastorName}
          thumbnail={leader.thumbnail}
          description={leader.description}
        />
      ))}
      <div className="md:grid md:grid-cols-2 container mx-auto md:gap-x-8 mt-10">
        {pastors.map((pastor) => (
          <Pastors
            key={pastor.id}
            pastorName={pastor.pastorName}
            thumbnail={pastor.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default Leaders;
