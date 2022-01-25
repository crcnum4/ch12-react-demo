import React, {useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import Spinner from '../faCommon/Spinner';
import image from '../../assets/background-img.jpg';
import Button from '../common/Button';
import {faUserPlus, faUserSlash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


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

  const displayProfile = () => {
    return (
      <Fragment>
        {/* Profile banner */}
        <div style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          height: '27vh',
          display: 'flex',
          flexDirection: 'row',
          margin: '1rem 0rem',
          padding: '8px',
          maxWidth: '900px',
          width: '100%'
        }}>
          <div style={{
            flex: 1,
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div style={{
            flex: 2,
            flexDirection: 'column',
            color: '#F1F1F1',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <h1>{developer.name.toUpperCase()}</h1>
            <h2>Cohort {developer.cohort}</h2>
          </div>
        </div>
        {/* relationship buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '900px'
        }}>
          <Button style={{
            width: 'auto',
            color: '#F1F1F1',
          }}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Friend
          </Button>
          <Button style={{
            width: 'auto',
            color: '#F1F1F1',
            backgroundColor: 'red'
          }}>
            Block <FontAwesomeIcon icon={faUserSlash} />
          </Button> 
        </div>
        {/* about me and friends list */}
      </Fragment>
    )
  }

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
      ) : 
        displayProfile()
      }
    </div>
  )
}

export default Profile;