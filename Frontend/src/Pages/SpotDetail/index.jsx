import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Navbar from '../../components/Navbar';
import SpotMap from '../../components/SpotMap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SpotDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState({
    image: '',
    name: '',
    description: '',
    place: '',
    location: {
      coordinates: [0, 0],
    },
  });
  const getDetail = async () => {
    const response = await axios.get(`/spot/${id}`);
    setDetail(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="detail">
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
      <div className="spot-detail">
        <div className="name">
          <h1>{detail.name}</h1>
          <h3>{detail.place.name}</h3>
        </div>

        <div className="mid">
          <img src={detail.image} alt="" />
          <SpotMap coordinates={detail.location.coordinates} />
          <div className="card">
            <p>{detail.description}</p>
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

export default SpotDetail;
