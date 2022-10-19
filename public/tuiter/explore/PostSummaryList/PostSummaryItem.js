const PostSummaryItem   = (post) => {
    return(`
  
                
                
                
                 <a href="#" class="list-group-item techList override-bs list-group-item-action card">
                            <div class="row g-0">

                                <div class="col-10">
                                    <div class="card-body">
                                        <p class="card-text override-bs text-muted">${post.topic}</p>
                                        <p class="card-text override-bs ">${post.userName}</p>
                                        <p class="card-text override-bs text-muted">${post.time}</p>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <img class="rounded float-right" style="width:100%; height:100%;"
                                        src=${post.image} class="img-fluid rounded-start"
                                        alt="...">
                                </div>
                            </div>
                        </a>
    `);
}
export default PostSummaryItem;