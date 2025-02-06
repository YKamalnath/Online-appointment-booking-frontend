
import React from 'react';
import './userProfile.css';
import userPhoto from '../../../assets/Images/user-profile.jpeg';
import SideWallpeaper from '../../../assets/Images/heath back img.avif';

function UserProfile() {
  return (
    <div className="profile-container">
      {/* Left side wallpaper */}
      <div className="side-wallpaper">
        <img src={SideWallpeaper} alt="Side Wallpaper" className="wallpaper-image" />
      </div>
      
      {/* Right side user details */}
      <div className="profile-card">
        <img src={userPhoto} alt="User Profile" className="profile-photo" />
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-info"><span>DOB:</span> January 1, 1990</p>
        <p className="profile-info"><span>Email:</span> johndoe@example.com</p>
        <p className="profile-info"><span>Address:</span> 123 Main Street, New York, USA</p>
        <p className="profile-description">
          A passionate software developer with a love for creating stunning web applications.
        </p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default UserProfile;

