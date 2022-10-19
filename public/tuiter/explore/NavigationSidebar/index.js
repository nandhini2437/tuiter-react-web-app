const NavigationSidebar = () => {
    return(`
                <div class="list-group list-width list-group-left">
     
          <li class="list-group-item override-bs"><i class="fab fa-twitter"></i></li>
                 <a href="#" class="list-group-item override-bs list-group-item-action active" aria-current="true">
                        <i class="fa fa-home iconName"></i> <span class="d-none d-lg-none d-xl-inline-block  ">Home</a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-hashtag iconName"></i>
                        <span class="d-none d-lg-none d-xl-inline-block   ">Explore</span></a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-bell iconName"></i>
                        <span class="d-none d-lg-none d-xl-inline-block   ">Notification</span></a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-envelope iconName "></i> <span
                            class="d-none d-lg-none d-xl-inline-block   ">Messages</span></a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-bookmark iconName "></i> <span
                            class="d-none d-lg-none d-xl-inline-block   ">Bookmarks</span></a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-list iconName "></i>
                        <span class="d-none d-lg-none d-xl-inline-block   ">Lists</span></a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-user iconName "></i>
                        <span class="d-none d-lg-none d-xl-inline-block  ">Profile</span></a>
                    <a href="#" class="list-group-item override-bs list-group-item-action"><i
                            class="fa fa-ellipsis-h iconName "></i> <span
                            class="d-none d-lg-none d-xl-inline-block  ">More</span></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;