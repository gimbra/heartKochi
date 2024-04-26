import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import './style.css';

const AddResto = () => {
  const navigate = useNavigate();
  const [resto, setResto] = useState({
    name: '',
    description: '',
    address:'',
    contact:'',
    ratings:"",
    reviews:'',
    spot:'',
    image: '',
  });

  const onChange = async (e, key) => {
    if (key == 'image') {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await axios.post('/image', formData);
      if (response.data && response.data.url) {
        setResto({ ...resto, image: response.data.url });
      }
    } else setResto({ ...resto, [key]: e.target.value });
  };
  console.log(resto);

  const addresto = async () => {
    const response = await axios.post('/restaurant', resto);
    toast.success('Restaurant added successfully', {
      onClose: () => {
        navigate('/admin/Home');
      },
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);
  return (
    <div className="addresto">
      <div className="admin-addresto">
        <ToastContainer />
        <div className="addresto-form">
          <h1>Add Restaurant</h1>
          <Input placeholder="Name" onChange={e => onChange(e, 'name')} />
          <Input
            placeholder="Description"
            onChange={e => onChange(e, 'description')}
          />
          <Input
            placeholder="Address"
            onChange={e => onChange(e, 'address')}
          />
          <Input
            placeholder="Contact"
            onChange={e => onChange(e, 'contact')}
          />
          <Input
            placeholder="Rating"
            onChange={e => onChange(e, 'ratings')}
          />
          <Input
            placeholder="Review"
            onChange={e => onChange(e, 'reviews')}
          />
          <Input
            placeholder="Spot"
            onChange={e => onChange(e, 'spot')}
          />
          <Input
            placeholder="Image"
            type="file"
            onChange={e => onChange(e, 'image')}
          />
          <div className="btn-add">
            <Button onClick={addresto}>Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResto;
