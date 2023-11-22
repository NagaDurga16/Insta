import { configureStore } from "@reduxjs/toolkit";

import PostSlice from "./Postslicer";

export const Store = configureStore({
  reducer: {
    post: PostSlice,
  },
});
