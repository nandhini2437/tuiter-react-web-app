import React from "react";
import "../index.css"
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const HomePostItem = (
    {
        post =
            {
                "topic": "Web Development",
                "userName": "ReactJS",
                "time": "2h",
                "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                "title_link": "http://spacex.com/updates",
                "iconImg": "dennis.jpeg",
                "handle": "@react"
            }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <div className="card wd-post-card">

            <div className="card-body">

                <div>
                    <img className="wd-homepostTitle" src={require(`../images/home/${post.iconImg}`)}/>
                    <p className="wd-postTrendingTitle bold">{post.userName}
                        <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                        <span className="wd-postTrendingTittleSub"> - {post.handle}</span>
                        <span className="wd-postTrendingTittleSub"> - {post.time}</span>
                    </p>

                </div>

                <p className="card-text bold">{post.title}</p>
                <div className="myContainer">
                    <img src={require(`../../images/home/${post.iconImg}`)} className="wd-img-style"/>

                </div>
                <div>
                    <ul className="wd-navigation-list">
                        <li><a href="#"><i className="bi bi-chat" aria-hidden="true"> <span
                            className="wd-icon-space">10</span></i></a></li>
                        <li><a href="#"><i className="bi bi-lightning" aria-hidden="true"> <span
                            className="wd-icon-space">23</span></i></a></li>
                        <li><a href="#"><i className="bi bi-heart" aria-hidden="true"> <span
                            className="wd-icon-space">{post.likes}</span></i></a></li>
                        <li><a href="#"><i className="bi bi-arrow-bar-up" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>



        </div>
   );
};
export default HomePostItem;