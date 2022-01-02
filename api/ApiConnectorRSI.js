import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.alphavantage.co/query",
});

export const getRSIForSymbol = (symbol) => {
  return axiosInstance.get("", {
    params: {
      function: "RSI",
      symbol,
      interval: "daily",
      time_period: "60",
      series_type: "close",
      apikey: `process.env.APIKEY`,
    },
  });
};

export default getRSIForSymbol;
