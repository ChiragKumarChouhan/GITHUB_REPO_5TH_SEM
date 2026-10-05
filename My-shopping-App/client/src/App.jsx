// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>User Dashboard</h1>} />

          <Route path="/MyCart" element={<h1>My Cart</h1>} />

          <Route path="/MyOrders" element={<h1>My Orders</h1>} />

          <Route path="/Setting" element={<h1>Setting</h1>} />

          <Route path="/profile" element={<h1>User Profile</h1>} />

          <Route path="/logout" element={<h1>User Logout Successfully</h1>} />

          <Route path="*" element={<h1>Error: 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
