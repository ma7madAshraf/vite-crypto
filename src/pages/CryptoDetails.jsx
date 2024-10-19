import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  updateCoinID,
  getCoin,
  getCoinHistory,
  updateCoinHistoryTime,
} from "../features/cryptoSlice";
import { useDispatch, useSelector } from "react-redux";
import millify from "millify";
import { LineChart, Loading, CoinStatistics } from "../components";

const CryptoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [timePeriod, setTimePeriod] = useState("7d");

  useEffect(() => {
    dispatch(updateCoinID(id));
    dispatch(getCoin(id));
  }, []);
  useEffect(() => {
    dispatch(updateCoinHistoryTime(timePeriod));
    dispatch(getCoinHistory());
  }, [timePeriod]);
  const { coinDetails, coinHistory } = useSelector((store) => store.crypto);

  if (!coinDetails) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <main>
      <article className="mb-6">
        <h2 className="text-3xl w-fit mx-auto pb-4 border-b mb-8">
          {coinDetails.name} ({coinDetails.symbol}) Price
        </h2>
        <p className="text-center">
          {coinDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </article>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(coinDetails?.price)}
        coinName={coinDetails?.name}
        coinChange={coinDetails?.change}
        period={timePeriod}
        onChange={(val) => setTimePeriod(val)}
      />

      <CoinStatistics coinDetails={coinDetails} />
    </main>
  );
};

export default CryptoDetails;
