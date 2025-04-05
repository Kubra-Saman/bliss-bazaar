import { Heart, ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import LogoBliss from "../assets/Logo.png";
import { useCounter } from "../context/CartCounterContext";


const NavBar = () => {
  const {cartCount}= useCounter()
  return (
    <div className="flex flex-wrap place-items-center nav-container sticky top-0 z-50 shadow-md">
      <section className="relative mx-auto w-full">
        <nav className="flex justify-between bg-[#6c9380] text-white w-full ">
          <div className="px-5 lg:px-12 py-1 flex w-full items-center">
            <Link
              to="/"
              className="text-white text-3xl font-bold font-heading flex items-center"
              style={{ textDecoration: "none" }}
            >
              <span className="text-bold">
                <img src={LogoBliss} alt="logo" />
              </span>
            </Link>
            <ul className="hidden md:flex px-4 mx-auto my-2 font-semibold font-heading space-x-12">
              
            </ul>
            <div className="hidden lg:flex items-center space-x-5">
              <Link
                to="/liked"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <Heart className="h-6 w-6 hover:text-gray-200 transition fill-current stroke-none" />
              </Link>
              <Link
                to="/cart"
                className="text-white flex items-center"
                style={{ textDecoration: "none" }}
              >
                <button className="relative p-2 rounded-full text-white-700 hover:text-gray-600 transition">
                  <ShoppingCart className="h-6 w-6 transition"/>
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                </button>
              </Link>
              <Link
                to="/user"
                className="text-white flex items-center hover:text-gray-200"
                style={{ textDecoration: "none" }}
              >
                <User className="h-6 w-6 hover:text-gray-600 transition" />
              </Link>
            </div>
          </div>
          {/* <Link
            to="/"
            className="text-white lg:hidden flex mr-6 items-center"
            style={{ textDecoration: "none" }}
          >
            <Menu className="text-white h-6 w-6 hover:text-gray-200 transition" />
          </Link> */}
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
