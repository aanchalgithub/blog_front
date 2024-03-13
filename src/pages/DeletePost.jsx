
import React, { useContext, useEffect, useState  } from 'react'
import {Link, useNavigate, useLocation, useParams} from 'react-router-dom'
import { UserContext } from '../Context/userContext'
import axios from 'axios'
import Loader from '../Components/Loader'


const DeletePost = ({postId}) => {

  const navigate = useNavigate()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  //Redirect to login Page for the user who isn't logged in
  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [])


  const removePost = async (id) => {
    alert(id)
    setIsLoading(true)
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, { headers: {Authorization : 
         `Bearer ${token}`}})
         if(response.status == 200){
           if(location.pathname == `/myposts/${currentUser?.id}`){
              navigate(0)
           }else{
            navigate('/')
           }
         }
         setIsLoading(false)
    } catch (error) {
      console.log("could not delete post");
    }
  }

  if(isLoading){
    return <Loader/>
  }


  return (
   <Link className='btn sm danger' onClick={() => removePost(postId)}>Delete</Link>
  )
}

export default DeletePost
