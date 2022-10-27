import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList  = () => {
    return(`
    <div class="list-group card mt-2">
    <div class="card-body">
        ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
</div>
</div>
    `);
}
export default PostSummaryList ;