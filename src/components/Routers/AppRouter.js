import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import News from '../News/News';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Developers from '../Developers/Developers';
import Profile from '../Profile/Profile';

const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "75px", width: "100%"}}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/:devId" element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;