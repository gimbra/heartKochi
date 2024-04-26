import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import './style.css';

const AddSpot = () => {
  const navigate = useNavigate();
  const [spot, setSpot] = useState({
    name: '',
    description: '',
    image: '',
    place: '',
  });

  const onChange = async (e, key) => {
    if (key == 'image') {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await axios.post('/image', formData);
      if (response.data && response.data.url) {
        setSpot({ ...spot, image: response.data.url });
      }
    } else setSpot({ ...spot, [key]: e.target.value });
  };
  console.log(spot);

  const addspot = async () => {
    const response = await axios.post('/spot', spot);
    toast.success('Spot added successfully', {
      onClose: () => {
        navigate('/admin/Home');
      },
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);
  return (
    <div className="addspot">
      <div className="admin-addspot">
        <ToastContainer />
        <div className="addspot-form">
          <h1>Add Spot</h1>
          <Input placeholder="Name" onChange={e => onChange(e, 'name')} />
          <Input
            placeholder="Description"
            onChange={e => onChange(e, 'description')}
          />
          <Input
            placeholder="Image"
            type="file"
            onChange={e => onChange(e, 'image')}
          />
           <Input
            placeholder="Place"
            onChange={e => onChange(e, 'place')}
          />
          <div className="btn-add">
            <Button onClick={addspot}>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpot;
