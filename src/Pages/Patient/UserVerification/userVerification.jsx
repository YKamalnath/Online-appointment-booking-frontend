
// import React, { useState, useEffect } from 'react';
// import './userVerification.css';
// import { auth } from "../../../firebase/firebaseConfig";

// function UserVerification() {
//   const [userInfo, setUserInfo] = useState({
//     dob: '',
//     address: '',
//     description: ''
//   });
//   const [errors, setErrors] = useState({
//     dob: '',
//     address: '',
//     description: ''
//   });
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         setUser({
//           name: currentUser.displayName || "", // Fallback if displayName is null
//           email: currentUser.email || ""
//         });
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setErrors((prev) => ({ ...prev, [name]: '' }));
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     let formErrors = {};
//     let isValid = true;

//     if (!userInfo.dob) {
//       formErrors.dob = 'Date of birth is required';
//       isValid = false;
//     }
//     if (!userInfo.address) {
//       formErrors.address = 'Address is required';
//       isValid = false;
//     }
//     if (!userInfo.description) {
//       formErrors.description = 'Description is required';
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) return alert("User not authenticated");
    
//     if (validate()) {
//       try {
//         const token = await auth.currentUser.getIdToken();
//         const response = await fetch("http://localhost:5000/api/user-info", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ ...userInfo, name: user.name, email: user.email }),
//         });

//         const data = await response.json();
//         if (response.ok) {
//           alert("User information saved successfully!");
//         } else {
//           alert(`Error: ${data.message}`);
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         alert("Something went wrong, please try again.");
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="profile-name">User Information</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <div className='verification-fields'>Date of Birth:</div>
//           <input
//             type="date"
//             name="dob"
//             value={userInfo.dob}
//             onChange={handleInputChange}
//           />
//           {errors.dob && <p className="error">{errors.dob}</p>}
//         </div>

//         <div className="form-group">
//           <div className='verification-fields'>Address:</div>
//           <input
//             type="text"
//             name="address"
//             value={userInfo.address}
//             onChange={handleInputChange}
//           />
//           {errors.address && <p className="error">{errors.address}</p>}
//         </div>

//         <div className="form-group">
//           <div className='verification-fields'>Description:</div>
//           <textarea
//             name="description"
//             value={userInfo.description}
//             onChange={handleInputChange}
//           />
//           {errors.description && <p className="error">{errors.description}</p>}
//         </div>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserVerification;
import React, { useState, useEffect } from 'react';
import './userVerification.css';
import { auth } from "../../../firebase/firebaseConfig";

function UserVerification() {
  const [userInfo, setUserInfo] = useState({
    dob: '',
    address: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    dob: '',
    address: '',
    description: ''
  });
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "",
          email: currentUser.email || ""
        });

        const token = await currentUser.getIdToken();
        const response = await fetch("http://localhost:5000/api/user-info", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        if (response.ok && data) {
          setIsVerified(true);
        }
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!userInfo.dob) {
      formErrors.dob = 'Date of birth is required';
      isValid = false;
    }
    if (!userInfo.address) {
      formErrors.address = 'Address is required';
      isValid = false;
    }
    if (!userInfo.description) {
      formErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("User not authenticated");
    if (isVerified) return alert("Verification already completed");
    
    if (validate()) {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await fetch("http://localhost:5000/api/user-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...userInfo, name: user.name, email: user.email }),
        });

        const data = await response.json();
        if (response.ok) {
          setIsVerified(true);
          alert("User information saved successfully!");
        } else {
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong, please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="profile-name">User Information</h2>
      {isVerified ? (
        <p className="verification-complete">Verification Complete</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className='verification-fields'>Date of Birth:</div>
            <input
              type="date"
              name="dob"
              value={userInfo.dob}
              onChange={handleInputChange}
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          <div className="form-group">
            <div className='verification-fields'>Address:</div>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="form-group">
            <div className='verification-fields'>Description:</div>
            <textarea
              name="description"
              value={userInfo.description}
              onChange={handleInputChange}
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
}

export default UserVerification;
