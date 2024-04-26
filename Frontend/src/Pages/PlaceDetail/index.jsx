import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Navbar from '../../components/Navbar';
import SpotMap from '../../components/SpotMap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

const PlaceDetail = () => {

  const navigate = useNavigate();
  const { Id } = useParams();
  const [items, setItems] = useState({
    image: '',
    name: '',
    description: '',
    location: {
      coordinates: [0, 0],
    },
  });
  const getItems = async () => {
    const response = await axios.get(`/place/${Id}`);
    setItems(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="items">
      <Navbar />
      <div className="list">
        <Link className="item" to="/">
          Restaurants
        </Link>
        <Link className="item" to="/">
          Parks
        </Link>
        <Link className="item" to="/">
          Suggestions
        </Link>
        <Link className="item" to="/">
          Things to do
        </Link>
      </div>
      <div className="place-detail">
        <div className="heads">
          <div className="name">
            <h1>{items.name}</h1>
          </div>
        </div>

        <div className="mid">
          <img src={items.image} alt="" />
          <SpotMap coordinates={items.location.coordinates} />
          <div className="card">
            <p className='des'>{items.description}</p>
            {/* <p>{detail.address}</p> */}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="logo">
          <i className="fa-solid fa-location-crosshairs"></i>
          <div className="title">
            <h1>
              <span className="span1">
                H<span className="spell">EA</span>R
                <span className="spell">T</span>
              </span>
              <span className="span2"> KOCHI </span>
            </h1>
          </div>
        </div>

        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 6238013489</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <ul class="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="quick-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 HeartKochi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PlaceDetail;