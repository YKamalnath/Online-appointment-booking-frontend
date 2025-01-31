// import React, { useState } from 'react';
// import './userManagement.css'; // Import the CSS file for styling

// function UserManagement() {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', role: 'Patient' },
//     { id: 2, name: 'Jane Smith', role: 'Patient' },
//     { id: 3, name: 'Dr. Alice', role: 'Doctor' },
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleDeleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   // Filter users based on the search query
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery)
//   );

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       {/* Search User Input */}
//       <div className="search-user-form">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search users by name"
//           className="input-field"
//         />
//       </div>

//       {/* User List */}
//       <div className="user-list">
//         <h3>Users</h3>
//         <ul>
//           {filteredUsers.map((user) => (
//             <li key={user.id} className="user-item">
//               <div>
//                 <strong>{user.name}</strong> - {user.role}
//               </div>
//               <button
//                 className="delete-button"
//                 onClick={() => handleDeleteUser(user.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//         {filteredUsers.length === 0 && <p>No users found.</p>}
//       </div>
//     </div>
//   );
// }

// export default UserManagement;

import React, { useEffect, useState } from 'react';
import './userManagement.css';
import { auth } from '../../../firebase/firebaseConfig';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all users from backend
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

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete a user
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery)
  );

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
            <li key={user.uid} className="user-item">
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
    </div>
  );
}

export default UserManagement;

