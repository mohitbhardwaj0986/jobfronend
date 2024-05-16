import React, { useEffect, useState } from "react";
import { useUser } from "../../contaxt/userContaxt";
import axios from "../../axios/axios";
import toast from "react-hot-toast";
import { useAuth } from "../../contaxt/authContext";
import { useNavigate } from "react-router-dom";
import laodinGif from "../../assets/loading.gif"

const Register = () => {
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { isAuthorized, setIsAuthorized } = useAuth();
  console.log(user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  console.log(isAuthorized);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedIsAuthorized = localStorage.getItem("isAuthorized");
    if (storedIsAuthorized === "true") {
      setIsAuthorized(true);
    }
  }, [setIsAuthorized, setUser]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.post("/user/register", {
        name,
        email,
        phone,
        password,
        role,
      });

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
      const { user } = data;

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(data.message);
      setIsAuthorized(true);
      localStorage.setItem("isAuthorized", "true");
      
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(false);
      localStorage.removeItem("isAuthorized");
      localStorage.removeItem("user");
    } finally {
      setLoading(false); 
    }
  };

  return (
   <>
   {isAuthorized?(navigate("/")):( <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            placeholder="Enter your email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone:
          </label>
          <input
            placeholder="Enter your phone number"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            placeholder="Set your password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="block mb-1">
            Role:
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
        <h3
          onClick={() => navigate("/login")}
          className="text-blue-600 underline text-center font-semibold cursor-pointer"
        >
          Existing user
        </h3>
        <div className=" flex justify-center">
      {loading? <img className="w-12 " src={laodinGif} alt="loading" /> :<button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
     Register
      </button>}
      </div>
      </form>
    </div>)}
   </>
  );
};

export default Register;
