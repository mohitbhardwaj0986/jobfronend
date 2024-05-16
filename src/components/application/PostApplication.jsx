import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios"; // Make sure to import axios from the correct path
import toast from "react-hot-toast";
import laodinGif from "../../assets/loading.gif"
function PostApplication() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLatter, setCoverLatter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("coverLatter", coverLatter);
    data.append("phone", phone);
    data.append("address", address);
    data.append("resume", resume);
    data.append("jobId", id);

    const sendData = async () => {
      try {
        const response = await axios.post("/application/post", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        toast.success(response.data.message);
        setAddress("")
        setCoverLatter('')
        setEmail("")
        setName("")
        setPhone("")
        setResume(null)
      } catch (error) {
        toast.error(error.response.data.message);
      }  finally {
        setLoading(false); 
      }
    };

    sendData();
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleForm} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="description"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label
            htmlFor="coverlatter"
            className="block text-sm font-medium text-gray-700"
          >
            Coverlatter
          </label>
          <input
            type="text"
            id="coverlatter"
            value={coverLatter}
            onChange={(e) => setCoverLatter(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Coverlatter"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter Number"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter address"
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Resume
          </label>
          <input
            type="file"
            id="resume"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter address"
          />
        </div>

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

export default PostApplication;
