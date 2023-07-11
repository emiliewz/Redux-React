import { configureStore } from "@reduxjs/toolkit";
// anytime we create a reducer, we need to add it to the store
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
