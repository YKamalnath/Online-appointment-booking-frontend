
// import React from 'react';
// import './userProfile.css';
// import userPhoto from '../../../assets/Images/user-profile.jpeg';
// import SideWallpeaper from '../../../assets/Images/heath back img.avif';

// function UserProfile() {
//   return (
//     <div className="profile-container">
//       {/* Left side wallpaper */}
//       <div className="side-wallpaper">
//         <img src={SideWallpeaper} alt="Side Wallpaper" className="wallpaper-image" />
//       </div>
      
//       {/* Right side user details */}
//       <div className="profile-card">
//         <img src={userPhoto} alt="User Profile" className="profile-photo" />
//         <h2 className="profile-name">John Doe</h2>
//         <p className="profile-info"><span>DOB:</span> January 1, 1990</p>
//         <p className="profile-info"><span>Email:</span> johndoe@example.com</p>
//         <p className="profile-info"><span>Address:</span> 123 Main Street, New York, USA</p>
//         <p className="profile-description">
//           A passionate software developer with a love for creating stunning web applications.
//         </p>
//         <button className="edit-profile-btn">Edit Profile</button>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase/firebaseConfig"; // Import Firebase
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import "./userProfile.css";
import userPhoto from "../../../assets/Images/user-profile.jpeg";
import SideWallpeaper from "../../../assets/Images/heath back img.avif";

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        console.log("Logged-in User:", user); // Debugging Step
  
        if (!user) {
          console.log("No user logged in");
          setLoading(false);
          return;
        }
  
        const userDocRef = doc(db, "users", user.uid);
        console.log("Fetching data for UID:", user.uid); // Debugging Step
  
        const userSnap = await getDoc(userDocRef);
  
        if (userSnap.exists()) {
          console.log("User Data:", userSnap.data()); // Debugging Step
          setUserData(userSnap.data());
        } else {
          console.log("No such user document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      setLoading(false);
    };
  
    fetchUserData();
  }, []);
  

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (!userData) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="profile-container">
      {/* Left side wallpaper */}
      <div className="side-wallpaper">
        <img src={SideWallpeaper} alt="Side Wallpaper" className="wallpaper-image" />
      </div>

      {/* Right side user details */}
      <div className="profile-card">
        <img src={userPhoto} alt="User Profile" className="profile-photo" />
        <h2 className="profile-name">{userData.name || "No Name"}</h2>
        <p className="profile-info"><span>DOB:</span> {userData.dob || "N/A"}</p>
        <p className="profile-info"><span>Email:</span> {userData.email || "N/A"}</p>
        <p className="profile-info"><span>Address:</span> {userData.address || "N/A"}</p>
        <p className="profile-description">
          {userData.description || "No description available."}
        </p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default UserProfile;


