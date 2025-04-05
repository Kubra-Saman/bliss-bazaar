import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { Category } from "../components/Category";
import SearchBar from "../components/SearchBar";
import ProductCards from "../components/ProductCards";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <HeroSection />
      <Category />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default HomePage;
