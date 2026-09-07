import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Footer from "../Components/Footer";

function UserLayout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default UserLayout;
