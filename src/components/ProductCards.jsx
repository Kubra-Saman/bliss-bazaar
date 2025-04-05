import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartCounterContext, useCounter } from "../context/CartCounterContext";
import { toast } from "react-toastify";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  // const {count,setCount}=useCounter()
  const { cartCount, setCartCount } = useContext(CartCounterContext);

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);


  return (
    <>
      <div className="flex justify-center text-4xl font-bold text-[#6c9380] my-3">
        <span className="text-center">Our Core Products</span>
      </div>
      <div className="cards-container my-3">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div className="card md:w-2">
                <div className="image_container">
                  <img
                    className="image"
                    src={product.thumbnail}
                    alt="product"
                    onClick={() => navigate(`/single-product/${product.id}`)}
                  ></img>
                </div>
               
                <div className="title">
                  <span>{product.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCards;
