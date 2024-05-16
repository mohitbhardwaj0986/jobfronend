import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "../../axios/axios";
import { useAuth } from "../../contaxt/authContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../src/assets/logo.jpeg";
import { useUser } from "../../contaxt/userContaxt";
import laodinGif from "../../assets/loading.gif"

function Navbar() {
  const EmployerNavLi = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "All Jobs",
      path: "/job/getall",
      isAuthorized: true,
    },

    {
      name: "Allplicant's Application",
      path: "/application/all",
      isAuthorized: true,
    },
    {
      name: "Post Job",
      path: "/job/post",
      isAuthorized: true,
    },
    {
      name: "My Jobs",
      path: "/job/my",
      isAuthorized: true,
    },
  ];
  const jobSeekerNavLi = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "All Jobs",
      path: "/job/getall",
      isAuthorized: true,
    },
 
    {
      name: "My Application",
      path: "/application/me",
      isAuthorized: true,
    },

 
  ];
  const { isAuthorized, setIsAuthorized } = useAuth();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const logoutHandle = async () => {
    setLoading(true)
    try {
      const response = await axios.get("/user/logout");
      toast.success(response.data.message);
      setIsAuthorized(false);
      localStorage.removeItem("isAuthorized");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally{
      setLoading(false)
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex  items-center justify-between px-10 ">
      <div>
        <img className="w-40" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-3 font-semibold">
          {!isAuthorized && (
            <button
              onClick={() => navigate("login")}
              className="bg-red-600 px-2 py-1 rounded-sm text-white"
            >
              Login
            </button>
          )}
          {user.role === "Employer"
            && EmployerNavLi.map((li) => (
                <li key={li.name}>
                  <Link to={li.path}>{li.name}</Link>
                </li>
              ))}
            {user.role ==="job seeker" && jobSeekerNavLi.map((li) => (
                <li key={li.name}>
                  <Link to={li.path}>{li.name}</Link>
                </li>
              ))}
          {isAuthorized && (
            <div className=" flex justify-center">
            {loading? <img className="w-12 " src={laodinGif} alt="loading" /> :<button
              type="submit"
              className="w-full px-2 py-1 text-white text-sm bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => logoutHandle()}
            >
           Logout
            </button>}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
