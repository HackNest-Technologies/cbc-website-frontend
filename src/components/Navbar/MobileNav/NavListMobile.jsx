import { Link } from "react-router-dom";
import youtube from "../../../assets/images/basil_youtube-outline.png";
import facebook from "../../../assets/images/facebook-02.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/devicon_twitter.png";

const NavListMobile = () => {
  return (
    <>
      <section className="px-6 text-white container mx-auto">
        {/* First column of links */}
        <div className="pt-10 flex justify-between">
          <div>
            <h2 className=" text-xl pt-4 uppercase font-satoshi">About</h2>
            <ul className="list-none font-inter">
              <li className="pt-3 text-base">
                <Link to="/about">About Us</Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/donate">Leadership</Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/volunteer">CBC branches</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" text-xl pt-4 uppercase font-satoshi">
              Watch & Listen
            </h2>
            <ul className="list-none  font-inter">
              <li className="pt-3 text-base">
                <Link to="/about">Live Service </Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/donate">Past Sermons </Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/volunteer">Daily Devotional </Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/contact">Bible in one year </Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/events">House fellowship</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Second column of links */}
        <div className="pt-10  gap-2 flex justify-between">
          <div>
            <div>
              <h2 className=" text-xl pt-4 uppercase font-satoshi">
                Community{" "}
              </h2>
              <ul className="list-none  font-inter">
                <li className="pt-3 text-base">
                  <Link to="/about">Discussion Forum</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/donate">Prayer Requests</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/volunteer">Testimonies</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/contact">Departments & Groups</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/events">New Member’s Corner</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/careers">Counselling</Link>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <h2 className=" text-xl pt-4 uppercase font-satoshi">
                Registrations{" "}
              </h2>
              <ul className="list-none font-inter">
                <li className="pt-3 text-base">
                  <Link to="/about">Marriage</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/donate">Special Thanksgiving</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/volunteer">Baby Dedication</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/contact">Naming ceremony</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link to="/events">Deliverance</Link>
                </li>
              </ul>
            </div>
          </div>



          <div>
            <h2 className=" text-xl pt-4 uppercase font-satoshi">learning </h2>
            <ul className="list-none  font-inter">
              <li className="pt-3 text-base">
                <Link to="/about">Membership class</Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/donate">Maturity class</Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/volunteer">Ministerial class</Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/contact">Missions</Link>
              </li>
              <li className="pt-3 text-base">
                <Link to="/events">Marriage class</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-10 py-[16px] flex flex-col border-t-[1px] border-b-[1px] border-[#5C5C5C] mt-[60px]">
        <p className="text-[24px] font-satoshi uppercase ">
          calvary bible church
        </p>
        <p className="text-[14px] font-inter italic">
          Raising an army for christ
        </p>
      </div>

      {/* icon list */}

      <div className="flex px-6 gap-4 py-10">
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={instagram} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={facebook} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={twitter} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="" className="bg-[#FD9F2B] rounded-full p-[12px]">
          <img src={youtube} alt="" className="w-[24px] h-[24px]" />
        </a>
      </div>
    </>
  );
};
export default NavListMobile;
