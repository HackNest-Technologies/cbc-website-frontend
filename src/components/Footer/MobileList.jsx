import { Link } from "react-router-dom";
import youtube from "../../assets/images/basil_youtube-outline.png";
import facebook from "../../assets/images/facebook-02.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/devicon_twitter.png";
const MobileList = () => {
  return (
    <>
      <section className="px-6 text-white container mx-auto flex justify-between ">
        {/* First column of links */}
        <div className="pt-6">
          <div>
            <h2 className=" text-sm md:text-base pt-5 uppercase font-satoshi">About</h2>
            <ul className="list-none font-inter">
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/about">About Us</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/leadership">Leadership</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/cbc--branches">CBC branches</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" text-sm md:text-base pt-5 uppercase font-satoshi">Community </h2>
            <ul className="list-none  font-inter">
              <li className="pt-3 text-xs md:text-sm">
              <a>Discussion Forum</a>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/prayer-request">Prayer Requests</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/testimonies">Testimonies</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/departments-group">Departments & Groups</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/new-members">New Member’s Corner</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/counselling">Counselling</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" text-sm md:text-base pt-5 uppercase font-satoshi">
              Arms of Trucalms
            </h2>
            <ul className="list-none  font-inter">
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/tea">TEA</Link>
              </li>
              <li className="pt-3 text-xs md:text-sm">
                <Link to="/csv">CSV</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Second column of links */}
        <div className="pt-6">
        <div>
          <h2 className=" text-sm md:text-base pt-5 uppercase font-satoshi">
            Watch & Listen
          </h2>
          <ul className="list-none  font-inter">
            <li className="pt-3 text-xs md:text-sm">
              <Link to="/live-service">Live Service </Link>
            </li>
            <li className="pt-3 text-xs md:text-sm">
              <Link to="/past-sermons">Past Sermons </Link>
            </li>
            <li className="pt-3 text-xs md:text-sm">
              <Link to="/daily-devotional">Daily Devotional </Link>
            </li>
            <li className="pt-3 text-xs md:text-sm">
              <Link to="/daily-devotional">Daily Devotional </Link>
            </li>
            <li className="pt-3 text-xs">
              <Link to="/house-fellowship">House fellowship</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}

        {/* fourth column */}
        <div>
          <h2 className=" text-sm md:text-base pt-5 uppercase font-satoshi">learning </h2>
          <ul className="list-none  font-inter">
            <li className="pt-3 text-xs">
              <Link to="/membership-class">Membership class</Link>
            </li>
            <li className="pt-3 text-xs">
              <Link to="/maturity-class">Maturity class</Link>
            </li>
            <li className="pt-3 text-xs">
              <Link to="/ministerial-class">Ministerial class</Link>
            </li>
            <li className="pt-3 text-xs">
              <Link to="/mission">Missions</Link>
            </li>
            <li className="pt-3 text-xs">
              <Link to="/marriage-class">Marriage class</Link>
            </li>
          </ul>
        </div>
        </div>

        {/* Fifth Column */}
      </section>

      {/* icon list */}

      <div className="flex justify-center  gap-4 py-1 md:py-20">
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={instagram} alt="" className="w-[10px] h-[10px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={facebook} alt="" className="w-[10px] h-[10px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={twitter} alt="" className="w-[10px] h-[10px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={youtube} alt="" className="w-[10px] h-[10px]" />
        </a>
      </div>
    </>
  );
};

export default MobileList;
