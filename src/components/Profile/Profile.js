import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import Spinner from '../faCommon/Spinner';

const Profile = (props) => {
  const params = useParams();
  const [developer, setDeveloper] = useState({
    id: params.devId
  });
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  // pull developer data from backend
  useEffect(() => {
    const _fetchDeveloper = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/developers/${developer.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
      setDeveloper(res.data);
      setLoading(false);
    }
    setLoading(true);
    _fetchDeveloper();
  }, [])

  /*
    display a header with avatar and name.
    display cohort number and then on right add and block buttons.
    display about me and if friends then display friends list on right.
  */
  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      {loading ? (
        <Spinner /> 
      ) : (
        <h1>Profile, {developer.name}</h1>
      )
      }
    </div>
  )
}

export default Profile;