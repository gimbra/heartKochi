import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../utils';
import './style.css';

const AdminHome = () => {
  getId();
  const navigate = useNavigate();

  const addPlace = () => {
    navigate('/admin/addplace');
  };

  const addSpot = () => {
    navigate('/admin/addspot');
  };

  const addResto = () => {
    navigate('/admin/addresto');
  };

  const addPark = () => {
    navigate('/admin/addpark');
  };
  return (
    <div className="admin-home">
      <div className="section">
        <Button onClick={addPlace} className="btns">
          Add Place
        </Button>
      </div>
      <div className="section">
        <Button onClick={addSpot} className="btns">
          Add Spot
        </Button>
      </div>
      <div className="section">
        <Button onClick={addResto} className="btns">
          Add Resto
        </Button>
      </div>

      <div className="section">
        <Button onClick={addPark} className="btns">
          Add Park
        </Button>
      </div>
    </div>
  );
};

export default AdminHome;
