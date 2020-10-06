import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
const HomeN = ({ history }) => {
  const [isOpen, setOpen] = useState(false);
  const isAuth = !!localStorage.getItem("token");

  const logoutUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profilep/Vijit");
  };

  const loginUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <nav class='navhourtable'>
      <div className=" ">
        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <button className="logout" onClick={logoutUser}>
                    Log Out
                  </button>
                ) : (
                  <button className="login" onClick={loginUser}>
                    Log in
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(HomeN);