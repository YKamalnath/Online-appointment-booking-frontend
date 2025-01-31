
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../../assets/medical-logo.avif";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { auth } from "../../../firebase/firebaseConfig"; // Adjust the path to your firebase.js file
import { signInWithEmailAndPassword } from "firebase/auth";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userRole, setUserRole] = useState(""); // For sign-up
  const isAuthenticated = localStorage.getItem("authToken");
  const [showOptions, setShowOptions] = useState(false);


  



 

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User:", user);
  
    const userRole = user?.userRole;
    console.log("User Role:", userRole);
  
    if (userRole === "doctor") {
      navigate("/doctor/dashboard");
    } else if (userRole === "patient") {
      navigate("/patient/dashboard");
    } else {
      navigate("/");
    }
  };
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoginModal(false);
  };

  const handleLoginClick = () => {
    setIsLoginModal(true);
    setIsModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsLoginModal(false);
    setIsModalOpen(true);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // // Handle Login Submit
  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     alert("Please enter both email and password");
  //     return;
  //   }

  //   // Simulate login with hardcoded credentials
  //   if (email === "test@domain.com" && password === "password123") {
  //     // Store user info in local storage for future reference
  //     const user = { email, userRole: "doctor" }; // Set a mock user role
  //     localStorage.setItem("authToken", "valid_token");
  //     localStorage.setItem("user", JSON.stringify(user)); // Store user data

  //     // Navigate to the appropriate dashboard
  //     navigate("/doctor/dashboard");
  //   } else {
  //     alert("Invalid email or password, please try again.");
  //   }
  // };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log("Login state:", { email, password });
    
  
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Get Firebase ID Token
      const idToken = await user.getIdToken();

      // console.log("Firebase ID Token:", idToken);
  
      // Send the ID Token to the backend (if needed)
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("authToken", idToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        
  
        // Redirect based on user role
        if (data.user.role === "doctor") {
          navigate("/doctor/dashboard");
        } else if (data.user.role === "patient") {
          navigate("/patient/dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert(error.message || "Login failed");
    }
    
  };


  const handleSignupSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !name || !userRole) {
      alert("Please fill in all the fields.");
      return;
    }
    
  
    // Call backend API for signup
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, userRole }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert("Signup successful");
  
      // Redirect to login page
      navigate("/login");
    } else {
      alert(data.message || "Signup failed");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1023) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { text: "Our Services", href: "/our_Service" },
    { text: "Our Goal", href: "/Our_Goal" },
    { text: "Doctors Details", href: "/Doctor_Details" },
    { text: "About Us", href: "/aboutUs" },
    { text: "Help", href: "/_Help" },
  ];

  return (
    <header>
      <nav className="nav-container">
        <div className="navbar-container">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img src={Logo} alt="Bio World Logo" className="logo-image" />
            </a>
          </div>

          {menuOpen && (
            <ul>
              {links.map((link, index) => (
                <li key={index} className="nav-menu-item">
                  <Link to={link.href} className="nav-link">
                    {link.text}
                  </Link>
                </li>
              ))}

              {!isAuthenticated ? (
                <li>
                  <button onClick={handleSignupClick} className="submit signin-button">
                    Get Started 
                  </button>
                  <button onClick={handleLoginClick} className="green-border signin-button">
                    Sign In
                  </button>
                </li>
              ) : (
                <li>
                  {window.innerWidth > 768 ? (
                    <button
                      onClick={() => setShowOptions(!showOptions)}
                      className="green-border signin-button"
                    >
                      My Account
                    </button>
                  ) : (
                    <div className="options-menu mobile-view">
                      <button className="styled-button" onClick={handleLogout}>
                        Logout
                      </button>
                      <button className="styled-button" onClick={handleDashboard}>
                        Dashboard
                      </button>
                    </div>
                  )}

                  {showOptions && window.innerWidth > 768 && (
                    <div className="options-menu">
                      <button className="styled-button" onClick={handleDashboard}>
                        Dashboard
                      </button>
                      <button className="styled-button" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}
                </li>
              )}
            </ul>
          )}
          <div className="menu" onClick={handleMenuClick}>
            {!menuOpen ? (
              <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
            ) : (
              <i className="fa-solid fa-xmark" style={{ color: "white" }}></i>
            )}
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            {isLoginModal ? (
              <div>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label htmlFor="login-email">Email</label>
                    <input
                      type="email"
                      id="login-email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input
                      type="password"
                      id="login-password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignupSubmit}>
                  <div className="form-group">
                    <label htmlFor="signup-name">Name</label>
                    <input
                      type="text"
                      id="signup-name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-email">Email</label>
                    <input
                      type="email"
                      id="signup-email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-password">Password</label>
                    <input
                      type="password"
                      id="signup-password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user-role">Role</label>
                    <select
                      id="user-role"
                      className="form-control"
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                    >
                      <option value="">Select a role</option>
                      <option value="doctor">Doctor</option>
                      <option value="patient">Patient</option>
                    </select>
                  </div>
                  <button type="submit" className="submit-button">
                    Sign Up
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
