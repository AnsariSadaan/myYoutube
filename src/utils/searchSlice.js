import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            // {"ip": ["Iphone", "Iphone 11"]}
            // state = Object.assign(state, action.payload);
            // state = {...state, ...action.payload};
            // return state;
            return { ...state, ...action.payload, };
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;