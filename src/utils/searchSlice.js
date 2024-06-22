import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchQuery:"",

      
    },
    reducers:{
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        },
        getSearchQuery: (state, action) => {
             state.searchQuery=action.payload
          },
        clearSearchQuery:(state)=>{
            return null;
        },
        addSearchQuery:(state,action)=>{
                return action.payload
        }
       
    },
})

export const {cacheResults,getSearchQuery,clearSearchQuery,addSearchQuery}=searchSlice.actions;
export default searchSlice.reducer;
