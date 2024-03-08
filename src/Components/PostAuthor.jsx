import React from 'react'
import { Link } from 'react-router-dom'
import Avtar from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to='/posts/users/sdfsdf' className='post__author'>
        <div className="post__author-avtar">
            <img src={Avtar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By : Aanchal Verma</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor
