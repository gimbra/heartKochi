import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Navbar from '../../components/Navbar';
import SpotMap from '../../components/SpotMap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

const RestoDetail = () => {
  const renderStarRating = ratings => {
    const stars = [];
    const roundedRating = Math.floor(ratings);
    const hasDecimal = ratings % 1 !== 0;
    // Round the rating to nearest whole number
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(
          <FontAwesomeIcon icon={faStar} key={i} style={{ color: '#FFD700' }} />
        );
      } else if (hasDecimal && i === roundedRating) {
        stars.push(
          <FontAwesomeIcon
            icon={faStarHalfAlt}
            key={i}
            style={{ color: '#FFD700' }}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon icon={faStar} key={i} style={{ color: '#C0C0C0' }} />
        );
      }
    }
    return stars;
  };

  const navigate = useNavigate();
  const { resId } = useParams();
  const [detail, setDetail] = useState({
    image: '',
    name: '',
    description: '',
    place: '',
    address: '',
    contact: '',
    ratings: '',
    reviews: '',
    location: {
      coordinates: [0, 0],
    },
  });
  const getDetail = async () => {
    const response = await axios.get(`/restaurant/${resId}`);
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
      <div className="resto-detail">
        <div className="heads">
          <div className="name">
            <h1>{detail.name}</h1>
            <h3>{detail.place.name}</h3>
          </div>
          <div className="rate">
            <h1>{renderStarRating(detail.ratings)}</h1>
          </div>
        </div>

        <div className="mid">
          <img src={detail.image} alt="" />
          <SpotMap coordinates={detail.location.coordinates} />
          <div className="card">
            <p className='des'>{detail.description}</p>
            {/* <p>{detail.address}</p> */}
            <i className="fa-solid fa-location-dot">
              <p>{detail.address}</p>
            </i>
            <i className="fa-solid fa-tty">
              <p>{detail.contact}</p>
            </i>
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

export default RestoDetail;
