import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./simpleLayout.css";

export default function SimpleLayout() {
  return (
    <>
      <Navbar />
      {/* <ScrollToTop /> */}
      <main className="simple-layout-main-container">
        <Outlet />
      </main>
      <Footer />
      {/* <SmoothScrollToTop /> */}
    </>
  );
}