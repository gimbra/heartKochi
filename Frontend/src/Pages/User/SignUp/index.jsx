import Navbar from '../../../components/Navbar';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './style.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = async (e, key) => {
    if (key == 'image') {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const response = await axios.post('/image', formData);
      if (response.data && response.data.url) {
        setSignupData({ ...signupData, image: response.data.url });
      }
    } else setSignupData({ ...signupData, [key]: e.target.value });
  };
  console.log(signupData);

  const signup = async () => {
    const response = await axios.post('/user/signup', signupData);
    toast.success('SignUp Successfull, Login to continue', {
      onClose: () => {
        navigate('/user/SignIn');
      },
      autoClose: 1000,
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="signup">
    <div className="user-signup">
      <ToastContainer />
      <div className="user-signup-form">
        <h1>Sign Up</h1>
        <Input placeholder="Name" onChange={e => onChange(e, 'name')} />
        <Input placeholder="Email" onChange={e => onChange(e, 'email')} />
        {/* <Input
          placeholder="Image"
          type="file"
          onChange={e => onChange(e, 'image')}
        /> */}
        <Input
          placeholder="Password"
          type="password"
          onChange={e => onChange(e, 'password')}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          onChange={e => onChange(e, 'confirmPassword')}
        />
        <div className="btn-signup">
          <Button onClick={signup}>Sign Up</Button>
        </div>
        <a href="/user/SignIn">Already have an account?Sign In</a>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
