import React, {useState, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from '../Providers/AuthProvider';
import {useNavigate} from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {

  const [query, setQuery] = useState({
    username: '',
    password: ''
  })
  const [submitting, setSubmitting] = useState(false);
  // const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async () => {
    // submit query to backend to login.
    setSubmitting(true);
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signin', query);
      setAuth({...auth, token: res.data.token});
      setSubmitting(false);
      navigate('/developers');
    } catch (err) {
      console.error(err.response.data.message);
      alert(err.response.data.error);
      setSubmitting(false);
    }
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Login</h1>
      <LoginForm 
        query={query} 
        updateForm={updateForm} 
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </div>
  )
}

export default Login;