## **Next Tickers**

### **Purpose**

This project uses the [Alphavantage API](https://www.alphavantage.co/) to fetch the daily stock values and the RSI indicator of a ticker for the last 100 sessions.

- NextJS: `latest`
- React: `latest`
- Axios (HTTP requests): `0.24.0`
- Express (backend server): `4.17.2`
- Database: `mongoDB Community Edition`
- TailwindCSS: `3.0.8`
- Charts: `canvasjs-react-charts`

To use this repositoriy, clone it from github and create a `.env.local` file at the root directory with your Alphavantage API Key.

### **Features**

- Share price and RSI indicator charts
- Express backend with mongoDB to save timestamps of some events

### **Future functionalities**

- Drop-down selector with tickers stored in DB
- Define logic when a ticker is a "buy" based on share price and RSI
- Automate saving these timestamps

### **Preview**

![Next-tickers](https://user-images.githubusercontent.com/65446320/147974307-9c0e51d1-995c-4e58-899a-57201ff8d6d7.png)
