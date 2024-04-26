import SuperCard from '../../components/SuperCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import axios from '../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
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
  const [spot, setSpot] = useState([]);
  const [resto, setResto] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showResto, setShowResto] = useState(false);
  const [places, setPlaces] = useState([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const getSpot = async () => {
    const response = await axios.get('/spot');
    const data = response.data.map(item => {
      return {
        image: item.image,
        name: item.name,
        description: item.description,
        id: item._id,
      };
    });
    console.log(data);
    setSpot(data);
  };

  const fetchPlaces = async () => {
    const response = await axios.get('/place');
    const data = response.data.map(item => {
      return { label: item.name, value: item._id };
    });
    setPlaces(data);
  };

  const getResto = async () => {
    const response = await axios.get('/restaurant');
    const data = response.data.map(item => {
      return {
        id: item._id,
        image: item.image,
        name: item.name,
        description: item.description,
        ratings: item.ratings,
      };
    });
    console.log(data);
    setResto(data);
  };

  const onCardClick = id => {
    navigate(`spot/${id}`);
  };

  const onExploreClick = () => {
    if (selectedPlaceId) {
      navigate(`place/${selectedPlaceId}`);
    }
  };

  const onRestoClick = id => {
    navigate(`restaurant/${id}`);
  };

  useEffect(() => {
    getSpot();
    getResto();
    fetchPlaces();
  }, []);

  console.log(places);
  console.log(spot);
  console.log(resto);

  return (
    <div className="home">
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
      <div className="main">
        <h1>Kochi Unveiled: Your Gateway to Exotic Experiences!</h1>
        <p>
          From its ancient maritime legacy to its modern-day charm,
          <br /> Kochi remains a travel spot of wonders, inviting adventurers to
          embark on a voyage of discovery and enchantment <br />
          in the heart of God's Own Country.
        </p>
        <div className="input-section">
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>

          <Select
            placeholder="Choose Your Destination"
            className="input"
            type="text"
            onChange={e => setSelectedPlaceId(e.target.value)}
            options={places}
          />

          <Button onClick={onExploreClick} className="main-btn">
            Explore Now
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="head">
          <h1>Traveller's Choice: Go to Spots</h1>

          <div className="Seeall">
            <button className="seeall" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'See All'}
            </button>
          </div>
        </div>

        <div className="card-item">
          {showAll
            ? spot.map(item => (
                <SuperCard
                  onClick={() => onCardClick(item.id)}
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              ))
            : spot
                .slice(0, 4)
                .map(item => (
                  <SuperCard
                    onClick={() => onCardClick(item.id)}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                  />
                ))}
        </div>

        <div className="head1">
          <h1>Traveller's Choice: RestoCafe</h1>

          <div className="Seeall1">
            <button
              className="seeall1"
              onClick={() => setShowResto(!showResto)}
            >
              {showResto ? 'Show Less' : 'See All'}
            </button>
          </div>
        </div>

        <div className="card-item">
          {showResto
            ? resto.map(item => (
                <SuperCard
                  onClick={() => onRestoClick(item.id)}
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  ratings={renderStarRating(item.ratings)}
                />
              ))
            : resto
                .slice(0, 4)
                .map(item => (
                  <SuperCard
                    onClick={() => onRestoClick(item.id)}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    ratings={renderStarRating(item.ratings)}
                  />
                ))}
        </div>

        {/* <div className="line"></div> */}
        {/* <div className="card-item">
          {places.map(item => (
            <PlaceCard
              onClick={() => onClick(item.id)}
              image={item.image}
              name={item.name}
            />
          ))}
        </div> */}

        {/* <div className="line"></div> */}
        {/* <h1>Fine Dining</h1> */}
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

export default Home;
