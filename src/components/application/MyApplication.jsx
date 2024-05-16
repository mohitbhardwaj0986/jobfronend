import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../axios/axios";

function MyApplication() {
  const [applications, setApplications] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDelete = async (id) => {
    try {
      const deleteApplication = await axios.delete(`/application/delete/${id}`);

      const newApplicationarr = applications.filter((item) => item._id !== id);
      setApplications(newApplicationarr);

      toast.success(deleteApplication.data.message);
    } catch (error) {
      toast.error(error.deleteApplication.data.message);
    }
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await axios.get("/application/applicantgetall");
        setApplications(data.applications);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchApplications();
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex gap-5 flex-wrap p-10">
      {applications.length !== 0
        ? applications.map((card) => (
            <figure
              key={card._id}
              className="w-64 shadow-2xl bg-slate-400 rounded-xl p-8"
            >
              <img
                className="w-12 h-12 rounded cursor-pointer"
                src={card.resume}
                alt=""
                width="384"
                height="512"
                onClick={() => handleImageClick(card.resume)}
              />
              <h1 className="text-sm mt-3">Click on resume image</h1>
              <div className="pt-2">
                <blockquote>
                  <p className="text-lg font-medium">{card.name}</p>
                </blockquote>
                <figcaption>
                <div><b>Phone No:</b> {card.phone}</div>
                  <div><b>Email:</b> {card.email}</div>
                  <div><b>Address:</b> {card.address}</div>
                  <div><b>Coverlatter:</b> {card.coverLatter}</div>
                </figcaption>
              </div>
              <button
                onClick={() => handleDelete(card._id)}
                className="text-sm bg-red-500 hover:bg-red-600 transition-all px-2 py-1 rounded-md text-white mt-5"
              >
                Delete
              </button>
            </figure>
          ))
        : null}

      {/* Enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50  flex justify-center items-center bg-black bg-opacity-75">
          <div className="">
            <button
              onClick={handleCloseImage}
              className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md transition-all absolute top-0 right-0 m-4 text-white hover:text-gray-400 focus:outline-none"
            >
              close
            </button>
            <img
              className="h-screen"
              src={selectedImage}
              alt="Enlarged Image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyApplication;
