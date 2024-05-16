import React, { useEffect } from "react";
import { useUser } from "../../contaxt/userContaxt";
import { useAuth } from "../../contaxt/authContext";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import TopCompany from "./TopCompany";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { isAuthorized } = useAuth();
  // console.log(isAuthorized);


  return <div>
    <HeroSection/>
    <TopCompany/>
  </div>;
}

export default Home;
