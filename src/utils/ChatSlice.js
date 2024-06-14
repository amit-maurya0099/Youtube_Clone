import { createSlice } from "@reduxjs/toolkit";
import { Live_chat_count } from "./constants";

const ChatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
        
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(Live_chat_count,1);
            state.messages.unshift(action.payload);
        }
    }
})
 export const {addMessage}=ChatSlice.actions;
export default ChatSlice.reducer;