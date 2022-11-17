import React from "react";
import {Provider} from "react-redux";


import {configureStore}
    from '@reduxjs/toolkit';
import TuitsList from "../tuits/tuits-list"
import WhatsHappening from "./whats-happening";
import home from "../reducers/tuits-home-reducer";
import tuits from "../reducers/tuits-reducer";
import "./index.css";

const store = configureStore({
    reducer: {home, tuits}
});


const HomeComponent = () => {
    return(
        <Provider store={store}>
        <div>
            <h4 style={{ color: "black" }}>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
        </Provider>
    );
};
export default HomeComponent;