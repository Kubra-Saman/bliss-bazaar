import axios from "axios";
import { CloudLightning, Heart, ShoppingCartIcon, Star } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartCounterContext } from "../context/CartCounterContext";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [clickCount, setClickCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { cartCount, setCartCount } = useContext(CartCounterContext);
  const { id } = useParams();

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      toast.error("Failed to load product details.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleCartClick = () => {
    if (clickCount === 0) {
      setCartCount(cartCount + 1);
      toast.success("Added to Cart");
    }
    setClickCount(clickCount + 1);
    if (clickCount === 1) {
      navigate("/cart");
    }
  };

  const handleLikedClick = () => {
    setIsLiked(!isLiked);
    !isLiked && toast.success("Added to wishlist");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Product Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src={product?.images?.[0]}
            alt={product.title}
            className="w-full h-full object-cover transition duration-200 hover:-translate-y-2"
          />
          {/* Availability Status Badge */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold">
            {product.availabilityStatus || "In Stock"}
          </div>
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          {/* Title and Description */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

           {/* Wishlist Icon */}
           <div className="text-right">
            <button onClick={handleLikedClick}>
              <Heart
                className={
                  isLiked
                    ? "fill-red-600 stroke-none transition-colors duration-200"
                    : "fill-transparent stroke-current text-gray-400 hover:text-red-500 transition-colors duration-200"
                }
                size={35}
              />
            </button>
          </div>

          {/* Ratings and Meta Information */}
          <div className="my-2">
            <div className="flex items-center text-yellow-500 mb-2">
              <Star className="fill-yellow-500 stroke-none" size={20} />
              <span className="ml-1 text-lg font-semibold">{product.rating}</span>
            </div>
            <div className="flex gap-4 text-gray-700">
              <p>
                Category:{" "}
                <span className="text-blue-500 font-semibold">{product.category}</span>
              </p>
              <p>
                Brand:{" "}
                <span className="text-blue-500 font-semibold">{product.brand}</span>
              </p>
            </div>
          </div>

          {/* Price and Actions */}
          <div>
            <p className="text-2xl font-bold text-green-600 mb-6">
              ${product.price}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Add to Cart Button */}
              <button
                onClick={handleCartClick}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white !rounded-lg hover:bg-green-700 transition w-full sm:w-auto"
              >
                <ShoppingCartIcon className="mr-2" size={20} />
                {clickCount === 0 ? "Add to Cart" : "Go to Cart →"}
              </button>

              {/* Buy Now Button */}
              <button
                className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white !rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
                onClick={()=>navigate("/user")}
              >
                <CloudLightning className="mr-2" size={20} />
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleProduct;