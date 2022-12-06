// import Nav from "../nav";
import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile";

import EditProfile from "./profile/edit-profile"
import HomeComponent from "./home";
import {Routes, Route} from "react-router";
import whoReducer
  from "./reducers/who-reducer";
  import tuitsReducer from "./tuits/tuits-reducer";
  import profileReducer from "./profile/profile-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

  function Tuiter () {
    return(
        <Provider store={store}>

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>

            </div>
            <div className="col-10 col-lg-7 col-xl-6 text-white"
            style={{"position": "relative"}}>
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="editProfile" element={<EditProfile/>}/>
                </Routes>

            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">

            <WhoToFollowList/>
         
            </div>
        </div>

        </Provider>
    );
};

export default Tuiter;