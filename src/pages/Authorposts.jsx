import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data/data';
import PostItem from '../Components/PostItem';

const Authorposts = () => {
  const [posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="author-posts">
        {posts.length > 0 ? <div className="container author__posts-container">
        {
            posts?.map((item) => {
                const {id,thumbnail,category,title,desc,authorID}=item;
                return(
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>

                )
            }
            )
        }
        </div>: <h2 className='center'>No Posts Found</h2>}
    </section>
  )
}

export default Authorposts
