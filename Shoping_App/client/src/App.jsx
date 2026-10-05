import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./Pages/UserLayout";
import Home from "./Components/Home";
import MyCart from "./Components/MyCart";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />

          <Route path="myCart" element={<MyCart />} />
          <Route path="myorder" element={<h1>My Order</h1>} />
          <Route path="myProfile" element={<h1>My Profile</h1>} />
          <Route path="Setting" element={<h1>Settings</h1>} />
          <Route path="logout" element={<h1>Logout</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
