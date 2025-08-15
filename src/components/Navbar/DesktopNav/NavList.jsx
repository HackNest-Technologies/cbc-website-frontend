import { Link } from "react-router-dom";
import youtube from "../../../assets/images/basil_youtube-outline.png";
import facebook from "../../../assets/images/facebook-02.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/devicon_twitter.png";
const NavList = () => {
  return (
    <section className="container mx-auto">
      <section className="text-white flex justify-between md:gap-10 md:lg:gap-0">
        {/* First column of links */}
        <div>
          <h2 className="md:text-lg md:py-3 lg:text-xl lg:py-5 uppercase font-satoshi">About</h2>
          <ul className="list-none font-inter">
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">About Us</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Leadership</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">CBC branches</Link>
            </li>
          </ul>
        </div>

        {/* Second column of links */}
        <div>
          <h2 className="md:text-lg md:py-3 lg:text-xl lg:py-5 uppercase font-satoshi">
            Watch & Listen
          </h2>
          <ul className="list-none  font-inter">
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Live Service </Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Past Sermons </Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Daily Devotional </Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Daily Devotional </Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">House fellowship</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="md:text-lg md:py-3 lg:text-xl lg:py-5 uppercase font-satoshi">Community </h2>
          <ul className="list-none  font-inter">
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Discussion Forum</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Prayer Requests</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Testimonies</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Departments & Groups</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">New Member’s Corner</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Counselling</Link>
            </li>
          </ul>
        </div>

        {/* fourth column */}
        <div>
          <h2 className="md:text-lg md:py-3 lg:text-xl lg:py-5 uppercase font-satoshi">learning </h2>
          <ul className="list-none  font-inter">
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Membership class</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Maturity class</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Ministerial class</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Missions</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Marriage class</Link>
            </li>
          </ul>
        </div>

        {/* Fifth Column */}

        <div>
          <h2 className="md:text-lg md:py-3 lg:text-xl lg:py-5 uppercase font-satoshi">
            {" "}
            Registrations{" "}
          </h2>
          <ul className="list-none font-inter">
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Marriage</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Special Thanksgiving</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Baby Dedication</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Naming ceremony</Link>
            </li>
            <li className="md:pt-2 md:text-sm lg:pt-3 lg:text-base ">
              <Link to="/">Deliverance</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex flex-wrap justify-between items-center border-t-[1px] border-b-[1px] border-[#5C5C5C] md:mt-[clamp(10px,1.5rem,20px)] lg:mt-[clamp(40px,3rem,60px)]">
        <p className="text-[35px] lg:text-[44px] font-satoshi uppercase ">
          calvary bible church
        </p>
        <p className="text-base lg:text-[24px] font-inter italic">
          Raising an army for christ
        </p>
      </div>

      {/* icon list */}

      <div className="flex gap-4 md:pt-[clamp(10px,1.5rem,20px)] lg:pt-[clamp(40px,3rem,80px)]">
        <a href="" className="bg-[#FD9F2B] rounded-full p-[11px]">
          <img src={instagram} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[11px]">
          <img src={facebook} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[11px]">
          <img src={twitter} alt="" className="w-[20px] h-[20px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[11px]">
          <img src={youtube} alt="" className="w-[24px] h-[24px]" />
        </a>
      </div>
    </section>
  );
};

export default NavList;
