import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Ragister from "./components/auth/Ragister";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Jobs from "./components/job/Jobs";
import JobDetails from "./components/job/JobDetails";
import MyJobs from "./components/job/MyJobs";
import PostJob from "./components/job/PostJob";
import AllApplication from "./components/application/AllApplication";
import MyApplication from "./components/application/MyApplication";
import PostApplication from "./components/application/PostApplication";
import NotFound from "./components/notfound/NotFound";
import { Toaster } from "react-hot-toast";
import { useUser } from "../src/contaxt/userContaxt";
import { useAuth } from "../src/contaxt/authContext";
import JobEdit from "./components/job/JobEdit";

function App() {
  const { isAuthorized, setIsAuthorized } = useAuth();
  // console.log(isAuthorized);
  const { user, setUser } = useUser();
  // console.log(user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsAuthorized = localStorage.getItem("isAuthorized");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedIsAuthorized === "true") {
      setIsAuthorized(true);
    }
  }, [setUser, setIsAuthorized]);

  return (
    <div>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Ragister />} />
       { isAuthorized && <Route path="/" element={<Home />} />}
       {isAuthorized && <Route path="/job/getall" element={<Jobs />} />}
        {isAuthorized &&<Route path="/job/:id" element={<JobDetails />} />}
        {isAuthorized &&<Route path="/job/post" element={<PostJob />} />}
        {isAuthorized &&<Route path="/job/my" element={<MyJobs />} />}
        {isAuthorized &&<Route path="/application/post/:id" element={<PostApplication />} />}
        {isAuthorized &&<Route path="/application/all" element={<AllApplication />} />}
        {isAuthorized &&<Route path="/application/me" element={<MyApplication />} />}
        {isAuthorized &&<Route path="/jobedit/:id" element={<JobEdit />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {user && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;
