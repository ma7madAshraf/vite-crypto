import React from "react";
import millify from "millify";
import {  useSelector } from "react-redux";
import { getCrypto } from "../features/cryptoSlice";
import { getNews } from "../features/newsSlice";

import { Link } from "react-router-dom";
import { News, Cryptocurrencies } from "./index";
import { Loading } from "../components";
export const loader = (store) => async () => {
  const { coins } = store.getState().crypto;
  const { news } = store.getState().news;

  if (coins.length < 1) {
    await store.dispatch(getCrypto());
  }
  if (news.length < 1) {
    await store.dispatch(getNews());
  }

  return null;
};
const HomePage = () => {

  const { isLoading, stats } = useSelector((store) => store.crypto);
  if (isLoading) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        <Loading />
      </section>
    );
  }
  return (
    <main>
      <section className="my-12">
        <h2 className="text-3xl md:text-6xl font-bold w-fit mx-auto pb-4 capitalize border-b mb-12">
          Global crypto stats
        </h2>
        <div className="flex  justify-center">
          <div className="stats shadow stats-vertical lg:stats-horizontal ">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">total cryptocurrencies</div>
              <div className="stat-value">{stats.total}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">total Exchanges</div>
              <div className="stat-value">{millify(stats.totalExchanges)}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">total Market cap</div>
              <div className="stat-value">{millify(stats.totalMarketCap)}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">total 24 volume</div>
              <div className="stat-value">{millify(stats.total24hVolume)}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-300 py-8 rounded-xl">
        <h4 className="text-2xl sm:text-4xl font-semibold w-fit mx-auto pb-4 capitalize border-b mb-12">
          Top 10 cryptocurrencies
        </h4>
        <Cryptocurrencies simplified />
        <div className="flex justify-center">
          <Link
            className="btn btn-wide btn-secondary text-xl capitalize font-semibold"
            to="/cryptocurrencies"
          >
            see more
          </Link>
        </div>
      </section>
      <section className="mt-16">
        <h4 className="text-4xl font-semibold w-fit mx-auto pb-4 capitalize border-b mb-12">
          Latest crypto news
        </h4>
        <News simplified />
        <div className="flex justify-center">
          <Link
            className="btn btn-wide btn-secondary text-xl capitalize font-semibold"
            to="/news"
          >
            see more
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
