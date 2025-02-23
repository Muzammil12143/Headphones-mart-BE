import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vero
            nostrum aliquid asperiores necessitatibus quia porro laborum animi,
            delectus distinctio, voluptas cupiditate sapiente minus esse
            incidunt totam delectus magni tempora.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              B9/4,Okhla Vihar,Jamia Nagar,Okhla,New Delhi,110025
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 8800 136 550</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: muzammilnaqvi12143@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Catagories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluethooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              HEADPHONSMART 2024 CREATED BY MUZAMMIL. PREMIUM E-COMMERCE
              SOLUTIONS
            </div>
            <img src={Payment} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
