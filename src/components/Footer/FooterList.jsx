import { Link } from "react-router-dom";
import youtube from "../../assets/images/basil_youtube-outline.png";
import facebook from "../../assets/images/facebook-02.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/devicon_twitter.png";
const FooterList = () => {
  return (
    <>
      <section className="text-white container mx-auto flex  gap-10 lg:justify-between lg:gap-0">
        {/* First column of links */}
        <div>
          <h2 className=" text-base lg:text-xl py-2 lg:py-6  uppercase font-satoshi">About</h2>
          <ul className="list-none font-inter">
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/about">About Us</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/donate">Leadership</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/volunteer">CBC branches</Link>
            </li>
          </ul>
        </div>

        {/* Second column of links */}
        <div>
          <h2 className=" text-base lg:text-xl py-2 lg:py-6  uppercase font-satoshi">
            Watch & Listen
          </h2>
          <ul className="list-none  font-inter">
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/about">Live Service </Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/donate">Past Sermons </Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/volunteer">Daily Devotional </Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/contact">Daily Devotional </Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/events">House fellowship</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className=" text-base lg:text-xl py-2 lg:py-6  uppercase font-satoshi">Community </h2>
          <ul className="list-none  font-inter">
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/about">Discussion Forum</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/donate">Prayer Requests</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/volunteer">Testimonies</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/contact">Departments & Groups</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/events">New Member’s Corner</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/careers">Counselling</Link>
            </li>
          </ul>
        </div>

        {/* fourth column */}
        <div>
          <h2 className=" text-base lg:text-xl py-2 lg:py-6  uppercase font-satoshi">learning </h2>
          <ul className="list-none  font-inter">
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/about">Membership class</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/donate">Maturity class</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/volunteer">Ministerial class</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/contact">Missions</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/events">Marriage class</Link>
            </li>
          </ul>
        </div>

        {/* Fifth Column */}

        <div>
          <h2 className=" text-base lg:text-xl py-2 lg:py-6  uppercase font-satoshi">
            Arms of Trucalms
          </h2>
          <ul className="list-none  font-inter">
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/about">TEA</Link>
            </li>
            <li className="pt-1 lg:pt-5 text-sm lg:text-base">
              <Link to="/donate">CSV</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* icon list */}

      <div className="flex justify-center  gap-4 pt-[20px] lg:pt-[100px]  ">
        <a href="" className="bg-[#FD9F2B] rounded-full p-2  lg:p-[11px] ">
          <img src={instagram} alt="" className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px] " />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-2  lg:p-[11px]">
          <img src={facebook} alt="" className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-2  lg:p-[11px]">
          <img src={twitter} alt="" className="w-[12px] h-[12px] lg:w-[19px] lg:h-[19px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-2  lg:p-[11px]">
          <img src={youtube} alt="" className="w-[15px] h-[15px] lg:w-[24px] lg:h-[24px]" />
        </a>
      </div>
    </>
  );
};

export default FooterList;
