import React from "react";
import HomePostList from "./home-post-list/home-post-list";
import TuitsList from "../tuits/tuits-list"
import WhatsHappening from "./whats-happening";

import "./index.css";
const HomeComponent = () => {
    return(
        <>
            <h4 style={{ color: "black" }}>Home</h4>
            <WhatsHappening/>

            <TuitsList/>
        </>
    );
};
export default HomeComponent;