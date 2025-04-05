import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import Collections from "./pages/Collections";
import Category from "./pages/CategoryPage";
import LikedItems from "./pages/LikedItems";
import Cart from "./pages/Cart";
import User from "./pages/User";
import SingleProduct from "./pages/SingleProduct";
import CategoryPage from "./pages/CategoryPage";
import { CounterProvider } from "./context/CartCounterContext";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthProvider>
        <CounterProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/single-product/:id" element={<SingleProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/collection" element={<Collections />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/liked" element={<LikedItems />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
            <Route path="/products/:category" element={<CategoryPage />} />
          </Routes>
        </CounterProvider>
      </AuthProvider>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
