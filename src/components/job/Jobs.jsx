import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";
import { Link } from "react-router-dom";


function Jobs() {
  const [allJobs, setAllJobs] = useState([]);
 
 
  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await axios.get("/job/jobs");
      const { jobs } = data;
      setAllJobs(jobs);
    };
    fetchJobs();
    
  }, []);

  
  return allJobs ? (
    <div className="max-w-6xl m-auto ">
      <h1 className="text-3xl font-semibold text-center mt-5">All Jobs</h1>
      <div className="flex gap-5 flex-wrap mt-5">
        {allJobs.map((card) => (
        
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
            <div>
              <Link to={`/job/${card._id}`} className="bg-blue-500  text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-600 text-sm mt-3 inline-block">
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Jobs;
