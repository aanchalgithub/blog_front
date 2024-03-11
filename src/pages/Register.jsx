import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
  const [userData, setUserdata] = useState({
    name : '',
    email : '',
    password : '',
    password2 : ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = (e)=>{
    setUserdata(prevState =>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  const registerUser=async(e)=>{
    e.preventDefault();
    setError('')

    try {
      const response=await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,userData)
      const newUser = await response.data
      console.log(newUser)
      if(!newUser){
        setError('Could not register User. Please Try again')
      }
      console.log('kskksksk')
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message)
    }
    console.log(userData)
    
  }
  return (
    <section className="register">
        <div className="container">
          <h2>Sign Up</h2>
          <form  className="form register__form" onSubmit={registerUser}>
              {error && <p className="form__error-message">{error}</p>}
              <input type="text" name="name" placeholder='Fisrt Name' id="" value={userData.name} onChange={changeInputHandler} autoFocus />
              <input type="text" name="email" placeholder='Enter Email' id="" value={userData.email} onChange={changeInputHandler}  />
              <input type="password" name="password" placeholder='Enter Password' id="" value={userData.password} onChange={changeInputHandler}  />
              <input type="password" name="password2" placeholder='Confirm Password' id="" value={userData.password2} onChange={changeInputHandler}  />
          <button type='submit' className='btn primary'>Register</button>
          </form>
          <small>Already have an account? <Link to='/login'> sign in</Link></small>
        </div>
    </section>
  )
}

export default Register
