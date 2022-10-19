import PostSummaryList from "./PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
            <div class="row">
            <div class="row mb-3">
            <form class="navbar-form" role="search">
                <div class="input-group">
                    <span class="input-group-text wd_search_icon">
                        <i class="fa fa-search"></i>
                    </span>
                    <input type="text" class="form-control wd_search_icon_input" placeholder="Search Tuiter">
                    <span style="margin-left: 10px;">
                        <i class="fa fa-cog" style="font-size: 1.7em; color: rgb(29,161,242);"></i>
                    </span>
                </div>
            </form>
        </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="../for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../entertainment.html">Entertainment</a>
                    </li>
                </ul>
           </ul>
           <!-- image with overlaid text -->
           <div class="myContainer">
                <img src="../../tuiter/images/spaceX.jpg" style="width:100%; height: 300px;">
                <div class="bottom-left fa-3x">SpaceX Launch</div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;