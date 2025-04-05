import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    axios.get("https://dummyjson.com/products").then((response) => {
      const products = response.data.products;

      // Extract unique categories and map each category to its first product
      const uniqueCategories = [
        ...new Map(
          products.map((product) => [product.category, product])
        ).values(),
      ];

      setCategories(uniqueCategories);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center !text-[#6c9380]">
        Product Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {categories.map((categoryProduct) => (
          <Link
            key={categoryProduct.category}
            to={`/products/${encodeURIComponent(categoryProduct.category)}`}
            className="group relative cursor-pointer overflow-hidden rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 bg-white transform transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <img
              src={categoryProduct.thumbnail}
              alt={categoryProduct.category}
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm sm:text-base font-semibold text-center">
                {categoryProduct.category.replace(/-/g, " ")}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};