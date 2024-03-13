import React from "react";
import { useContext, useState, useEffect } from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import Loader from '../Components/Loader'
import DeletePost from './DeletePost'
import axios from 'axios'

const PostDetail = () => {

  const {id} = useParams() 
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        console.log('respose',response.data)
        setPost(response.data)
       
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    getPost()
  },[])




if(isLoading){
  return <Loader />
}

  return (
    <section className="post-detail">
      {error && <p className="error">{error.message}</p>}
      {post && <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor user={post?.user} createdAt={post?.createdAt} />
          {currentUser?.id == post?.creator && <div className="post-detail__buttons">
            <Link to={`/posts/${post?._id}/edit`} className="btn sm primary">
              Edit
            </Link>
            <DeletePost postId={post._id}/>
          </div>}
        </div>
        <h1>{post?.title}</h1>
        <div className="post-detail__thumbnail">
          <img src={`${process.env.REACT_APP_ASSESTS_BASE_URL}/uploads/${post?.thumbnail}`} alt="" />
        </div>
        <p dangerouslySetInnerHTML={{__html: post?.description}}>{}</p>
        </div>}
    </section>
  );
};

export default PostDetail;
