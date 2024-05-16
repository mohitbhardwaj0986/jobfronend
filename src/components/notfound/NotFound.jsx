import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contaxt/authContext";

function NotFound() {
  const { isAuthorized, setIsAuthorized } = useAuth();

  const navigate = useNavigate()
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

              {isAuthorized ? <button onClick={()=>navigate("/")} className="bg-green-500 px-2 py-1 rounded-sm mt-3 text-white">
                Go To Home
               </button>:<button onClick={()=>navigate("login")} className="bg-green-500 px-2 py-1 rounded-sm mt-3 text-white">
                Go To Login
               </button> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
