import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsThunk } from "./newsThunk";
const initialState = {
  isLoading: false,
  isError: false,
  news: [],
};

export const getNews = createAsyncThunk("news/getNews", newsThunk);
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.news = payload;
        state.isLoading = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default newsSlice.reducer;
