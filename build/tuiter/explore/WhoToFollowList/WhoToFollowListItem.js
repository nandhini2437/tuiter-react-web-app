const WhoToFollowListItem  = (who) => {
    return(`
    <li class="list-group-item">
    <div class="row">
                            <div class="col-lg-3 col-xl-3 col-xxl-3">
                                <img src=${who.avatarIcon} class="card-img-top logo_sideBar"
                                    alt="...">
                            </div>
                            <div class="col-lg-5 col-xl-5 col-xxl-5">
                                <div class="wd-sideNavHeader bold">${who.userName}
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                </div>
                                <span class="wd-postTrendingTittleSubSide"> @${who.handle}</span>
                            </div>
                            <div class="col-lg-4 col-xl-4 col-xxl-4">
                                <button class="btn btn-primary btn-block rounded-pill">
                                    Follow
                                </button>
                            </div>
                        </div>
                        
                        
                        
                        
                        
    `);
}
export default WhoToFollowListItem;