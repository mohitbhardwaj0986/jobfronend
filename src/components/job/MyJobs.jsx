import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function MyJobs() {
  const [myJobs, setMyJobs] = useState([]);



  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/job/deletejob/${id}`);
      toast.success(response.data.message);
      const updatedJobs = myJobs.filter((job) => job._id !== id);
      setMyJobs(updatedJobs);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await axios.get("/job/myjobs");
      const { myJobs } = data;
      console.log(data);
      setMyJobs(myJobs);
    };
    fetchJobs();
  }, []);

  return myJobs ? (
    <div className="max-w-6xl m-auto ">
      <h1 className="text-3xl font-semibold text-center mt-5">All Jobs</h1>
      <div className="flex gap-5 flex-wrap mt-5">
        {myJobs.map((card) => (
          <div key={card._id} className="w-56 bg-slate-300  p-4 shadow-xl">
            <h2 className="font-semibold">
              <b>Tile:</b> {card.title}
            </h2>
            <h2 className="font-semibold">
              <b>Category: </b>
              {card.category}
            </h2>
            <h2 className="font-semibold">
              <b>Salary: </b>
              {card.fixedSalary
                ? card.fixedSalary
                : `${card.salaryFrom} To ${card.salaryTo}`}
            </h2>
            <div className="flex gap-2">
              <Link
                to={`/job/${card._id}`}
                className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600 text-xs mt-5 "
              >
                More Details
              </Link>
              <button
                onClick={() => handleDelete(card._id)}
                className="bg-red-500 transition-all text-white px-2 py-1 rounded-md focus:outline-none hover:bg-red-600 text-xs mt-5"
              >
                Delete
              </button>
              <Link to={`/jobedit/${card._id}`}
          
                className="bg-yellow-500 transition-all text-white px-2 py-1 rounded-md focus:outline-none hover:bg-yellow-600 text-xs mt-5"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default MyJobs;
