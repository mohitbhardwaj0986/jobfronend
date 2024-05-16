import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import toast from "react-hot-toast";
import { useAuth } from "../../contaxt/authContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contaxt/userContaxt";
import laodinGif from "../../assets/loading.gif"

function Login() {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useAuth();
  const { user, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedIsAuthorized = localStorage.getItem("isAuthorized");
    if (storedIsAuthorized === "true") {
      setIsAuthorized(true);
    }
  }, [setUser, setIsAuthorized]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization":`Bearer ${data.token}`
          },
        }
      );

      setEmail("");
      setPassword("");
      setRole("");
      const { user } = data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthorized", "true");
      setUser(user);
      setIsAuthorized(true);
      toast.success(data.message);

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      localStorage.removeItem("user");
      setIsAuthorized(false);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex justify-center">
    <form onSubmit={handleLogin} className="w-full max-w-sm mt-8">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="role"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a role</option>
          <option value="Employer">Employer</option>
          <option value="job seeker">job seeker</option>
        </select>
      </div>
      <h3 onClick={()=>navigate("/register")} className="mb-3 text-blue-600 underline text-center font-semibold cursor-pointer">Register Now</h3>
      <div className=" flex justify-center">
      {loading? <img className="w-12 " src={laodinGif} alt="loading" /> :<button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
     Submit
      </button>}
      </div>
    </form>
  
  </div> 
  
  );
}

export default Login;
