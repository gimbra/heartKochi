import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import './style.css';

const AddPark = () => {
  const navigate = useNavigate();
  const [park, setPark] = useState({
    name: '',
    description: '',
    image: '',
    address: '',
    contact: '',
    ratings: '',
    reviews: '',
    place: '',
  });

  const onChange = async (e, key) => {
    if (key == 'image') {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await axios.post('/image', formData);
      if (response.data && response.data.url) {
        setPark({ ...park, image: response.data.url });
      }
    } else setPark({ ...park, [key]: e.target.value });
  };
  console.log(park);

  const addpark = async () => {
    const response = await axios.post('/park', park);
    toast.success('Park added successfully', {
      onClose: () => {
        navigate('/admin/Home');
      },
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);
  return (
    <div className="addplace">
      <div className="admin-addpark">
        <ToastContainer />
        <div className="addpark-form">
          <h1>Add Park</h1>
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
          <Input placeholder="Address" onChange={e => onChange(e, 'address')} />
          <Input placeholder="Contact" onChange={e => onChange(e, 'contact')} />
          <Input placeholder="Rating" onChange={e => onChange(e, 'ratings')} />
          <Input placeholder="Review" onChange={e => onChange(e, 'reviews')} />
          <Input placeholder="Place" onChange={e => onChange(e, 'place')} />
          <div className="btn-add">
            <Button onClick={addpark}>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPark;
