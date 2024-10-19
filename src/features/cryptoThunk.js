import axios from "axios";

const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const cryptoOptions = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers,
};

const options = {
  method: "GET",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
  },
  headers,
};
export const getCryptoThunk = async (_, thunkAPI) => {
  try {
    const response = await axios.request(cryptoOptions);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCoinThunk = async (_, thunkAPI) => {
  const { coinID } = thunkAPI.getState().crypto;
  try {
    const url = `https://coinranking1.p.rapidapi.com/coin/${coinID}`;
    const response = await axios.request({ ...options, url });
    return response.data.data.coin;
  } catch (error) {
    return error;
  }
};
export const getCoinHistoryThunk = async (timePeriod, thunkAPI) => {
  const { coinID } = thunkAPI.getState().crypto;
  const { coinHistoryTime } = thunkAPI.getState().crypto;

  try {
    const HistoryOptions = {
      method: "GET",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: coinHistoryTime,
      },
      headers,
      url: `https://coinranking1.p.rapidapi.com/coin/${coinID}/history`,
    };
    const response = await axios.request(HistoryOptions);
    return response.data.data.history;
  } catch (error) {
    return error;
  }
};
