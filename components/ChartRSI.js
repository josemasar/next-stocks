import React, { useState, useEffect } from "react";
import getRSIForSymbol from "../api/ApiConnectorRSI";
import { CanvasJSChart } from "canvasjs-react-charts";
import formatStockDataRSI from "../functions/formatStockDataRSI";

const ChartRSI = (props) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getRSIForSymbol(props.symbol);

      setStockData(formatStockDataRSI(result.data["Technical Analysis: RSI"]));
    };
    fetchStockData();
  }, [props.symbol]);

  const lastSessions = stockData.reverse().slice(-100);

  return (
    <CanvasJSChart
      options={{
        theme: "light2",
        title: {
          text: "RSI indicator",
        },
        axisY: {
          minimum: 0,
          maximum: 70,
          crosshair: {
            enabled: false,
            snapToDataPoint: true,
          },
        },
        axisX: {
          crosshair: {
            enabled: false,
            snapToDataPoint: true,
          },
        },
        data: [
          {
            type: "line",
            dataPoints: lastSessions.map((stockData) => ({
              x: new Date(stockData.date),
              y: stockData.rsi,
            })),
          },
        ],
      }}
    />
  );
};

export default ChartRSI;
