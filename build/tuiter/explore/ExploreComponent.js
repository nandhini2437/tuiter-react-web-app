import PostSummaryList from "./PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
                                <div class="row">
                        <div class="col-10">
                            <div class="input-group override-bs m-2 ">
                                <span class="input-group-text override-bs"><i class="fa fa-search"></i></span>


                                <input type="text" class="form-control override-bs" placeholder="Search Twitter"
                                    aria-label="Recipient's username" aria-describedby="button-addon2">
                            </div>
                        </div>
                        <div class="col-1">
                            <button class="btn mt-2" type="button" id="button-addon2"><i
                                    class="fa fa-cog override-bs fa-2x"></i></button>
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
                <img src="../../images/tuiter/explore/spaceship.jpeg" style="width:100%; height: 300px;">
                <div class="bottom-left fa-3x">SpaceX Launch</div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;