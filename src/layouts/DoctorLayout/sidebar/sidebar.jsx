import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import DoctorIcon from "../../../assets/Images/adminLayout/Doctor_Male.png";
import sidebar from "./config";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState(null); // Store user info (name and role)

  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1280) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280 && window.innerWidth > 400) {
        setIsOpen(false);
        document.addEventListener("mousedown", handleClickOutside);
      } else if (window.innerWidth < 400) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    window.location.href = "/login";
  };


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser); // Get user data from localStorage
  }, []);

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar-admin-container">
      <div className="admin-side-bar-user-profile">
        <img
          className="admin-side-bar-user-profile-image"
          src={
            "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1718746671~exp=1718747271~hmac=c31f22621012b5eb3d26934b901fc0ed0b3393d663f987b82c382172925e4546"
          }
          alt="logo"
        />
      </div>
      <aside className="sidebar-container" ref={containerRef}>
        {isOpen && (
          <div className="sidebar-container-section">
            <div className="sidebar-logo-container">
              <Link to={"/"}>
                {/* <img src={Logo} alt="logo" /> */}
              </Link>
            </div>
            <nav>
              <ul>
                {sidebar.map((item, index) => (
                  <Link to={item.path} key={index} onClick={closeSidebar}>
                    <li
                      className={
                        location.pathname === item.path ? "sidebar-active" : ""
                      }
                    >
                      <span>
                        {" "}
                        <img src={item.icon} alt="logo" />
                      </span>
                      {item.title}
                    </li>
                    {item.children &&
                      item.children.map((item, index) => (
                        <Link to={item.path} key={index} onClick={closeSidebar}>
                          <div className="sidebar-child">
                            <li
                              className={
                                location.pathname === item.path
                                  ? "sidebar-active "
                                  : ""
                              }
                            >
                              <span>
                                {" "}
                                <img src={item.icon} alt="logo" />
                              </span>
                              {item.title}
                            </li>
                          </div>
                        </Link>
                      ))}
                  </Link>
                ))}
              </ul>
            </nav>
            <div className="account-container">
              <a>
                <div>
                  <img
                    src={DoctorIcon}
                    alt="profile-image"
                  />
                </div>

                <div>
                  <p>{user ? user.name : "Loading..."}</p>
                  <p>{user ? user.role : "Loading..."}</p>
                </div>
                {/* <div>
                  <p>Vijay</p>
                  <p>Admin</p>
                </div> */}
                
              </a>
             
            </div>
            <div className="logout-btn-container">
            <button className="Admin-logout-btn" onClick={handleLogout}> Logout</button>
            </div>
            
          </div>
        )}
        <div
          className="menu"
          // onClick={handleMenuClick}
        >
          {!isOpen ? (
            <i className="fa-solid fa-bars" onClick={handleMenuClick}></i>
          ) : (
            <i
              onClick={handleMenuClick}
              className="fa-solid fa-xmark"
              style={{
                color: "white",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
              }}
            ></i>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
