import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import { useNavigate } from "react-router";

const ProfileComponent = () => {

    const profile = useSelector(state => state.profile)

    const navigate = useNavigate();

    function goToEditProfile(event) {

        navigate('../editProfile');
    }
    return(
        <div className="profileContainer">
            <h2>Profile</h2>

            <div className="position-relative mb-2">
                <img width="100%" height="200px" src={require(`../images/cover-image.jpeg`)} className="w-100" />
                <img width="48px" height="48px" className="position-absolute wd-nudge-up text-white logo_sideBar" src={require(`../images/owner.jpg`)} />

            </div>
            <br />

            <button className="btn btn-primary btn-block rounded-pill" onClick={goToEditProfile} style={{ float: "right" }}>
                Edit profile
            </button>

            <h2>{profile.firstName} {profile.lastName}</h2>
            {profile.handle}

            <p>{profile.bio}</p>

            <div>
                <ul className="wd-navigation-list">
                    <li><a href="#"><i className="bi bi-chat" aria-hidden="true"> <span
                        className="wd-icon-space">{profile.location}</span></i></a></li>
                    <li><a href="#"><i className="bi bi-lightning" aria-hidden="true"> <span
                        className="wd-icon-space">Born {profile.dateOfBirth}</span></i></a></li>
                    <li><a href="#"><i className="bi bi-heart" aria-hidden="true"> <span
                        className="wd-icon-space">Joined {profile.dateJoined}</span></i></a></li>
                    <li><a href="#"><i className="bi bi-heart" aria-hidden="true"> <span
                        className="wd-icon-space">{profile.website}</span></i></a></li>

                </ul>
            </div>

            <div>
                <ul className="wd-navigation-list">
                    <li><p><b>{profile.followingCount}</b> Following</p></li>
                    <li><p><b>{profile.followersCount}</b> Folowers</p></li>
                </ul>
            </div>
        </div>
    );
};
export default ProfileComponent;