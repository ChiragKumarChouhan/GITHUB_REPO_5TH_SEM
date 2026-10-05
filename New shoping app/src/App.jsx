import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./Pages/UserLayout";
import UserDashboard from "./Pages/UserDashboard";
import ItemStore from "./Components/ItemStore";
import Counter from "./Counter";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />

          <Route path="itemstore" element={<ItemStore />} />

          <Route path="mycart" element={<h1>My Cart</h1>} />

          <Route path="myorders" element={<h1>My Orders</h1>} />

          <Route path="counter" element={<Counter />} />

          <Route path="setting" element={<h1>Setting</h1>} />

          <Route path="profile" element={<h1>User Profile</h1>} />

          <Route path="logout" element={<h1>User Logout Successfully</h1>} />

          <Route path="*" element={<h1>Error: 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
