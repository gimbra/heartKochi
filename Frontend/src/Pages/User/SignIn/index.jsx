import Navbar from '../../../components/Navbar';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './style.css';

const SignIn = () => {
  const navigate = useNavigate();

  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const onChange = async (e, key) => {
    setSigninData({ ...signinData, [key]: e.target.value });
  };
  console.log(signinData);

  const signin = async () => {
    const response = await axios.post('/user/login', signinData);
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    toast.success('Logged In', {
      onClose: () => {
        navigate('/');
      },
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="signin">
      <div className="navbar">
      </div>
      <div className="user-signin">
        <ToastContainer />
        <div className="user-signin-form">
          <h1>Sign In</h1>
          <Input placeholder="Email" onChange={e => onChange(e, 'email')} />
          <Input
            placeholder="Password"
            type="password"
            onChange={e => onChange(e, 'password')}
          />
          <div className="btn-signin">
            <Button onClick={signin}>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
