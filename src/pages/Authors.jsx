import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader'




const Authors = () => {
  const [authors, setAuthors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true)
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
        setAuthors(response.data)
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
    }
    getAuthors();
}, [])

  if(isLoading){
    return <Loader/>
  }

  return (
    <section className="authors">
      {authors.length > 0 ?<div className="container authors__container">
      {
        authors.map(({_id : id, avtar, name, posts})=>{
            return <Link to={`/posts/users/${id}`} className='author'>
              <div className="author__avtar">
                <img src={`${process.env.REACT_APP_ASSESTS_BASE_URL}/uploads/${avtar}`} alt={`Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
        })
      }
      </div> : <h2 className='center'>No authors/users found</h2>}
    </section>
  )
}

export default Authors
