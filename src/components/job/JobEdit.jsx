import React, { useState } from "react";
import axios from "../../axios/axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function JobEdit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [option, setOption] = useState("");
  const { id } = useParams();

  const handleEdit = async (e) => {
    e.preventDefault();
    console.log(id);
    try {
      const updatedData = {};
      if (title) updatedData.title = title;
      if (description) description.description = description;
      if (category) updatedData.category = category;
      if (country) updatedData.country = country;
      if (city) updatedData.city = city;
      if (location) updatedData.location = location;
      if (fixedSalary) updatedData.fixedSalary = fixedSalary;
      if (salaryFrom) updatedData.salaryFrom = salaryFrom;
      if (salaryTo) updatedData.salaryTo = salaryTo;
      if (Object.keys(updatedData).length === 0) {
        toast.error("Please provide at least one field to update.");
        return;
      }
      const response = await axios.post(
        `/job/updatejob/${id}`,
        
         updatedData
        ,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTitle("");
      setDescription("");
      setCategory("");
      setCountry("");
      setCity("");
      setLocation("");
      setFixedSalary("");
      setSalaryFrom("");
      setSalaryTo("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error("problem in update data");
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleEdit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter job title"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Job Description
          </label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter job description"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter job category"
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter country"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter city"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Select a Salary Type
          </label>
          <select
            id="role"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a salary type</option>
            <option value="Fix Salary">Fixed Salary</option>
            <option value="Range">Salary Range</option>
          </select>
          {option === "Fix Salary" && (
            <input
              type="text"
              id="fixedSalary"
              value={fixedSalary}
              onChange={(e) => setFixedSalary(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter fixed salary"
            />
          )}
          {option === "Range" && (
            <div>
              <input
                type="text"
                id="salaryFrom"
                value={salaryFrom}
                onChange={(e) => setSalaryFrom(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter salary from"
              />
              <input
                type="text"
                id="salaryTo"
                value={salaryTo}
                onChange={(e) => setSalaryTo(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter salary to"
              />
            </div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobEdit;
