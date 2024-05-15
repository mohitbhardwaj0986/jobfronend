import React, { useEffect, useState } from "react";
import axios from "../../axios/axios";

function AllApplication() {
  const [allApplications, setAllApplications] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)
  useEffect(() => {
    const allApplication = async () => {
      const { data } = await axios.get("/application/employergetall");
      const { applications } = data;

      setAllApplications(applications);
    };
    allApplication();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleCloseImage = () =>{
    setSelectedImage(null)
  }

  return (
    <div className="flex gap-5 flex-wrap p-10">
      {allApplications.length !== 0
        ? allApplications.map((card) => (
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

export default AllApplication;
