import React from 'react';
import './ourService.css';

function OurService() {
  const services = [
    {
      id: 1,
      title: 'Appointment Scheduling',
      description:
        'Easily book, reschedule, or cancel appointments with your preferred doctors.',
      benefits: [
        'Quick and convenient bookings',
        'Reminders for upcoming appointments',
        'User-friendly interface',
      ],
      icon: '📅',
    },
    {
      id: 2,
      title: 'Online Consultation',
      description:
        'Consult with healthcare professionals from the comfort of your home via video calls.',
      benefits: [
        'Save travel time and costs',
        'Access to specialists nationwide',
        'Secure and private consultations',
      ],
      icon: '💻',
    },
    {
      id: 3,
      title: 'Health Records Management',
      description:
        'Store and access your medical records securely anytime, anywhere.',
      benefits: [
        'All records in one place',
        'Download and share records',
        'Safe and encrypted storage',
      ],
      icon: '📂',
    },
    {
      id: 4,
      title: '24/7 Support',
      description:
        'Our support team is available round the clock to assist you with any issues.',
      benefits: [
        'Fast response times',
        'Support via chat, email, or phone',
        'Dedicated problem-solving',
      ],
      icon: '📞',
    },
    {
      id: 5,
      title: 'Secure Payments',
      description: 'Hassle-free and secure payment options for your appointments.',
      benefits: [
        'Multiple payment methods',
        'Encrypted transactions',
        'Instant confirmations',
      ],
      icon: '💳',
    },
    {
      id: 6,
      title: 'Doctor Reviews',
      description: 'Read and leave reviews for doctors to help others make informed decisions.',
      benefits: [
        'Trusted community feedback',
        'Transparency in services',
        'Builds trust between patients and doctors',
      ],
      icon: '⭐',
    },
  ];

  return (
    <div className="services-container">
      <h1 className="title">Explore Our Services</h1>
      <p className="intro">
        Our comprehensive services are designed to make your healthcare experience smooth, secure, and accessible.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <ul className="benefits-list">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurService;
