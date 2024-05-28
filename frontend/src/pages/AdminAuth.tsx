import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminAuth = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
       await axios.post('http://localhost:3000/admin-auth/', login, {
        withCredentials: true,
      });
      // Redirect to admin dashboard or any other admin route
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={login.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={login.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default AdminAuth;
