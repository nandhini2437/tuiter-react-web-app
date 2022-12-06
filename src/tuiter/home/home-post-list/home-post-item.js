import React from "react";
import "../index.css"
const HomePostItem = (
 {
   post = 
   {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "react.svg",
    "iconImg": "teslaBigLogo.jpg",
    "handle": "@react"
}
 }
) => {
 return(
  
    <div className="card wd-post-card">

    <div className="card-body">
    
        <div>
            <img className="wd-homepostTitle" src={require(`../../images/${post.iconImg}`)}/>
            <p className="wd-postTrendingTitle bold">{post.userName}
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <span className="wd-postTrendingTittleSub"> - {post.handle}</span>
                <span className="wd-postTrendingTittleSub"> - {post.time}</span>
            </p>
  
        </div>

        <p className="card-text bold">{post.title}</p>
        <div className="myContainer">
<img src={require(`../../images/${post.image}`)} className="wd-img-style"/>

</div>
<div>
    <ul className="wd-navigation-list">
        <li><a href="#"><i className="bi bi-chat" aria-hidden="true"> <span
                        className="wd-icon-space">22</span></i></a></li>
        <li><a href="#"><i className="bi bi-lightning" aria-hidden="true"> <span
                        className="wd-icon-space">23</span></i></a></li>
        <li><a href="#"><i className="bi bi-heart" aria-hidden="true"> <span
                        className="wd-icon-space">5</span></i></a></li>
        <li><a href="#"><i className="bi bi-arrow-bar-up" aria-hidden="true"></i></a></li>
    </ul>
</div>
    </div>
   
    

</div>
 );
};
export default HomePostItem;