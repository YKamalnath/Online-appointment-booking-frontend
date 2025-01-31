import { useState } from "react";
import Main from "./main/Main";
import Navbar from "../simpleLayout/navbar/Navbar";
import Topbar from "./Topbar/Topbar";
import Footer from "../simpleLayout/footer/Footer";

export default function UserLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <Navbar />
      <Topbar />
      <Main />
      <Footer />
    </div>
  );
}