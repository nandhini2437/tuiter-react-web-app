import React from "react";
import './index.css'
// import '../images/'
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'java.png' }
 }
) => {
 return(
    <li className="list-group-item">
    <div className="row">
                            <div className="col-lg-3 col-xl-3 col-xxl-3">
                                <img src={require(`../images/${who.avatarIcon}`)} height={48} className="card-img-top logo_sideBar"
                                    alt="..."/>
                            </div>
                            <div className="col-lg-5 col-xl-5 col-xxl-5">
                                <div className="wd-sideNavHeader bold">{who.userName}
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                </div>
                                <span className="wd-postTrendingTittleSubSide"> @{who.handle}</span>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-xxl-4">
                                <button className="btn btn-primary btn-block rounded-pill">
                                    Follow
                                </button>
                            </div>

                        </div>
                        </li>
 );
};
export default WhoToFollowListItem;