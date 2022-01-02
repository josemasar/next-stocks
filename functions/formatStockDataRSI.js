/* eslint-disable require-jsdoc */
function formatStockDataRSI(stockData) {
  return Object.entries(stockData).map((entries) => {
    const [date, priceData] = entries;
    return {
      date,
      rsi: Number(priceData["RSI"]),
    };
  });
}

export default formatStockDataRSI;
