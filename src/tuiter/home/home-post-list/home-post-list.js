import "../index.css"
import React from "react";
// import homePostsArray from './homepost.json';
import HomePostItem from "./home-post-item";

import {useSelector} from "react-redux";

const HomePostList = () => {
  const homePostsArray = useSelector(state => state.tuits)
 return(
<div>
{
     homePostsArray.map(post =>
        <HomePostItem
          key={post._id} post={post}/> )
 }
</div>
 );
};
export default HomePostList;