import React, {useState} from 'react';

const AuthContext = React.createContext([]);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({token: null, name: null});

  //if this was a data collecting provider 
  //the use effect method would go here

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext};