import axios from "axios";

export const instance = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "7e8ffc4634mshfaec826692124afp1438e6jsn275cfa1b7274",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
});


