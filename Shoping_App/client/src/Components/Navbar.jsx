import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/myCart">My Cart</Link>
        <Link to="/myorder">My Order</Link>
        <Link to="/Setting">Setting</Link>
        <Link to="/myProfile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
