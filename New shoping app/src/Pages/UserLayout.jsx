import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function UserLayout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default UserLayout;
