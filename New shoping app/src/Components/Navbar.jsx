import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mycart">MyCart</Link>
        <Link to="/myorders">MyOrders</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
