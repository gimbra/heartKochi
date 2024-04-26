import Navbar from '../../components/Navbar';
import PlaceCard from '../../components/PlaceCard';
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './discover.css';

const Discover = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    const response = await axios.get('/place');
    const data = response.data.map(item => {
      return {
        image: item.image,
        name: item.name,
        id: item._id,
      };
    });
    console.log(data);
    setPlaces(data);
  };
  const onClick = id => {
    navigate(`/place/${id}`);
  };

  useEffect(() => {
    getPlaces();
  }, []);

  console.log(places);

  return (
    <div className="discover">
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
      <div className="line"></div>
      <div className="heading">
        <h1>Exploring Kochi's Marvels</h1>
      </div>
      <div className="card-item">
        {places.map(item => (
          <PlaceCard
            onClick={() => onClick(item.id)}
            image={item.image}
            name={item.name}
          />
        ))}
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

export default Discover;
