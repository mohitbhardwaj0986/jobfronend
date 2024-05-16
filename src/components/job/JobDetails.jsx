import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios/axios";
import { useUser } from "../../contaxt/userContaxt";

function JobDetails() {
  const {user} = useUser()

  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const { data } = await axios.get(`/job/jobdetail/${id}`);
        const job = data.job;
        setJobDetails(job);
      
        
      } catch (error) {
        console.log("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  return (
    <div className="max-w-5xl m-auto h-[80vh] ">
      <h1 className="text-4xl font-semibold mb-10  mt-8">Job Details</h1>
      <div>
        <h1 className="text-xl">
          <b>Title: </b>
          {jobDetails.title}
        </h1>
        <h1 className="text-xl">
          <b>description: </b>
          {jobDetails.description}
        </h1>
        <h1 className="text-xl">
          <b>category: </b>
          {jobDetails.category}
        </h1>
        <h1 className="text-xl">
          <b>country: </b>
          {jobDetails.country}
        </h1>
        <h1 className="text-xl">
          <b>city: </b>
          {jobDetails.city}
        </h1>
        <h1 className="text-xl">
          <b>location: </b>
          {jobDetails.location}
        </h1>
        <h1 className="text-xl mb-5">
          <b>Salary: </b>
          {jobDetails.fixedSalary
            ? jobDetails.fixedSalary
            : `${jobDetails.salaryFrom} To ${jobDetails.salaryTo}`}
        </h1 >
      {user.role ==="job seeker" &&  <Link
        to={`/application/post/${id}`}
        className="bg-green-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-green-600 text-sm"
      >
        Apply
      </Link>} 
      </div>
     
    </div>
  );
}

export default JobDetails;
