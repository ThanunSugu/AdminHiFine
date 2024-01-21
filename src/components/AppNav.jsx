import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { FaRunning } from "react-icons/fa";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/app/dashboard">
            <div className="flex flex-row">
              <AiOutlineDashboard />
              <span className="ps-3">Dashboard</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/datatable">
            <div className="flex flex-row">
              <BsDatabase />
              <span className="ps-3">Manage Data</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/usermanage">
            <div className="flex flex-row">
              <FaRegUser />
              <span className="ps-3">Manage User</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/imagemanage">
            <div className="flex flex-row">
              <FaRegImage />
              <span className="ps-3">Manage Image</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/activitymanage">
            <div className="flex flex-row">
              <RxActivityLog />
              <span className="ps-3">Manage Activity</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/exercisemanage">
            {" "}
            <div className="flex flex-row">
              <FaRunning />
              <span className="ps-3">Manage Exercise</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
