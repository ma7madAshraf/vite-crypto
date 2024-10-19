import axios from "axios";

const options = {
  method: "GET",
  url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  },
};

export const newsThunk = async (_, thunkAPI) => {
  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
