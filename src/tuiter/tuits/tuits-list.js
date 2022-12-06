import "../home/index.css"
import React, {useEffect} from "react";
// import homePostsArray from './homepost.json';
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitsList = () => {

   const {tuits, loading} = useSelector(
      state => state.tuitsData)
     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(findTuitsThunk())
     }, [dispatch]);
    console.log(tuits);
   //  const homePostsArray = useSelector(state => state.tuits)

 return(
<div>


{loading && <span>Loading...</span>}
{tuits && tuits.map(post => <TuitItem key={post._id} post={post}/> )}
 
</div>
 );
};
export default TuitsList;