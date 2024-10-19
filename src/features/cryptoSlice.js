import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCoinThunk,
  getCryptoThunk,
  getCoinHistoryThunk,
} from "./cryptoThunk";
const initialState = {
  isLoading: true,
  stats: {},
  coins: [],
  coinID: "",
  coinDetails: {},
  coinHistory: {},
  coinHistoryTime: "",
};
export const getCrypto = createAsyncThunk("crypto/getCrypto", getCryptoThunk);
export const getCoin = createAsyncThunk("crypto/getCoin", getCoinThunk);
export const getCoinHistory = createAsyncThunk(
  "crypto/getCoinHistory",
  getCoinHistoryThunk
);
const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCoinID: (state, { payload }) => {
      state.coinID = payload;
    },
    updateCoinHistoryTime: (state, { payload }) => {
      state.coinHistoryTime = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCrypto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCrypto.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.data.stats;
        state.coins = payload.data.coins;
      })
      .addCase(getCrypto.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCoin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.coinDetails = payload;
      })
      .addCase(getCoin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCoinHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoinHistory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.coinHistory = payload;
      })
      .addCase(getCoinHistory.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cryptoSlice.reducer;
export const { updateCoinID, updateCoinHistoryTime } = cryptoSlice.actions;
