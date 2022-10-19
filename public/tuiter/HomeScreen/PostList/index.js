import PostItemListItem from "./PostItem.js";
import posts from "./posts.js";


const PostItemList  = () => {
    return(`
    <div class="contentBox">
        ${
        posts.map(post => {
            return(PostItemListItem(post));
        }).join('')
    }
</div>
    `);
}
export default PostItemList ;