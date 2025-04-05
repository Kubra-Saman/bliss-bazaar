import { useState, useEffect } from "react";
import BeautyBanner from "../assets/BeautyBanner.png";
import GroceryBanner from "../assets/GroceryBanner.png";
import FurnitureBanner from "../assets/FurnitureBanner.png";
import FragrancesBanner from "../assets/FragrancesBanner.png";
import { useNavigate } from "react-router-dom";

const banners = [
  BeautyBanner,
  GroceryBanner,
  FurnitureBanner,
  FragrancesBanner,
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically slide to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Wrapper */}
      <div className="relative h-auto md:h-96 overflow-hidden rounded-lg shadow-lg">
        {/* Sliding Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`banner-${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 !rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 !rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-2 !rounded-lg ${
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-300 hover:bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
