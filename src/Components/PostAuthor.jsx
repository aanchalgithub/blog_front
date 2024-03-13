import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostAuthor = ({ user, createdAt }) => {

  return (
    <Link to={`/posts/users/${user?._id}`} className='post__author'>
      <div className="post__author-avatar">
        <img src={`${process.env.REACT_APP_ASSESTS_BASE_URL}/uploads/${user?.avtar}`} height={30} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: {user?.name}</h5>
        <small>
          <p>{moment(createdAt).fromNow()}</p>
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;