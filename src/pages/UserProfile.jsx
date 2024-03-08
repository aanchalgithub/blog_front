import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avtar from '../images/avatar10.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avtar, setAvtar] = useState(Avtar)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [currentPassword,setcurrentPassword] = useState('')
  const [NewPassword,setNewPassword] = useState('')
  const [confirmNewPassword,setconfirmNewPassword] = useState('')
  
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/sdfsdf`} className='btn'> My posts</Link>
        <div className="profile__details">
          <div className="avtar__wrapper">
            <div className="profile__avtar">
                <img src={avtar} alt="" />
            </div>
            {/* Form to update Avtar */}
            <form className='avtar__form'>
                <input type="file" name="avtar" id="avtar" onChange={e => setAvtar(e.target.files[0])}
                 accept='png, jpg, jpeg' />
                <label htmlFor="avtar"><FaEdit /></label>
            </form>
            <button className='profile__avtar-btn'><FaCheck /></button>
          </div>
          <h1>Aanchal Verma</h1>
          {/* Form to update user details */}
          <div className="form profile__form">
            <p className="form__error-message">This is an error message</p>
            <input type="text" placeholder='Full Name' value={name} onChange={e =>setName(e.target.value)} />
            <input type="email" placeholder='Enter Email' value={email} onChange={e =>setEmail(e.target.value)} />
            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e =>setcurrentPassword(e.target.value)} />
            <input type="password" placeholder='New Password' value={NewPassword} onChange={e =>setNewPassword(e.target.value)} />
            <input type="password" placeholder='Confirm Password' value={confirmNewPassword} onChange={e =>setconfirmNewPassword(e.target.value)} />
            <button type="submit" className='btn primary'>Update details</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
