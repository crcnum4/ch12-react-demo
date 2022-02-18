import React, {useState, useEffect, useContext, Fragment} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {AuthContext} from '../Providers/AuthProvider'
import Spinner from '../faCommon/Spinner';
import image from '../../assets/background-img.jpg';
import Button from '../common/Button';
import {faUserPlus, faUserSlash, faUserInjured, faUserClock, faPeopleArrows} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import lorem from '../../assets/loremIpsum';


const Profile = (props) => {
  const params = useParams();
  const [developer, setDeveloper] = useState({
    id: params.devId
  });
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
  // pull developer data from backend
  useEffect(() => {
    const _fetchDeveloper = async () => {
      const res = await axios.get(
        `${host}/api/developers/${developer.id}`,
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

  console.log(auth);

  const addFriend = async () => {
    // send id to backend
    try {
      await axios.post(
        `${host}/api/relationships/add/${developer.id}`,
        {}, // empty post body
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      alert('success');
      setAuth({...auth, profile: {
        ...auth.profile,
        pendingFriends: [
          ...auth.profile.pendingFriends,
          {
            id: developer.id
          }
        ]
      }})
    } catch (e) {
      console.log(e.message);
      if( e.response) {
        console.log(e.response.data.message);
      }
    }
  }
  
  const removeFriend = async () => {
    alert('but why');
  }

  const blockUser = async () => {
    alert('I hate them too');
  }

  const approveFriend = async () => {
    alert("congrats on the friend")
  }

  const displayRelationButton = () => {
    console.log(auth);
    if (auth.profile.friends.find((friend) => friend.id === developer.id)) {
      // we are friends yay
      return (
        <Button 
            style={{
              width: 'auto',
              color: '#F1F1F1',
            }}
            onClick={removeFriend}
          >
            <FontAwesomeIcon icon={faUserInjured} /> Remove Friend
          </Button>
      )
    }
    if (auth.profile.pendingFriends.find((friend) => friend.id === developer.id)) {
      // we are friends yay
      return (
        <Button 
            style={{
              width: 'auto',
              color: '#F1F1F1',
            }}
          >
            <FontAwesomeIcon icon={faUserClock} /> Pending Approval
          </Button>
      )
    }
    if (auth.profile.incomingFriends.find((friend) => friend.id === developer.id)) {
      // we are friends yay
      return (
        <Button 
            style={{
              width: 'auto',
              color: '#F1F1F1',
            }}
            onClick={addFriend}
          >
            <FontAwesomeIcon icon={faPeopleArrows} /> Approve Friend
          </Button>
      )
    }

    return (
      <Button 
        style={{
          width: 'auto',
          color: '#F1F1F1',
        }}
        onClick={addFriend}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Add Friend
      </Button>
    )    
    
  }

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
          {displayRelationButton()}
          <Button style={{
            width: 'auto',
            color: '#F1F1F1',
            backgroundColor: 'red'
          }}>
            Block <FontAwesomeIcon icon={faUserSlash} />
          </Button> 
        </div>
        {/* about me and friends list */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "900px",
        }}>
          <div style={{
            flex: 2,
            flexDirection: "column",
            width: '100%',
            padding: '4px',
            display: 'flex'
          }}>
            <h2>About Me</h2>
            <p>{lorem.substring(0, 5000)}</p>
          </div>
          <div style={{
            flex: 1,
            display: 'flex', 
            flexDirection: 'column',
            width: '100%',
            padding: '4px'
          }}>
            <h2>Friends</h2>
            <p>You are alone in the world</p>
          </div>
        </div>
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