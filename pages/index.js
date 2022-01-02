import Head from "next/head";
import dynamic from "next/dynamic";
import InputSelector from "../components/inputSelector";

const DynamicChart = dynamic(() => import("../components/Chart"), {
  ssr: false,
});
const DynamicChartRSI = dynamic(() => import("../components/ChartRSI"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next-tickers</title>
        <meta name="description" content="Nextjs stocks app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className="font-bold text-2xl text-center mt-2 ml-4">Next Tickers</p>
        <InputSelector />
        <div className="mx-12 my-4">
          <DynamicChart symbol={"MSFT"} />
        </div>
        <div className="mx-12">
          <DynamicChartRSI symbol={"MSFT"} />
        </div>
      </main>
    </div>
  );
};

export default Home;
