import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavButton = (props) => {
  // const [display, setDisplay] = useState(false);
  const [hover, setHover] = useState(false);

  const style = {
    background: "transparent",
    // margin: ".2em",
    textDecoration: "none",
    fontFamily: "'Exo 2', sans-serif",
    fontSize: "1.35em",
    color: "#f1f1f1",
    fontWeight: 600,
    textShadow: "1px 1px black",
    textAlign: "center",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    transition: "all ease-in-out .5s",
    opacity: hover ? "60%" : "100%",
    margin: '0px 10px',
  }

  return (
    <NavLink to={props.to} style={{...style, ...props.style}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {props.label}
    </NavLink>
  )
  // <a href="destination">text </a>
  // <Link to="destination">text</Link>
}

export default NavButton;