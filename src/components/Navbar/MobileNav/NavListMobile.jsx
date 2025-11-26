import { Link } from "react-router-dom";
import youtube from "../../../assets/images/basil_youtube-outline.png";
import facebook from "../../../assets/images/facebook-02.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/devicon_twitter.png";

const NavListMobile = ({ toggleMenu }) => {
  return (
    <>
      <section className="px-6 text-white container mx-auto">
        {/* First column of links */}
        <div className="pt-10 flex justify-between">
          <div>
            <h2 className=" text-xl pt-4 uppercase font-satoshi">About</h2>
            <ul className="list-none font-inter">
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/about">About Us</Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/leadership">Leadership</Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/about#branches">CBC branches</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" text-xl pt-4 uppercase font-satoshi">
              Watch & Listen
            </h2>
            <ul className="list-none  font-inter">
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/live">Live Service </Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/past-sermon">Past Sermons </Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/study">Daily Devotional </Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/study">Bible in one year </Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/house-fellowship">House fellowship</Link>
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
                  <Link onClick={toggleMenu} to="/discussion">Discussion Forum</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/#prayer">Prayer Requests</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/#testimonies">Testimonies</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/departments-group">Departments & Groups</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/welcome">New Member’s Corner</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/counselling">Counselling</Link>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <h2 className=" text-xl pt-4 uppercase font-satoshi">
                Registrations{" "}
              </h2>
              <ul className="list-none font-inter">
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/mariage">Marriage</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/thanksgiving">Special Thanksgiving</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/baby-dedication">Baby Dedication</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/naming">Naming ceremony</Link>
                </li>
                <li className="pt-3 text-base">
                  <Link onClick={toggleMenu} to="/deliverance">Deliverance</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className=" text-xl pt-4 uppercase font-satoshi">learning </h2>
            <ul className="list-none  font-inter">
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/membership-class">Membership class</Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/maturity-class">Maturity class</Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/ministerial-class">Ministerial class</Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/mission">Missions</Link>
              </li>
              <li className="pt-3 text-base">
                <Link onClick={toggleMenu} to="/marriage-class">Marriage class</Link>
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
