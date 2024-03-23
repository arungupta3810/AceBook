import React from 'react'
import "./index.css"
import Share from '../Share'
import Post from '../Post'
import { useSelector } from 'react-redux'

const Feed = () => {
  const posts = useSelector((state) => state.post)
  return (
    <div className='feed col-md-12'>
      <Share/>
      {posts?.map(e=>
        <Post 
        likes={e.likes}
        reaction={e.reaction}
        status={e.status}
        profilePicture={e.profilePicture} 
        profileName={e.profileName}
        postPicture={e.postPicture}
        />
        )}
    </div>
  )
}

export default React.memo(Feed)