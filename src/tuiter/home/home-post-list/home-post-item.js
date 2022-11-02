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
                "title_link": "http://spacex.com/updates",
                "iconImg": "dennis.jpeg",
                "handle": "@react"
            }
    }
) => {
    return(
<>
        <div className="card wd-post-card">

            <div className="card-body">

                    <div>
                        <img className="wd-homepostTitle" src={require(`../../images/home/${post.image1}`)}/>
                        <p className="wd-postTrendingTitle bold">{post.userName1}
                            <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                            <span className="wd-postTrendingTittleSub"> - {post.handle1}</span>
                            <span className="wd-postTrendingTittleSub"> - {post.time1}</span>
                        </p>

                    </div>
                <p className="card-text card-desc">{post.title1}<a class="card-desc-link" href="#">{post.title_link1}</a></p>
                <div className="myContainer">
                    <img src={require(`../../images/home/${post.iconImg1}`)} className="wd-img-style"/>

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

    <div className="card wd-post-card">

        <div className="card-body">

            <div>
                <img className="wd-homepostTitle" src={require(`../../images/home/${post.image2}`)}/>
                <p className="wd-postTrendingTitle bold">{post.userName2}
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span className="wd-postTrendingTittleSub"> - {post.handle2}</span>
                    <span className="wd-postTrendingTittleSub"> - {post.time2}</span>
                </p>

            </div>
            <div>
            <p className="card-text card-desc">{post.title2}
            </p>
            </div>
            <div className="myContainer2">
                <div className="wd-bookmark-contentImgBack">
                    <p className="wd-bookmark-contentImg-Content">
                        <div>
                            <img className="wd-homepostTitle2" src={require(`../../images/home/${post.image2}`)}/>
                            <p className="wd-postTrendingTitle2 bold">{post.userName2}
                                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                                <span className="wd-postTrendingTittleSub"> - {post.handle2}</span>
                                <span className="wd-postTrendingTittleSub"> - {post.time2}</span>
                            </p>

                        </div>
                        <p className="card-text card-desc2">{post.title2}
                        </p>
                    </p>
                </div>

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






</>

   );
};
export default HomePostItem;