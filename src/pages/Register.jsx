import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserdata] = useState({
    name : '',
    email : '',
    password : '',
    password2 : ''
  })

  const changeInputHandler = (e)=>{
    setUserdata(prevState =>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
      const data=await axios.post('http://localhost:5000/api/users/register',userData)
      console.log('res',data)
    } catch (error) {
      
    }
    console.log(userData)
    
  }
  return (
    <section className="register">
        <div className="container">
          <h2>Sign Up</h2>
          <form  className="form register__form" onSubmit={handleSubmit}>
              <p className="form__error-message">This is an error message</p>
              <input type="text" name="name" placeholder='Fisrt Name' id="" value={userData.name} onChange={changeInputHandler} autoFocus />
              <input type="text" name="email" placeholder='Enter Email' id="" value={userData.email} onChange={changeInputHandler}  />
              <input type="text" name="password" placeholder='Enter Password' id="" value={userData.password} onChange={changeInputHandler}  />
              <input type="text" name="password2" placeholder='Confirm Password' id="" value={userData.password2} onChange={changeInputHandler}  />
          <button type='submit' className='btn primary'>Register</button>
          </form>
          <small>Already have an account? <Link to='/login'> sign in</Link></small>
        </div>
    </section>
  )
}

export default Register
