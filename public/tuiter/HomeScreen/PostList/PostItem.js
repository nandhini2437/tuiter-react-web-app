const PostItem   = (post) => {
    return(`
    <div class="card wd-post-card">
                    <div class="card-body">
                    
                        <div>
                            <img style="width:20px;height:20px;display:inline-block" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/static/blog/images/google.a51985becaa6.png">
                            <p style="display:inline-block;" class="wd-postTrendingTitle bold">${post.userName}
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="wd-postTrendingTittleSub"> - ${post.handle}</span>
                                <span class="wd-postTrendingTittleSub"> - ${post.time}</span>
                            </p>
                  
                        </div>
                        <p class="card-text bold">${post.title}</p>
                        <div class="myContainer">
                <img src="../../tuiter/images/spaceX.jpg" style="width:100%; height: 300px;">
                
                </div>
                <div>
                    <ul class="wd-navigation-list">
                        <li><a href="#"><i class="fa fa-comment" aria-hidden="true"> <span
                                        class="wd-icon-space">22</span></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet" aria-hidden="true"> <span
                                        class="wd-icon-space">23</span></i></a></li>
                        <li><a href="#"><i class="fa fa-heart" aria-hidden="true"> <span
                                        class="wd-icon-space">5</span></i></a></li>
                        <li><a href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                    </div>
                   
                    
                </div>
                
    `);
}
export default PostItem;