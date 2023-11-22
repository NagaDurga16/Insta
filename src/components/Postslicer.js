import React from "react";
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
    POSTS:[],
    
    
}
export const PostSlice= createSlice({
    name: 'post',
    initialState,
      reducers: {
        createPost: (state, action) => {
            const { author, caption, images,like_count} = action.payload;
            
            state.POSTS= [...state.POSTS, action.payload];
            
        },
        updatePost:(state,action) =>{
          const{like_count,index}=action.payload;
          state.POSTS[index].like_count=like_count;
          state.POSTS=[...state.POSTS]
          
        }

      }});
      export const {createPost,updatePost} = PostSlice.actions
      export default PostSlice.reducer