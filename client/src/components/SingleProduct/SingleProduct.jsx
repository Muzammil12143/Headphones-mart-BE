import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Prod from "../../assets/products/earbuds-prod-1.webp";
import {
  FaCartPlus,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";
const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useContext(Context);

  if (!data) return;
  const products = data?.data?.[0]?.attributes;
  const prodImg = products.img?.data?.[0]?.attributes;
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={process.env.REACT_APP_DEV_URL + prodImg.url} alt="" />
          </div>
          <div className="right">
            <span className="name">{products.Title}</span>
            <span className="price">&#8377;{products.Price}</span>
            <span className="desc">{products.Description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={increment}>+</span>
                <span>{quantity}</span>
                <span onClick={decrement}>-</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{products.categories?.data?.[0]?.attributes?.text}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={products.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
