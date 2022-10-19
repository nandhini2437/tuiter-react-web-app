const PostItem   = (post) => {
    return(`
    <div class="card wd-post-card">
                    <div class="card-body mainCard">
       <div class="wd-row wd-headerBmk">
            <div class="wd-leftColum">
                <img class="wd-ProfPicBmk" src=${post.profile_pic} />
            </div>
            <div class="wd-rightCol">
                <span class="wd-picCaption">
                    ${post.topic}
                    <span class="wd-picHandler">
                        ${post.userName} - ${post.time}
                    </span>
                </span>

                <p class="wd-PicDesc">
                    ${post.title}
                </p>

                <div class="wd-bookmark-contentImgBack">
                    <img class="wd-bookmark-contentImg" src=${post.image} />
                    <p class="wd-bookmark-contentImg-Title">${post.description_title}</p>
                    <p class="wd-bookmark-contentImg-Content">
                        ${post.description}
                        </br></br>
                        <i class="fa fa-link" aria-hidden="true"></i> ${post.handle}
                    </p>

                </div>

                <div>
                    <ul class="wd-nav">
                        <li><a href="#"><i class="fa fa-comments" aria-hidden="true"> <span
                                        class="wd-icon-space">${post.comments}</span></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet" aria-hidden="true"> <span
                                        class="wd-icon-space">${post.retweets}</span></i></a></li>
                        <li><a href="#"><i class="fa fa-heart" aria-hidden="true"> <span
                                        class="wd-icon-space">${post.likes}</span></i></a></li>
                        <li><a href="#"><i class="fa fa-upload" aria-hidden="true"></i></a></li>
                    </ul>
                </div>


            </div>
        </div>
        </div>
        </div>
                
    `);
}
export default PostItem;