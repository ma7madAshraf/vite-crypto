import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useDispatch } from "react-redux";

const LineChart = ({
  coinHistory,
  coinName,
  currentPrice,
  coinChange,
  period,
  onChange,
}) => {
  let coinPrices = [];
  let coinTimeStamps = [];
  const dispatch = useDispatch();
  const timeVals = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  for (let i = 0; i < coinHistory.length; i++) {
    coinPrices.push(coinHistory[i].price);
    coinTimeStamps.push(
      new Date(coinHistory[i].timestamp * 1000).toLocaleDateString()
    );
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: ` ${coinName} price chart`,
      },
    },
  };

  const data = {
    labels: coinTimeStamps,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <section className="bg-base-300 rounded-xl p-4 text-center">
      <h5 className="text-xl text-secondary capitalize ">
        {" "}
        current {coinName} price :{" "}
        <span className="text-neutral-content font-bold">
          {" "}
          $ {currentPrice}{" "}
        </span>
      </h5>
      <h5 className="font-semibold">
        {coinChange > 0 ? "↗︎" : coinChange === 0 ? "" : "↘︎"} {coinChange}%
      </h5>
      <div className="flex justify-center items-center">
        <label htmlFor="time" className="w-fit">
          time period
        </label>
        <select
          id="time"
          className="select select-ghost w-fit block ml-2 my-4 "
          value={period}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          {timeVals.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {" "}
                {opt}
              </option>
            );
          })}
        </select>
      </div>
      <Line data={data} options={options} />
    </section>
  );
};

export default LineChart;
