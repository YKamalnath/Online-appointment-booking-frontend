import { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dashboard-container">
       
      <Sidebar openNav={open} onCloseNav={() => setOpen(false)} />
      <Main />
    </div>
  );
}
