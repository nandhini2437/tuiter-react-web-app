import React from "react";
import "./index.css"
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "teslaBigLogo.jpg"
   }
 }
) => {
 return(
  
  <div className="card">

  <div className="card-body">
      <div>
          
          <p className="wd-postTrendingTittleSub bold">{post.userName}
              <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
              <span className="wd-postTrendingTittleSub"> - {post.time}</span>
          </p>
          <p className="wd-postTrendingTittle bold">{post.topic}</p>

      </div>
      <p className="card-text ">{post.title}</p>
  </div>
  <div className="centerColImgWrapper">
      <img src={require(`../images/${post.image}`)} alt="..."/>
  </div>

</div>
 );
};
export default PostSummaryItem;