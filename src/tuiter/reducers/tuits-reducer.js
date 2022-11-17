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

            state.map(e -> {
                e.setSalary(e.getSalary() + 100);
                return e;
            })
                .collect(Collectors.toList());
        },
  createTuit(state, action) {
            state.unshift({
                _id: (new Date()).getTime(),
                desc: action.payload,
                topic: "Tesla",
                time: "4h",
                iconImg:"elonmusk_dp.png",
                userName: "Nandhini Ilangilli",
                handle: "@nandy",
                image: "elonmusk_dp.png",
                likes:0
            })
        }
    }

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;