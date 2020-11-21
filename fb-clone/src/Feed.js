import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
      
      profilePic="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/122764332_10158805753339146_907963516673557329_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=aFDqNYQY-CcAX_6BTLj&_nc_ht=scontent-lga3-1.xx&oh=283221191729560d9323d3bfe1046f67&oe=5FDD9617"
      message="WOW this works!"
      timestamp="This is a timestamp"
      username="rjkaz"
      image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post 
      profilePic="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/122764332_10158805753339146_907963516673557329_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=aFDqNYQY-CcAX_6BTLj&_nc_ht=scontent-lga3-1.xx&oh=283221191729560d9323d3bfe1046f67&oe=5FDD9617"
      message="WOW this works!"
      timestamp="This is a timestamp"
      username="rjkaz"
      image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      
      />
      <Post
      profilePic="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/122764332_10158805753339146_907963516673557329_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=aFDqNYQY-CcAX_6BTLj&_nc_ht=scontent-lga3-1.xx&oh=283221191729560d9323d3bfe1046f67&oe=5FDD9617"
      message="WOW this works!"
      timestamp="This is a timestamp"
      username="rjkaz"
      image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      
      />

      
      
    </div>
  )
}

export default Feed
