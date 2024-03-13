import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../Context/userContext'

const UserProfile = () => {
  const [avtar, setAvtar] = useState('')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [currentPassword,setcurrentPassword] = useState('')
  const [NewPassword,setNewPassword] = useState('')
  const [confirmNewPassword,setconfirmNewPassword] = useState('')
  const [error, setError] = useState('')

  const [isAvtarTouched, setIsAvtarTouched] = useState(false)

  const navigate = useNavigate()
  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  //Redirect to login Page for the user who isn't logged in
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`, {headers : {Authorization : `Bearer ${token}`}})

      const {name, email, avtar} = response.data;
        setName(name)
        setEmail(email)
        setAvtar(avtar)
    }
    getUser();
  },[])

  const changeAvtarHandle = async(e) => {
      setIsAvtarTouched(false)
      try {
        const postData = new FormData();
        postData.set('avtar', avtar)
        const response = await axios.postForm(`${process.env.REACT_APP_BASE_URL}/users/change-avtar`, postData,
        {headers : {Authorization : `Bearer ${token}`}})
          setAvtar(response?.data.avtar)
      } catch (error) {
        console.log(error);
      }
  }


  const updateUserDetail = async (e) => {
      e.preventDefault();

      try {
        const userData = new FormData();
      userData.set('name', name)
      userData.set('email', email)
      userData.set('currentPassword', currentPassword)
      userData.set('newPassword', NewPassword)
      userData.set('newConfirmPassword', confirmNewPassword)

      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/edit-user`, userData, 
      {headers : {Authorization : `Bearer ${token}`}})
console.log(response)
      if(response.status == 200){
          navigate('/logout')
      }
      } catch (error) {
        setError(error.response.data.message) 
      }
  }
  console.log(avtar)
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/${currentUser?.id}`} className='btn'> My posts</Link>
        <div className="profile__details">
          <div className="avtar__wrapper">
            <div className="profile__avtar">
                <img src={`${process.env.REACT_APP_ASSESTS_BASE_URL}/uploads/${avtar}`} alt="" />
            </div>
            {/* Form to update Avtar */}
            <form className='avtar__form'>
                <input type="file" name="avtar" id="avtar" onChange={e => setAvtar(e.target.files[0])}
                 accept='png, jpg, jpeg' />
                <label htmlFor="avtar" onClick={() => setIsAvtarTouched(true)}><FaEdit /></label>
            </form>
              {isAvtarTouched && <button className='profile__avtar-btn' onClick={changeAvtarHandle}><FaCheck /></button>
}
          </div>
          <h1>{currentUser.name}</h1>
          {/* Form to update user details */}
          <div className="form profile__form" >
            {error && <p className="form__error-message">{error}</p>}
            <input type="text" placeholder='Full Name' value={name} onChange={e =>setName(e.target.value)} />
            <input type="email" placeholder='Enter Email' value={email} onChange={e =>setEmail(e.target.value)} />
            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e =>setcurrentPassword(e.target.value)} />
            <input type="password" placeholder='New Password' value={NewPassword} onChange={e =>setNewPassword(e.target.value)} />
            <input type="password" placeholder='Confirm Password' value={confirmNewPassword} onChange={e =>setconfirmNewPassword(e.target.value)} />
            <button onClick={updateUserDetail} className='btn primary'>Update details</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
 