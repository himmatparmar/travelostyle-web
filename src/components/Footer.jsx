import "./Footer.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-section">
        <div className="top-row">
          <div className="line"></div>
          <span>ESTD. 2026</span>
          <div className="line"></div>
        </div>

        <h1 className="logo">
          TRAVEL<span className="o">O</span>STYLE
        </h1>
        
        <div className="bottom-row">
          <div className="line"></div>
          <span>JOURNEY BEYOND</span>
          <div className="line"></div>
        </div>
      </div>

      <div className="footer-content">
        <div className="column">
          <h3>Company</h3>
          <p>About Us</p>
          <p>General FAQs</p>
          <p>Write To Us</p>
          <p>Travel Journal</p>
        </div>

        <div className="column">
          <h3>Travel</h3>
          <p>All Journeys</p>
          <p>Group Journeys</p>
          <p>Private Journeys</p>
          <p>Tailor-Made Journey</p>
          <p>Offers</p>
        </div>

        <div className="column">
          <h3>Legal</h3>
          <p>Booking Terms & Conditions</p>
          <p>Cookie Preferences</p>
          <p>Website Terms Of Use</p>
          <p>Privacy Policy</p>
          <p>Data Sharing Policy</p>
          <p>Email Opt-Out</p>
          <p>Site Map</p>
        </div>

        <div className="column">
          <h3>Connect With Us</h3>

        <div className="icons">
              <FaFacebookSquare className="social-icon" />
              <FaInstagram className="social-icon" />
        </div>

          <p>+1 773 983 8067</p>
          <p>info@travelostyle.com</p>
        </div>

        <div className="newsletter">
          <label>Your Name*</label>
          <input type="text" placeholder="Your first name" />

          <label>Email ID*</label>
          <input type="email" placeholder="Your Email ID" />

          <button>Subscribe To Our Newsletter</button>

          <div className="checkbox-row">
            <input type="checkbox" />
            <span>
              I agree to receive news, updates and more from TravelOStyle
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        © TravelOStyle 2026 | Designed by Eunoia Design House
      </div>
    </footer>
  );
}