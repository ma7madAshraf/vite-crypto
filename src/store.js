import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./features/cryptoSlice";
import newsSlice from "./features/newsSlice";

export const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
    news: newsSlice,
  },
});
