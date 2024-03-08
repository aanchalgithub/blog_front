import React, { useState } from 'react'
import Avtar1 from '../images/avatar1.jpg'
import Avtar2 from '../images/avatar2.jpg'
import Avtar3 from '../images/avatar3.jpg'
import Avtar4 from '../images/avatar4.jpg'
import Avtar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'


const authorsData = [
  {id : 1, avtar : Avtar1, name : 'Aanchal Verma',posts : 3},
  {id : 2, avtar : Avtar2, name : 'Anshul Verma',posts : 5},
  {id : 3, avtar : Avtar3, name : 'Rekha Verma',posts : 0},
  {id : 4, avtar : Avtar4, name : 'Rakesh Verma',posts : 2},
  {id : 5, avtar : Avtar5, name : 'Abhishek Aanchal Soni',posts : 1},
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ?<div className="container authors__container">
      {
        authors.map(({id, avtar, name, posts})=>{
            return <Link to={`/posts/users/${id}`} className='author'>
              <div className="author__avtar">
                <img src={avtar} alt={`Image of ${name}`} />
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
