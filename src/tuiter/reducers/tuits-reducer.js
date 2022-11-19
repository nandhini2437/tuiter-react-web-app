import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

//import profile from '../profile/profile.json';

// const firstName = useSelector((profile) => profile.firstName);
//
// const handle = useSelector((profile) => profile.handle);







const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                _id: (new Date()).getTime(),
                desc: action.payload,
                topic: "Tesla",
                time: "4h",
                iconImg: "elonmusk_dp.jpeg",
                userName: "Nandhini Ilangilli",
                handle: "@nandy",
                image: "elonmusk_dp.jpeg",
                likes: 0
            })

        },
        likeTuit(state, action) {
            state.map(tuit => {
                if (tuit._id === action.payload) {
                    if (tuit.liked === "true") {
                        tuit.liked = "false";
                        tuit.likes--;
                        tuit.color="";
                    } else {
                        tuit.liked = "true";
                        tuit.likes++;
                        tuit.color="likeRed";
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        }
    }})

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;