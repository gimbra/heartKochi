import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import './style.css';

const AddPlace = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState({
    name: '',
    description: '',
    image: '',
  });

  const onChange = async (e, key) => {
    if (key == 'image') {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await axios.post('/image', formData);
      if (response.data && response.data.url) {
        setPlace({ ...place, image: response.data.url });
      }
    } else setPlace({ ...place, [key]: e.target.value });
  };
  console.log(place);

  const addplace = async () => {
    const response = await axios.post('/place', place);
    toast.success('Place added successfully', {
      onClose: () => {
        navigate('/admin/Home');
      },
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);
  return (
    <div className="addplace">
      <div className="admin-addplace">
        <ToastContainer />
        <div className="addplace-form">
          <h1>Add Place</h1>
          <Input placeholder="Name" onChange={e => onChange(e, 'name')} />
          <Input placeholder="Description" onChange={e => onChange(e, 'description')} />
          <Input
            placeholder="Image"
            type="file"
            onChange={e => onChange(e, 'image')}
          />
          <div className="btn-add">
            <Button onClick={addplace}>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
