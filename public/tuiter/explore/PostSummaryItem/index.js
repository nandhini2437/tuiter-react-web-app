import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList  = () => {
    return(`
    <div class="contentBox">
        ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
</div>
    `);
}
export default PostSummaryList ;