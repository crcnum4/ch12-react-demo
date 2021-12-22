import React, {useState} from 'react';
import NewUserForm from './NewUserForm';
import axios from 'axios';

const Register = () => {

  const [query, setQuery] = useState({
    username: "",
    password: "",
    confirm: "",
    cohort: "",
    fname: "",
    lname: "",
  });

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
      const res = await axios.post('http://localhost:8080/api/auth/signup', data)
      // alert(res.data.message);
      login(data);
    } catch (err) {
      alert (err.response.data.message);
    }
  }

  const login = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:8080/api/auth/signin', 
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
        "http://localhost:8080/api/developers", 
        data,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      )
      console.log(res.data);
      alert(res.data.id);
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