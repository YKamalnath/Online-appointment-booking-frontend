// import React, { useState } from "react";
// import "./payment.css";

// function PaymentAndBill() {
//   const [isPaid, setIsPaid] = useState(false);
//   const [paymentDetails, setPaymentDetails] = useState({
//     name: "John Doe",
//     date: "2025-01-30",
//     timeSlot: "10:00 AM - 11:00 AM",
//     amount: 100,
//   });

//   const handlePayment = () => {
//     // Simulating payment success
//     setIsPaid(true);
//   };

//   return (
//     <div className="payment-container">
//       <div className="payment-card">
//         {!isPaid ? (
//           <div>
//             <h1 className="payment-title">Confirm Appointment Payment</h1>
//             <p className="payment-description">Please pay the amount to confirm your appointment.</p>
//             <div className="payment-details">
//               <p className="payment-detail-item">
//                 <strong>Name:</strong> {paymentDetails.name}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Appointment Date:</strong> {paymentDetails.date}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Time Slot:</strong> {paymentDetails.timeSlot}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Amount:</strong> ${paymentDetails.amount}
//               </p>
//             </div>
//             <button
//               onClick={handlePayment}
//               className="payment-button"
//             >
//               Pay ${paymentDetails.amount}
//             </button>
//           </div>
//         ) : (
//           <div>
//             <h1 className="payment-success-title">Payment Successful!</h1>
//             <p className="payment-description">Thank you for your payment. Your appointment is confirmed.</p>
//             <div className="payment-receipt">
//               <h2 className="payment-detail-item">Payment Details:</h2>
//               <p className="payment-detail-item">
//                 <strong>Name:</strong> {paymentDetails.name}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Appointment Date:</strong> {paymentDetails.date}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Time Slot:</strong> {paymentDetails.timeSlot}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Paid Amount:</strong> ${paymentDetails.amount}
//               </p>
//               <p className="payment-detail-item">
//                 <strong>Transaction ID:</strong> #{Math.floor(Math.random() * 1000000)}
//               </p>
//             </div>
//             <button
//               className="print-button"
//               onClick={() => window.print()}
//             >
//               Print Receipt
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PaymentAndBill;
import React, { useState } from "react";
import "./payment.css";
import { FaCheckCircle, FaCreditCard, FaPaypal, FaGooglePay } from "react-icons/fa";

function PaymentAndBill() {
  const [isPaid, setIsPaid] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "John Doe",
    date: "2025-01-30",
    timeSlot: "10:00 AM - 11:00 AM",
    amount: 100,
  });

  const handlePayment = () => {
    // Simulating payment success
    setIsPaid(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        {!isPaid ? (
          <div className="payment-content">
            <h1 className="payment-title">Confirm Appointment Payment</h1>
            <p className="payment-description">Please pay the amount to confirm your appointment.</p>
            <div className="payment-details">
              <p className="payment-detail-item">
                <strong>Name:</strong> {paymentDetails.name}
              </p>
              <p className="payment-detail-item">
                <strong>Appointment Date:</strong> {paymentDetails.date}
              </p>
              <p className="payment-detail-item">
                <strong>Time Slot:</strong> {paymentDetails.timeSlot}
              </p>
              <p className="payment-detail-item">
                <strong>Amount:</strong> ${paymentDetails.amount}
              </p>
            </div>
            <div className="payment-methods">
              <button className="payment-method-button"><FaCreditCard /> Credit/Debit Card</button>
              <button className="payment-method-button"><FaPaypal /> Pay with PayPal</button>
              <button className="payment-method-button"><FaGooglePay /> Google Pay</button>
            </div>
            <button onClick={handlePayment} className="payment-button">
              Pay ${paymentDetails.amount}
            </button>
          </div>
        ) : (
          <div className="payment-success">
            <FaCheckCircle className="payment-success-icon" />
            <h1 className="payment-success-title">Payment Successful!</h1>
            <p className="payment-description">Thank you for your payment. Your appointment is confirmed.</p>
            <div className="payment-receipt">
              <h2 className="payment-detail-item">Payment Details:</h2>
              <p className="payment-detail-item">
                <strong>Name:</strong> {paymentDetails.name}
              </p>
              <p className="payment-detail-item">
                <strong>Appointment Date:</strong> {paymentDetails.date}
              </p>
              <p className="payment-detail-item">
                <strong>Time Slot:</strong> {paymentDetails.timeSlot}
              </p>
              <p className="payment-detail-item">
                <strong>Paid Amount:</strong> ${paymentDetails.amount}
              </p>
              <p className="payment-detail-item">
                <strong>Transaction ID:</strong> #{Math.floor(Math.random() * 1000000)}
              </p>
            </div>
            <button
              className="print-button"
              onClick={() => window.print()}
            >
              Print Receipt
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentAndBill;
