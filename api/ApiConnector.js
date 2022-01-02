import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.alphavantage.co/query",
});

export const getDailyChartForSymbol = (symbol) => {
  return axiosInstance.get("", {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol,
      apikey: `process.env.APIKEY`,
    },
  });
};

export default getDailyChartForSymbol;
