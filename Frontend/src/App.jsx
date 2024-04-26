import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Discover from './Pages/Discover';
import Review from './Pages/Review';
import UserSignIn from './Pages/User/SignIn';
import UserSignUp from './Pages/User/SignUp';
import AdminSignIn from './Pages/Admin/SignIn';
import AdminSignUp from './Pages/Admin/SignUp';
import Favorites from './Pages/Favorites';
import AdminHome from './Pages/AdminHome';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddPark from './Pages/Admin/AddPark';
import AddSpot from './Pages/Admin/AddSpot';
import AddPlace from './Pages/Admin/AddPlace';
import AddResto from './Pages/Admin/AddResto';
import SpotDetail from './Pages/SpotDetail';
import RestoDetail from './Pages/RestoDetail';
import PlaceDetail from './Pages/PlaceDetail';
import './App.css';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {' '}
        <Route path="/" element={<Home />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/user/SignIn" element={<UserSignIn />} />
        <Route path="/user/SignUp" element={<UserSignUp />} />
        <Route path="/admin/SignIn" element={<AdminSignIn />} />
        <Route path="/admin/SignUp" element={<AdminSignUp />} />
        <Route path="/admin/Home" element={<AdminHome />} />
        <Route path="/admin/addpark" element={<AddPark />} />
        <Route path="/admin/addspot" element={<AddSpot />} />
        <Route path="/admin/addplace" element={<AddPlace />} />
        <Route path="/admin/addresto" element={<AddResto />} />
        <Route path="/spot/:id" element={<SpotDetail />} />
        <Route path="/restaurant/:resId" element={<RestoDetail />} />
        <Route path="/place/:Id" element={<PlaceDetail />} />
      </Routes>
    </>
  );
};

export default App;
