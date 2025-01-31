import React, { useEffect, useRef, useState } from "react";
import "./Topbar.css";
// import Logo from "../../../assets/images/konect-logo.svg";
import topbar from "./config";
import { Link, useLocation } from "react-router-dom";

const Topbar = () => {
  const [title, setTitle] = useState("Dashboard");
  const [path, setPath] = useState("Dashboard");
  const location = useLocation();

  const containerRef = useRef(null);

  useEffect(() => {
    const trimmedPath = location.pathname.split("/").slice(0, 3).join("/");
    setPath(trimmedPath);
  }, [location.pathname]);

  return (
    <div className="topbar-admin-container">
      <aside className="topbar-container" ref={containerRef}>
        <div className="topbar-container-section">
          <div className="topbar-title-container">
            <div className="title">{title}</div>
            <div className="sub-title">
              Boost Your Job Application and Secure Your Dream Job with an
              Insider Referral
            </div>
          </div>
          <nav>
            <ul>
              {topbar.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => {
                    setTitle(item.title);
                  }}
                >
                  <li className={path === item.path ? "topbar-active" : ""}>
                    {item.title}
                  </li>
                  {item.children &&
                    item.children.map((item, index) => (
                      <Link to={item.path} key={index}>
                        <div className="topbar-child">
                          <li
                            className={
                              path === item.path ? "topbar-active " : ""
                            }
                          >
                            {item.title}
                          </li>
                        </div>
                      </Link>
                    ))}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className="menu"
          // onClick={handleMenuClick}
        ></div>
      </aside>
    </div>
  );
};

export default Topbar;
