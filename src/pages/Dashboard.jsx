import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../Context/userContext';
import axios from 'axios';
import Loader from '../Components/Loader';
import DeletePost from './DeletePost'

const Dashboard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = currentUser?.token;

  // Redirect to login Page for the user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, {
          headers: { Authorization: `Bearer Token ${token}` }
        });
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [id, token]);

  return (
    <section className="dashboard">
      {isLoading ? (
        <Loader />
      ) : posts.length ? (
        <div className="container dashboard__container">
          {posts.map(post => (
            <article key={post.id} className="dashboard__post">
              <div className="dashboard__post-info">
                <div className="dashboard__post-thumbnail">
                  <img src={`${process.env.REACT_APP_ASSESTS_BASE_URL}/uploads/${post.thumbnail}`} alt="" />
                </div>
                <h5>{post.title}</h5>
              </div>
              <Link to={`/posts/${post._id}`} className="btn sm">
                View
              </Link>
              <Link to={`/posts/${post._id}/edit`} className="btn sm primary">
                Edit
              </Link>
              <DeletePost postId={post._id}/>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="center">You have no posts yet</h2>
      )}
    </section>
  );
};

export default Dashboard;