import React, {useContext, Fragment} from 'react';
import NavButton from './NavButton';
import {AuthContext} from '../Providers/AuthProvider'

const NavBar = (props) => {
  const [auth] = useContext(AuthContext)

  return (
    <nav style={{
      display:'flex',
      backgroundColor: "blue",
      position: "absolute",
      width: "100%",
      zIndex: 9999,
      top: 0,
      left: 0,
      flexDirection:'row',
      height: '75px'
    }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0em 1.2em'
      }}>
        <h1 style={{color: "lightgreen"}}>DevConnector</h1>
      </div>
        <div style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
          padding: '0em 1.2em',
          justifyContent: 'flex-end'
        }}>
          <NavButton to="/" label="home" />
          <NavButton to="/news" label="news" />
          {auth.token ? (
            <NavButton to="/developers" label="Developers" />
          ) : (
            <Fragment>
              <NavButton to="/login" label="login" />
              <NavButton to="/register" label="Sign up" />
            </Fragment>
          ) }
          
        </div>
    </nav> 
  )
}

export default NavBar;