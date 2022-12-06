const PostSummaryItem   = (post) => {
    return(`
    <div class="card">

                    <div class="card-body">
                        <div>
                            <p class="wd-postTrendingTittleSub">${post.topic}</p>
                            <p class="wd-postTrendingTitle bold">${post.userName}
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span class="wd-postTrendingTittleSub"> - ${post.time}</span>
                            </p>

                        </div>
                        <p class="card-text bold">${post.title}</p>
                    </div>
                    <div class="centerColImgWrapper">
                        <img src=${post.image} alt="...">
                    </div>

                </div>


    `);
 }
 export default PostSummaryItem;