import React, { useEffect, useState } from 'react';
import './userManagement.css';
import { auth } from '../../../firebase/firebaseConfig';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch("http://localhost:5000/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (response.ok) {
          setUsers(data);
        } else {
          console.error("Error fetching users:", data.message);
        }
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  // Fetch a specific user's details
  const handleUserClick = async (uid) => {
    try {
      const token = await auth.currentUser.getIdToken();
      const response = await fetch(`http://localhost:5000/api/user-info/${uid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setSelectedUser(data);
      } else {
        console.error("Error fetching user details:", data.message);
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery)
  );

  const handleDeleteUser = async (uid) => {
    try {
      const token = await auth.currentUser.getIdToken();
      const response = await fetch(`http://localhost:5000/users/${uid}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setUsers(users.filter((user) => user.uid !== uid));
      } else {
        console.error("Error deleting user:", data.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>

      {/* Search User Input */}
      <div className="search-user-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search users by name"
          className="input-field"
        />
      </div>

      {/* User List */}
      <div className="user-list">
        <h3>Users</h3>
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.uid} className="user-item" onClick={() => handleUserClick(user.uid)}>
              <div>
                <strong>{user.name}</strong> - {user.role}
              </div>
              <button className="delete-button" onClick={() => handleDeleteUser(user.uid)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        {filteredUsers.length === 0 && <p>No users found.</p>}
      </div>

      {/* Display Selected User Information */}
      {selectedUser && (
        <div className="popup-overlay">
        <div className="user-details">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Date of Birth:</strong> {selectedUser.dob}</p>
          <p><strong>Address:</strong> {selectedUser.address}</p>
          <p><strong>Description:</strong> {selectedUser.description}</p>
          <button onClick={() => setSelectedUser(null)} className="close-btn">Close</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default UserManagement;
