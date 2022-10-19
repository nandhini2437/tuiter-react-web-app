import PostItemListItem from "./PostItem.js";
import posts from "./posts.js";


const PostItemList  = () => {
    return(`
    <div class="wd-mainContainer">
        ${
        posts.map(post => {
            return(PostItemListItem(post));
        }).join('')
    }
</div>
    `);
}
export default PostItemList ;