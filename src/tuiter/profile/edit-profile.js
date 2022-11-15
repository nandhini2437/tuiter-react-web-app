import React , {useState}  from "react";
import "./index.css"
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import {changeFirstName, changeLastName, changeBio, changeHandle, changeDateOfBirth} from "./profile-reducer";

const EditProfile = () => {

    const profile = useSelector(state => state.profile)

    const navigate = useNavigate();

    function goToProfile(event) {

        navigate('../profile');
    }

    let [firstName, setFirstName] = useState({firstName:profile.firstName});
    const firstNameChangeHandler = (event) => {
        const newFirstName = {
            firstName: event.target.value
        }
        setFirstName(newFirstName);

    }

    let [lastName, setLastName] = useState({lastName:profile.lastName});
    const lastNameChangeHandler = (event) => {
        const newLastName = {
            lastName: event.target.value
        }
        setLastName(newLastName);

    }

    let [handle, setHandle] = useState({handle:profile.handle});
    const handleChangeHandler = (event) => {
        const newHandle = {
            handle: event.target.value
        }
        setHandle(newHandle);

    }

    let [bio, setBio] = useState({bio:profile.bio});
    const bioChangeHandler = (event) => {
        const newBio = {
            bio: event.target.value
        }
        setBio(newBio);

    }

    let [dateOfBirth, setDateOfBirth] = useState({dateOfBirth:profile.dateOfBirth});
    const dateOfBirthChangeHandler = (event) => {
        const newDateOfBirth = {
            dateOfBirth: event.target.value
        }
        setDateOfBirth(newDateOfBirth);

    }

    const dispatch = useDispatch();

    const saveProfile = ()=> {
        dispatch(changeFirstName(firstName));
        dispatch(changeLastName(lastName));
        dispatch(changeHandle(handle));
        dispatch(changeBio(bio));
        dispatch(changeDateOfBirth(dateOfBirth));
        goToProfile();
    }


    return(
        <div className="profileContainer">
            <h2>Edit Profile</h2>

            <div className="position-relative mb-2">
                <img width="100%" height="200px" src="./images/banner.png" className="w-100" />
                <img width="48px" height="48px" className="position-absolute wd-nudge-up text-white logo_sideBar" src="./images/profilePic.png" />

            </div>
            <br />


            <div className="row">
                <input className="col-12 form-control mb-2" placeholder="First Name" value={firstName.firstName} onChange={firstNameChangeHandler}></input>

                <input className="col-12 form-control mb-2" placeholder="Last Name" value={lastName.lastName}  onChange={lastNameChangeHandler}></input>

                <input className="col-12 form-control mb-2" placeholder="Handle" value={handle.handle}  onChange={handleChangeHandler}></input>

                <textarea className="col-12 form-control mb-2" placeholder="bio" value={bio.bio}  onChange={bioChangeHandler}></textarea>

                <input className="col-12 form-control mb-2" placeholder="Date of birth" value={dateOfBirth.dateOfBirth}  onChange={dateOfBirthChangeHandler}></input>


            </div>
            <button className="btn btn-primary btn-block rounded-pill" style={{ float: "right" }} onClick={saveProfile}>
                Save
            </button>



        </div>
    );
}

export default EditProfile;