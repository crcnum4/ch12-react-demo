import React, {useState} from 'react';

const AuthContext = React.createContext([]);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState({token: null, profile: null});

  //useEffect can check for local storage for previously logged in user.

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, AuthContext};