import { createSlice } from "@reduxjs/toolkit";

export const likesSlice = createSlice({
  name: "likes",
  initialState: {
    likes: 0,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addLike: (state) => {
      state.likes += 1;
    },
    removeLike: (state) => {
      state.likes -= 1;
    },
  },
});

export const { addLike, removeLike } = likesSlice.actions;

export const previousLikesCount = (state) => state.likes.likes;

export default likesSlice.reducer;
