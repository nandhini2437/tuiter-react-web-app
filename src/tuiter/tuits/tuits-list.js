import "./index.css"
import React from "react";
// import homePostsArray from './homepost.json';
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";


const TuitsList = () => {
    const homePostsArray = useSelector(state => state.tuits)
    console.log(homePostsArray);
    return(
        <div>
            {
                homePostsArray.map(post =>
                    <TuitItem
                        key={post._id} post={post}/> )
            }
        </div>
    );
};
export default TuitsList;