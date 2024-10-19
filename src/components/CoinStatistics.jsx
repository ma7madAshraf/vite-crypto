import React from "react";
import millify from "millify";

import {
  AiOutlineMoneyCollect,
  AiOutlineDollarCircle,
  AiOutlineFund,
  AiOutlineExclamationCircle,
  AiOutlineStop,
  AiOutlineTrophy,
  AiOutlineCheck,
  AiOutlineNumber,
  AiOutlineThunderbolt,
} from "react-icons/ai";
const CoinStatistics = ({ coinDetails }) => {
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: "Rank",
      value: coinDetails?.rank,
      icon: <AiOutlineNumber />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        coinDetails["24hVolume"] && millify(coinDetails["24hVolume"])
      }`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coinDetails?.allTimeHigh?.price &&
        millify(coinDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coinDetails?.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: "Number Of Exchanges",
      value: coinDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: "Approved Supply",
      value: coinDetails?.supply?.confirmed ? (
        <AiOutlineCheck />
      ) : (
        <AiOutlineStop />
      ),
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        coinDetails?.supply?.total && millify(coinDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coinDetails?.supply?.circulating &&
        millify(coinDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
      <section>
        {" "}
        <article>
          <h3 className="text-xl mb-4"> {coinDetails.name} Value Statistics</h3>
        </article>
        <div>
          {stats.map(({ icon, title, value }) => {
            return (
              <div className="flex items-center gap-x-2" key={title}>
                {" "}
                <span className="text-secondary">{icon}</span>{" "}
                <span className="text-secondary">{title}</span>
                <span className="font-semibold ml-1">{value}</span>{" "}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        {" "}
        <article>
          <h3 className="text-xl mb-4">{coinDetails.name} Other Stats Info</h3>
        </article>
        <div>
          {genericStats.map(({ icon, title, value }) => {
            return (
              <div className="flex items-center gap-x-2" key={title}>
                {" "}
                <span className="text-secondary">{icon}</span>{" "}
                <span className="text-secondary">{title}</span>
                <span className="font-semibold ml-1">{value}</span>{" "}
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default React.memo(CoinStatistics);
