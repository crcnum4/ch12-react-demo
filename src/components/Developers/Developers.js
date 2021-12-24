import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import Spinner from '../faCommon/Spinner';
import axios from 'axios';
import Developer from './Developer';

const Developers = (props) => {
  const [auth] = useContext(AuthContext)
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  // use effect to pull list of developers
  // use state to store the developers
  // neet bearer token to get the developer list.

  useEffect(() => {
    const _getDevelopers = async () => {
      try {

        const res = await axios.get(
          'http://localhost:8080/api/developers',
          {
            headers: {
              "Authorization": `Bearer ${auth.token}`
            }
          }
        )
        console.log(res.data)
        setLoading(false);
        setDevelopers(res.data);
      } catch (err) {
        console.log(err.response.message)
      }


    }
    setLoading(true);
    _getDevelopers();
  },[auth.token])

  const displayDevelopers = () => {
    return developers.map(dev => <Developer developer={dev} key={dev.id}/>)
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Developers</h1>
      {loading ? 
        <Spinner /> 
      :
        displayDevelopers()
      }
    </div>
  )
}

export default Developers;