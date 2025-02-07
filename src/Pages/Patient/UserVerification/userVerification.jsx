// import React, { useState } from 'react';
// import './userVerification.css';

// function UserVerification() {
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     dob: '',
//     email: '',
//     address: '',
//     description: ''
//   });
//   const [errors, setErrors] = useState({
//     name: '',
//     dob: '',
//     email: '',
//     address: '',
//     description: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: '' });
//     }

//     setUserInfo({ ...userInfo, [name]: value });
//   };

//   const validate = () => {
//     let formErrors = {};
//     let isValid = true;

//     // Name Validation
//     if (!userInfo.name) {
//       formErrors.name = 'Name is required';
//       isValid = false;
//     }

//     // Date of Birth Validation
//     if (!userInfo.dob) {
//       formErrors.dob = 'Date of birth is required';
//       isValid = false;
//     }

//     // Email Validation
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!userInfo.email) {
//       formErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!emailPattern.test(userInfo.email)) {
//       formErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     // Address Validation
//     if (!userInfo.address) {
//       formErrors.address = 'Address is required';
//       isValid = false;
//     }

//     // Description Validation
//     if (!userInfo.description) {
//       formErrors.description = 'Description is required';
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert('Form Submitted Successfully');
//       // You can add your form submission logic here
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="profile-name">User Information</h2>

//       <form onSubmit={handleSubmit}>
//         {/* <div className="form-group">
//           <div className='verification-fields'>Name:</div>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={userInfo.name}
//             onChange={handleInputChange}
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div> */}

//         <div className="form-group">
//           <div className='verification-fields'>Date of Birth:</div>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             value={userInfo.dob}
//             onChange={handleInputChange}
//           />
//           {errors.dob && <p className="error">{errors.dob}</p>}
//         </div>

//         {/* <div className="form-group">
//           <div className='verification-fields'>Email:</div>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={userInfo.email}
//             onChange={handleInputChange}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div> */}

//         <div className="form-group">
//           <div className='verification-fields'>Address:</div>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={userInfo.address}
//             onChange={handleInputChange}
//           />
//           {errors.address && <p className="error">{errors.address}</p>}
//         </div>

//         <div className="form-group">
//           <div className='verification-fields'>Description:</div>
//           <textarea
//             id="description"
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


import React, { useState } from 'react';
import './userVerification.css';
import { auth } from "../../../firebase/firebaseConfig"; // Adjust the path based on your project structure



function UserVerification() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    dob: '',
    email: '',
    address: '',
    description: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    email: '',
    address: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }

    setUserInfo({ ...userInfo, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    // Name Validation
    if (!userInfo.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Date of Birth Validation
    if (!userInfo.dob) {
      formErrors.dob = 'Date of birth is required';
      isValid = false;
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!userInfo.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(userInfo.email)) {
      formErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Address Validation
    if (!userInfo.address) {
      formErrors.address = 'Address is required';
      isValid = false;
    }

    // Description Validation
    if (!userInfo.description) {
      formErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     alert('Form Submitted Successfully');
  //     // You can add your form submission logic here
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      try {
        const token = await auth.currentUser.getIdToken(); // Ensure the user is authenticated
        const response = await fetch("http://localhost:5000/api/user-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userInfo),
        });
  
        const data = await response.json();
        if (response.ok) {
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

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className='verification-fields'>Name:</div>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <div className='verification-fields'>Date of Birth:</div>
          <input
            type="date"
            id="dob"
            name="dob"
            value={userInfo.dob}
            onChange={handleInputChange}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}
        </div>

        <div className="form-group">
          <div className='verification-fields'>Email:</div>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <div className='verification-fields'>Address:</div>
          <input
            type="text"
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <div className='verification-fields'>Description:</div>
          <textarea
            id="description"
            name="description"
            value={userInfo.description}
            onChange={handleInputChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default UserVerification;