import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import SimpleLayout from "../layouts/simpleLayout/simpleLayout";
import InformationPage from '../containers/InformationPage/InformationPage';
import DoctorDashboard from '../Pages/Doctor/Dashboard/DoctorDashboard';
import AboutUs from '../containers/AboutUs/AboutUs';
import OurService from '../containers/OurService/ourService';
import OurGoal from "../containers/OurGoal/ourGoal"
import DoctorDetails from "../containers/DoctorsDetails/DoctorsDetails"
import Help from "../containers/Help/Help"
import PatientDashboard from '../Pages/Patient/DashBoard/patientDashboard';
import DoctorLayout from "../layouts/DoctorLayout";
import PatientLayout from "../layouts/PatienLayout";
import AppointmentPage from '../Pages/Doctor/Appointment/appointment';
import ContactPage from '../Pages/Doctor/ContactForm/contactForm';
import SettingPage from '../Pages/Doctor/Setting/setting';
import UserManagement from '../Pages/Doctor/UserManagement/userManagement';
import BookingPage from '../Pages/Patient/AppointmentBook/appointmentBook';
import ChatDoctor from '../Pages/Patient/chatDoctor/chatDoctor';
import Payment from '../Pages/Patient/Payment/payment';
import UserProfile from '../Pages/Patient/UserProfile/userProfile';
import UserVerification from '../Pages/Patient/UserVerification/userVerification';




export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <SimpleLayout />, // Wrap main routes with SimpleLayout
      children: [
        { path: '', element: <InformationPage /> },
        { path: '/aboutUs', element: <AboutUs /> },
        { path: '/our_Service', element: <OurService/> },
        { path: '/Our_Goal', element: <OurGoal/> },
        { path: '/Doctor_Details', element: <DoctorDetails/> },
        { path: '/_Help', element: <Help/> },
      ],
    },
    {
      path: '/doctor',
      element: <DoctorLayout />, 
      children: [
        { path: 'dashboard', element: <DoctorDashboard /> },
        { path: 'appointment_page', element: <AppointmentPage /> },
        // { path: 'contact_page', element: <ContactPage /> },
        { path: 'setting_', element: <SettingPage /> },
        { path: 'user_management', element: <UserManagement /> },
        
      ],
    },

    {
      path: '/patient',
      element: <PatientLayout />, // Use DoctorLayout here
      children: [
        { path: 'dashboard', element: <PatientDashboard /> },
        { path: 'Booking_Page', element: <BookingPage /> },
        { path: 'payment-and-bill', element: <Payment /> },
        { path: 'chat_Doctor', element: <ChatDoctor /> },
        { path: 'User_profile', element: <UserProfile /> },
        { path: 'User_verification', element: <UserVerification /> },
      
        
       
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}
