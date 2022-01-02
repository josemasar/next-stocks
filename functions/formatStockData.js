/* eslint-disable require-jsdoc */
function formatStockData(stockData) {
  return Object.entries(stockData).map((entries) => {
    const [date, priceData] = entries;
    return {
      date,
      open: Number(priceData["1. open"]),
      high: Number(priceData["2. high"]),
      low: Number(priceData["3. low"]),
      close: Number(priceData["4. close"]),
    };
  });
}

export default formatStockData;
