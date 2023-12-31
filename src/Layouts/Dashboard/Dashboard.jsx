import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaAddressCard,
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaHome,
  FaUserCog,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useInstructor } from "../../Hooks/useInstructor";
import { useStudent } from "../../Hooks/useStudent";
import { useAdminDashboard } from "../../Hooks/useAdminDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdminDashboard(user.email);
  const [isInstructor] = useInstructor(user.email);
  const [isStudent] = useStudent(user.email);

  return (
    <div className="drawer lg:drawer-open ">
      <Helmet>
        <title>Musical Mingle | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden "
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full w-80 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30">
          {/* <!-- Sidebar content here --> */}

          {
          user?.photoURL ?  <div className="flex flex-col items-center justify-center" >
            <img className="border-4 w-40 h-40 my-10  btn-circle " src={user?.photoURL} />
            <p>{user?.displayName}</p>
            <p className="mb-5">{user?.email}</p>
                     
          </div>: ""
          }

          {isAdmin && (
            <>
              <li>
                <NavLink
                  to="/dashboard/home"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaBookReader></FaBookReader> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaUserCog></FaUserCog>
                  Manage Users
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink
                  to="/dashboard/addAClass"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaAddressCard></FaAddressCard>
                  Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myClasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaBookReader></FaBookReader>
                  My Classes
                </NavLink>
              </li>
            </>
          )}

          {isStudent && (
            <>
              <li>
                <NavLink
                  to="/dashboard/studentsclasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaBook></FaBook>
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myEnrolledClasses"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaBookOpen></FaBookOpen>
                  My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment"
                  className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
                >
                  <FaWallet></FaWallet>
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          <p className="divider"></p>

          <li>
            <NavLink
              to="/"
              className="uppercase btn btn-outline btn-warning border-0 border-b-4 mt-4 bg-gradient-to-r from-neutral-500 via-cyan-600 to-neutral-600 rounded shadow-xl bg-opacity-30 text-lg hover:scale-110"
            >
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
