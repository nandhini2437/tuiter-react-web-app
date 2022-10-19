import NavigationSidebar from "../explore/NavigationSidebar/index.js";

import PostSummaryList from "../explore/PostSummaryList/index.js"

import PostItemList from "./PostList"
// import PostSummaryList from "./PostSummaryList/index.js"

// import ExploreComponent from "./ExploreComponent.js"

// import WhoToFollowListItem from "./WhoToFollowList/index.js";

function homeScreenComponent() {
    $('#wd-homeScreen').append(`
        
        <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
   ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
   ${PostItemList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
   ${PostSummaryList()}
            
   </div>
  </div>
    `);

    const removeClass1Example = $("#exploreScreen");
    removeClass1Example.removeClass('active');

    const addClass1Example = $("#homeScreen");
    addClass1Example.addClass('active');
}

$(homeScreenComponent);