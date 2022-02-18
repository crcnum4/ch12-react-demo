import React, {useState, useContext} from 'react';
import NewUserForm from './NewUserForm';
import axios from 'axios';
import {AuthContext} from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    username: "",
    password: "",
    confirm: "",
    cohort: "",
    fname: "",
    lname: "",
  });

  // submitting context

  const [auth, setAuth] = useContext(AuthContext)

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value
    })
  }

  const onSubmit = async (e) => {
    //validation
    if (query.password !== query.confirm) {
      alert('Passwords do not match');
      return;
    }
    const data = query;
    data.name = query.fname + " " + query.lname;
    data.cohort = parseInt(query.cohort);
    try {
      const res = await axios.post(`${host}/api/auth/signup`, data)
      // alert(res.data.message);
      login(data);
    } catch (err) {
      alert (err.response.data.message);
    }
  }

  const login = async (data) => {
    try {
      const res = await axios.post(
        `${host}/api/auth/signin`, 
        data
      )
      // alert(res.data.token);
      createDeveloper(data, res.data.token);
    } catch (err) {
      alert (err.response.data.message);
    }
  }

  const createDeveloper = async (data, token) => {
    data.email = data.username;
    try {
      const res = await axios.post(
        `${host}/api/developers`, 
        data,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
      console.log(res.data);
      setAuth({token, profile: res.data});
      alert(res.data.id);
      navigate('/developers')
    } catch (err) {
      alert (err.response.data.message);
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
      <h1>Register</h1>
      <NewUserForm 
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Register;