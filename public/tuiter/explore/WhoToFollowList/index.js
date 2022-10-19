import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import whos from "./whos.js";


const WhoToFollowList  = () => {
    return(`
    <div class="card" >
        <div class="card-header">
            Who to follow
        </div>
        <ul class="list-group list-group-flush">
        ${
        whos.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
</ul>
</div>
    `);
}
export default WhoToFollowList ;