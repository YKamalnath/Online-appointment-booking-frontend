import React, { useState } from "react";
import "./Questions.css";

const Questions = () => {
  const general = [
    {
        qus: "What are the benefits of using our online appointment booking system?",
        ans: `Our hospital’s online booking system provides several benefits for patients:
        
    - **Convenience**: Schedule your appointments anytime, anywhere, without having to call the hospital.
    - **Faster Access to Care**: Quickly find available time slots and book an appointment with your preferred doctor or specialist.
    - **Easy Rescheduling**: Modify or cancel your appointment online with just a few clicks.
    - **Reminders & Notifications**: Receive automated reminders via email or SMS to ensure you don’t miss your appointment.
    - **Secure & Private**: Your personal health information is kept secure and confidential.`,
        num: 1,
      },
      {
        qus: "How do I book an appointment?",
        ans: `Booking an appointment is simple:
        
    1. Visit our online booking page.
    2. Select the type of service or specialist you need.
    3. Choose an available date and time.
    4. Enter your personal details and confirm the booking.
    5. You will receive a confirmation email or SMS with appointment details.`,
        num: 2,
      },
      {
        qus: "Can I book an appointment for someone else?",
        ans: `Yes! You can book an appointment on behalf of a family member, friend, or dependent. During the booking process, simply enter their details instead of yours. If you need further assistance, our support team is happy to help.`,
        num: 3,
      },
      {
        qus: "What if I need to cancel or reschedule my appointment?",
        ans: `We understand that plans can change. You can easily modify or cancel your appointment:
        
    - Log in to your account and navigate to 'My Appointments.'
    - Select the appointment you wish to cancel or reschedule.
    - Choose a new time slot or cancel completely.
    - A confirmation email/SMS will be sent to you with the updated details.`,
        num: 4,
      },
      {
        qus: "Do I need to create an account to book an appointment?",
        ans: `No, you can book an appointment as a guest. However, creating an account provides additional benefits such as:
        
    - Faster future bookings
    - Easy access to your appointment history
    - Ability to receive personalized healthcare recommendations`,
        num: 5,
      },
      {
        qus: "What types of appointments can I book online?",
        ans: `You can book a variety of medical services, including:
        
    - General doctor consultations
    - Specialist visits (e.g., cardiology, orthopedics, dermatology)
    - Diagnostic tests (e.g., blood tests, X-rays, MRIs)
    - Vaccinations
    - Virtual telehealth consultations`,
        num: 6,
      },
      {
        qus: "Will I receive a reminder for my appointment?",
        ans: `Yes! We send automated reminders via email and SMS before your appointment. This helps ensure you don’t forget your scheduled visit.`,
        num: 7,
      },
      {
        qus: "Is my personal information secure?",
        ans: `Absolutely. We follow strict data security and privacy guidelines to ensure your personal and medical information remains protected. We comply with all relevant healthcare data protection laws.`,
        num: 8,
      },
      {
        qus: "Can I book a virtual consultation?",
        ans: `Yes! We offer telehealth appointments for consultations that do not require in-person visits. You can book a virtual consultation with a doctor and receive medical advice from the comfort of your home.`,
        num: 9,
      },
      {
        qus: "How do I prepare for my appointment?",
        ans: `To make the most of your appointment, we recommend:
        
    - Arriving 10–15 minutes early.
    - Bringing any necessary medical documents, insurance information, and a list of medications you're taking.
    - Preparing a list of symptoms or questions for your doctor.`,
        num: 10,
      },
      {
        qus: "How do I contact customer support for help?",
        ans: `Our support team is available to assist you with any issues related to appointment booking.
        
    - **Support Channels**: You can reach us via phone at [Support Phone Number] or email at [Support Email Address].
    - **Support Hours**: We are available from [Days of the week] between [Time] and [Time] [Time Zone].
    - **Live Chat**: Our website also offers a live chat feature for immediate assistance.`,
        num: 11,
      },
      {
        qus: "What types of appointments can I book online?",
        ans: `You can book a variety of medical services, including:
        
    - General doctor consultations
    - Specialist visits (e.g., cardiology, orthopedics, dermatology)
    - Diagnostic tests (e.g., blood tests, X-rays, MRIs)
    - Vaccinations
    - Virtual telehealth consultations`,
        num: 12,
      },
  ];
  const jobSeekers = [
    {
        qus: "How do I book an appointment?",
        ans: "Booking an appointment is simple and convenient. Here's how you can do it:\n- Search by Doctor or Specialty: Use our search bar to find doctors based on their specialty, experience, or availability.\n- Filter Your Results: Refine your search using filters like location, consultation type (in-person or telehealth), and available time slots.\n- Browse Doctor Profiles: Click on profiles to learn more about each doctor's qualifications, expertise, and patient reviews.\n- Select Your Appointment Slot: Choose a date and time that works best for you and confirm your booking.",
        num: 1,
      },
      {
        qus: "What services can I book an appointment for?",
        ans: "Our platform allows you to book a wide range of healthcare services, including:\n- General Consultation: Schedule an appointment with a primary care physician for routine checkups and health concerns.\n- Specialist Consultations: Find and book appointments with specialists such as cardiologists, dermatologists, gynecologists, and more.\n- Diagnostic Tests: Book lab tests, imaging scans, and other diagnostic services.\n- Telehealth Appointments: Consult with doctors online through video calls for non-emergency medical concerns.\n- Vaccinations and Preventive Care: Schedule flu shots, immunizations, and other preventive healthcare services.",
        num: 2,
      },
      {
        qus: "How much do appointments cost?",
        ans: "The cost of an appointment varies based on several factors:\n- Type of Service: A general consultation may cost less than a specialist visit or diagnostic test.\n- Doctor's Experience and Specialization: Experienced specialists may charge higher consultation fees.\n- Insurance Coverage: If you have health insurance, some or all of your costs may be covered.\n- Telehealth vs. In-Person: Online consultations may have different pricing compared to in-person visits.",
        num: 3,
      },
      {
        qus: "What happens after I book an appointment?",
        ans: "Once you have successfully booked an appointment, here's what you can expect:\n- Confirmation Notification: You will receive an email or SMS confirmation with the appointment details.\n- Reminders: We send reminders before your appointment to help you stay on schedule.\n- Consultation: Attend your appointment at the scheduled time, either in person or online.\n- Follow-Up: If needed, you can book follow-up visits or request prescriptions through the platform.",
        num: 4,
      },
      {
        qus: "Is it guaranteed that I'll get an appointment with my preferred doctor?",
        ans: "While we strive to provide availability with your preferred doctor, appointment slots are subject to their schedule and demand. Here are some options:\n- Check for Cancellations: If your preferred doctor is fully booked, check back later for any available slots.\n- Consider Other Specialists: If your chosen doctor is unavailable, we provide recommendations for other qualified specialists in the same field.\n- Book in Advance: Secure your preferred time by booking well in advance, especially for specialists with high demand.",
        num: 5,
      },
      {
        qus: "What information should I provide when booking an appointment?",
        ans: "To ensure a smooth booking process, please provide the following details:\n- Full Name and Contact Information: So we can confirm your booking and send reminders.\n- Reason for Visit: A brief description of your symptoms or the purpose of the appointment.\n- Medical History (if required): Some specialists may require details of your medical history before the appointment.\n- Insurance Details: If you plan to use insurance, provide your policy number and coverage details.",
        num: 6,
      },
      {
        qus: "How can I increase my chances of getting an early appointment?",
        ans: "Here are some tips to secure an earlier appointment:\n- Be Flexible: Consider different times or days if your preferred slot is unavailable.\n- Enable Notifications: Opt-in for alerts when new slots become available due to cancellations.\n- Choose Telehealth: If appropriate, an online consultation might be available sooner than an in-person visit.\n- Book Multiple Services Together: If you need multiple tests or consultations, look for bundled appointment options to save time.",
        num: 7,
      },
      {
        qus: "Can I leave reviews for doctors after my appointment?",
        ans: "Yes! We encourage patients to share their experiences by leaving reviews and ratings. Your feedback helps other patients make informed decisions and helps doctors improve their services.",
        num: 8,
      },
      {
        qus: "What if I need to reschedule or cancel my appointment?",
        ans: "If you need to change or cancel your appointment:\n- Use Your Account: Log in to your account and select the reschedule or cancel option.\n- Contact Support: If you need assistance, our support team is available to help you.\n- Cancellation Policy: Some appointments may have cancellation fees, so please review the policy before canceling.",
        num: 9,
      },
      {
        qus: "How can I access healthcare resources and community support?",
        ans: "Our platform offers multiple ways to stay informed and connected:\n- Health Articles and Guides: Browse expert-written articles on various medical topics.\n- Community Forums: Participate in discussions and ask health-related questions.\n- Direct Messaging: Contact doctors or support staff for additional assistance.\n- Wellness Programs: Explore fitness, nutrition, and mental health programs tailored to your needs.",
        num: 10,
      },
  ];

  const referrers = [
    {
        qus: "Who can list their services on our platform?",
        ans: "Licensed and verified healthcare professionals can offer their services through our platform. Requirements include:\n- Valid Medical License: Doctors must hold an active license to practice medicine.\n- Verified Credentials: We verify education, experience, and specialty certifications.\n- Professional Commitment: Doctors must adhere to ethical and professional standards while offering consultations.",
        num: 1,
      },
      {
        qus: "How do I set my consultation fees?",
        ans: "Doctors can set their own consultation fees based on:\n- Specialty and Experience: Specialists and senior doctors may charge higher rates.\n- Consultation Type: In-person visits may have different pricing from telehealth appointments.\n- Market Standards: Check competitor pricing to set competitive rates.\n- Insurance Agreements: Some consultations may be covered or partially paid by insurance providers.",
        num: 2,
      },
      {
        qus: "What are my responsibilities as a healthcare provider?",
        ans: "Doctors using our platform are expected to:\n- Provide Accurate Medical Advice: Offer consultations within their area of expertise.\n- Maintain Professionalism: Communicate clearly and respectfully with patients.\n- Follow Ethical Guidelines: Adhere to medical confidentiality and best practices.\n- Keep Availability Updated: Manage their schedule to prevent overbooking.",
        num: 3,
      },
      {
        qus: "How do I receive payments for my services?",
        ans: "Payments are processed through our secure platform:\n- Online Payment System: Patients pay through the platform before the appointment.\n- Automated Transfers: Earnings are transferred to your bank account periodically.\n- Transparent Reporting: Track your earnings and consultation history through your account dashboard.",
        num: 4,
      },
      {
        qus: "What are the benefits of offering services through our platform?",
        ans: "Joining our platform offers many advantages:\n- Expand Your Patient Base: Reach more patients seeking medical consultations.\n- Flexible Scheduling: Manage your own availability and set consultation hours.\n- Secure Payments: Receive hassle-free and timely payments for your services.\n- Professional Recognition: Build your reputation with verified reviews and ratings.",
        num: 5,
      },
      {
        qus: "Can I decline an appointment request?",
        ans: "Yes, doctors can decline appointment requests if:\n- The case is outside their area of expertise.\n- They are unavailable during the requested time slot.\n- The patient requires emergency care beyond their scope.",
        num: 6,
      },
      {
        qus: "Are there any limits on the number of patients I can see?",
        ans: "There are no strict limits, but doctors should manage their workload responsibly to ensure quality care for all patients.",
        num: 7,
      },
      {
        qus: "How can I build a strong reputation on the platform?",
        ans: "To maintain a strong reputation:\n- Provide high-quality care and clear medical advice.\n- Communicate effectively and professionally.\n- Encourage satisfied patients to leave positive reviews.\n- Keep your profile updated with credentials and availability.",
        num: 8,
      },
      {
        qus: "What are my responsibilities as a healthcare provider?",
        ans: "Doctors using our platform are expected to:\n- Provide Accurate Medical Advice: Offer consultations within their area of expertise.\n- Maintain Professionalism: Communicate clearly and respectfully with patients.\n- Follow Ethical Guidelines: Adhere to medical confidentiality and best practices.\n- Keep Availability Updated: Manage their schedule to prevent overbooking.",
        num: 9,
      },
  ];

  const payments = [
    {
        qus: "How do I book an appointment at the hospital?",
        ans: "You can easily book an appointment at our hospital through the online booking system. Simply select the department, choose a doctor, and pick a convenient time slot. After that, you'll be able to confirm your details and book the appointment.",
        num: 1,
      },
      {
        qus: "Are there any booking fees?",
        ans: "We do not charge any additional booking fees. However, please check with the hospital for any service-specific charges related to consultations or treatments.",
        num: 2,
      },
      {
        qus: "What if I need to cancel my appointment?",
        ans: "If you need to cancel your appointment, you can do so via our online portal. Our cancellation policy varies depending on the time of cancellation, and in most cases, we offer a full or partial refund depending on the circumstances.",
        num: 3,
      },
      {
        qus: "Can I reschedule my appointment?",
        ans: "Yes, you can reschedule your appointment by logging into your account and selecting a new time slot that works for you. Rescheduling is available up to 24 hours before your scheduled appointment time.",
        num: 4,
      },
      {
        qus: "How do I view my appointment history?",
        ans: "You can view your appointment history by logging into your account and navigating to the 'Appointments' section. Here, you will find a list of your past and upcoming appointments.",
        num: 5,
      },
      {
        qus: "Can I book an appointment for a family member?",
        ans: "Yes, you can book appointments for family members through your account. Simply input their information when selecting the doctor and time slot.",
        num: 6,
      },
      {
        qus: "What happens if I miss my appointment?",
        ans: "If you miss your appointment without prior cancellation, you may be subject to a no-show fee. Please ensure to cancel or reschedule at least 24 hours in advance to avoid this fee.",
        num: 7,
      },
      {
        qus: "Is there a way to get a second opinion from another doctor?",
        ans: "Yes, you can book an appointment with another doctor for a second opinion. Our platform allows you to easily search for other specialists in the field.",
        num: 8,
      },
      {
        qus: "What should I bring to my appointment?",
        ans: "Please bring a valid ID, your health insurance details (if applicable), and any medical records or prescriptions related to your condition to ensure a smooth consultation process.",
        num: 9,
      },
      {
        qus: "Can I book an emergency appointment?",
        ans: "For urgent cases, please call our emergency department directly. Emergency appointments may not be available for online booking and will be assessed based on your condition.",
        num: 10,
      },
  ];

  const privacyAndSecurity = [
    {
        qus: "How does the hospital protect my privacy?",
        ans: "We take your privacy seriously. Your personal health information is encrypted and stored securely. Only authorized medical staff will have access to your medical records as necessary for treatment.",
        num: 1,
      },
      {
        qus: "Can I keep my medical condition confidential when booking an appointment?",
        ans: "Yes, you can choose to keep certain details confidential. You may share your medical condition with the doctor during the appointment if you feel comfortable doing so.",
        num: 2,
      },
      {
        qus: "Who can access my health information?",
        ans: "Only authorized healthcare providers involved in your care can access your health information. We comply with privacy laws to ensure that your information is kept secure.",
        num: 3,
      },
      {
        qus: "How do I report a suspicious activity related to my appointment?",
        ans: "If you notice any suspicious activity or unauthorized access to your medical records, please contact our support team immediately for investigation.",
        num: 4,
      },
      {
        qus: "Can I choose what information is shared with the doctor?",
        ans: "You have the ability to choose which information is shared with the doctor. During the booking process, you can indicate the medical concerns you'd like to address, but you are not obligated to share everything beforehand.",
        num: 5,
      },
      {
        qus: "Does the hospital share my personal health information with third parties?",
        ans: "We do not share your personal health information with third parties except when required for medical purposes or in compliance with legal regulations.",
        num: 6,
      },
      {
        qus: "What happens if I cancel my appointment?",
        ans: "If you cancel your appointment, your information will remain confidential and you will be able to reschedule or receive further instructions as needed.",
        num: 7,
      },
      {
        qus: "Does the hospital offer two-factor authentication for account security?",
        ans: "Yes, we offer two-factor authentication (2FA) for added security. This feature adds an extra layer of protection to your account by requiring a verification code in addition to your password.",
        num: 8,
      },
      {
        qus: "How does the hospital use cookies on its website?",
        ans: "Our website uses cookies to enhance your experience. Cookies help us remember your preferences and provide you with relevant content. You can manage your cookie preferences in your browser settings.",
        num: 9,
      },
  ];

  const [selectedRadio, setSelectedRadio] = useState("general");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionData, setQuestionData] = useState(general);
  const [colourChange, setColourChange] = useState(true);

  const handleChange = (event) => {
    setSelectedRadio(event.target.value);
    setActiveQuestion(null);
    if (event.target.value === "general") {
      setQuestionData(general);
    }
    if (event.target.value === "jobSeekers") {
      setQuestionData(jobSeekers);
    }
    if (event.target.value === "referrers") {
      setQuestionData(referrers);
    }
    if (event.target.value === "payments") {
      setQuestionData(payments);
    }
    if (event.target.value === "privacyAndSecurity") {
      setQuestionData(privacyAndSecurity);
    }
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const formatAnswer = (answer) => {
    // Split the answer into individual lines
    const [firstLine, ...restOfTheAnswer] = answer.split("\n");

    return (
      <div>
        {/* Render the first line as-is */}
        <div>{firstLine}</div>

        {/* Iterate over the rest of the answer and render lines starting with a dash or normal text */}
        {restOfTheAnswer.map((line, index) => {
          // If the line starts with "-", render it as a bullet point
          if (line.startsWith("-")) {
            return (
              <div key={index} className="question-answer-line">
                {line.trim()}
              </div>
            );
          }
          // Otherwise, render the line normally
          return (
            <div key={index} className="question-answer-line">
              {line.trim()}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="main-questions-container">
      <div className="questions-heading">
        <h1 className="services-heading">
          Frequently Asked{" "}
          <span className="heading-different-color-resume">Questions</span>
        </h1>
        <div className="services-heading-des">
        Find quick answers to common questions about hospital appointments and our services
        </div>
      </div>

      <div className="questions-details-container">
        <div className="questions-filter-container">
          <div>Filter by category</div>
          <div>
          Find Answers to Common Questions. Quickly find the answers you need
          by browsing our most frequently asked questions, organized into
          helpful categories.
          </div>
          <div className="filter-radio-button-container">
            <label
              style={{
                color: selectedRadio === "general" ? "#007bff" : "inherit",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="general"
                checked={selectedRadio === "general"}
                onChange={handleChange}
              />
              General
            </label>
            <label
              style={{
                color: selectedRadio === "jobSeekers" ? "#007bff" : "inherit",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="jobSeekers"
                checked={selectedRadio === "jobSeekers"}
                onChange={handleChange}
              />
                Appointments
            </label>
            <label
              style={{
                color: selectedRadio === "referrers" ? "#007bff" : "inherit",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="referrers"
                checked={selectedRadio === "referrers"}
                onChange={handleChange}
              />
               Cancellations and Rescheduling
            </label>
            <label
              style={{ color: selectedRadio === "payments" ? "#007bff" : "" }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="payments"
                checked={selectedRadio === "payments"}
                onChange={handleChange}
              />
              Payments
            </label>
            <label
              style={{
                color: selectedRadio === "privacyAndSecurity" ? "#007bff" : "",
              }}
            >
              <input
                type="radio"
                name="radioGroup"
                value="privacyAndSecurity"
                checked={selectedRadio === "privacyAndSecurity"}
                onChange={handleChange}
              />
              Privacy and Security
            </label>
          </div>
        </div>
        <div className="questions-des-container">
          {questionData.map((data) => (
            <div
              key={data.num}
              className="questions-container"
              style={{
                color: activeQuestion === data.num ? "#007bff" : "inherit",
                cursor: "pointer",
              }}
              onClick={() => toggleQuestion(data.num)}
            >
              <div className="question-header">
                <div>{data.qus}</div>
                <div>
                  {activeQuestion === data.num ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </div>
              </div>
              {activeQuestion === data.num && (
                <div className="question-answer">{formatAnswer(data.ans)}</div>
              )}
              <hr className="questions-hr" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
