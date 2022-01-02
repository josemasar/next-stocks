import React, { useState, useEffect } from "react";
import getDailyChartForSymbol from "../api/ApiConnector";
import { CanvasJSChart } from "canvasjs-react-charts";
import formatStockData from "../functions/formatStockData";

const Chart = (props) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol(props.symbol);

      setStockData(formatStockData(result.data["Time Series (Daily)"]));
    };
    fetchStockData();
  }, [props.symbol]);

  return (
    <CanvasJSChart
      options={{
        theme: "light2",
        title: {
          text: "Share price",
        },
        axisY: {
          // Minimum value is 10% less than the lowest price in the dataset
          minimum: Math.min(...stockData.map((data) => data.low)) / 1.1,
          // Minimum value is 10% more than the highest price in the dataset
          maximum: Math.max(...stockData.map((data) => data.high)) * 1.1,
          crosshair: {
            enabled: false,
            snapToDataPoint: true,
          },
          prefix: "$",
        },
        axisX: {
          crosshair: {
            enabled: false,
            snapToDataPoint: true,
          },
        },
        data: [
          {
            type: "candlestick",
            dataPoints: stockData.map((stockData) => ({
              x: new Date(stockData.date),
              y: [
                stockData.open,
                stockData.high,
                stockData.low,
                stockData.close,
              ],
            })),
          },
        ],
      }}
    />
  );
};

export default Chart;
