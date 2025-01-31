import React, { useState } from 'react';
import './contactForm.css'; // Make sure to import the CSS for styling

function ContactForm() {
  const [message, setMessage] = useState(''); // State to store the current message
  const [messages, setMessages] = useState([]); // State to store all messages

  // Handle sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { text: message, sender: 'doctor', timestamp: new Date() },
      ]);
      setMessage('');
    }
  };

  // Handle typing in the message input field
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="chat-container-doctor">
      <h2>Doctor-Patient Chat</h2>
      <div className="chat-box">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'doctor' ? 'doctor-message' : 'patient-message'}`}
            >
              <span className="message-text">{msg.text}</span>
              <span className="message-time">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
        <div className="message-input-container">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type a message..."
            className="message-input"
          />
          <button onClick={handleSendMessage} className="send-button-doctor">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

