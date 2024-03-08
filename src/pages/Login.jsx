import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userData, setUserdata] = useState({
   
    email : '',
    password : '',
    
  })

  const changeInputHandler = (e)=>{
    setUserdata(prevState =>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className="register">
        <div className="container">
          <h2>Log In In</h2>
          <form  className="form login__form">
              <p className="form__error-message">This is an error message</p>
              <input type="text" name="email" placeholder='Enter Email' id="" value={userData.email} onChange={changeInputHandler} autoFocus />
              <input type="text" name="password" placeholder='Enter Password' id="" value={userData.password} onChange={changeInputHandler}  />
          <button type='submit' className='btn primary'>Login</button>
          </form>
          <small>Don't have an account? <Link to='/register'> sign up</Link></small>
        </div>
    </section>
  )
}

export default Login

