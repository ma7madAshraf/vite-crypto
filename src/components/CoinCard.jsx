import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/crypto/${coin.uuid}`}>
      <div className="card card-compact bg-base-300 w-96 shadow-xl crypto-card ">
        <div className="card-body p-6 border rounded-box">
          <div className={`card-title justify-between mb-6 `}>
            <h4
              className={`${
                coin.name.length > 9 &&
                `text-base text-nowrap overflow-hidden hover:text-wrap  `
              }`}
            >{`${coin.rank}. ${coin.name}`}</h4>
            <img
              src={coin.iconUrl}
              alt="coin icon"
              style={{ maxWidth: 20 }}
              className="coin"
            />
          </div>

          <div className="card-actions justify-center ">
            <div className="flex shadow w-fit flex-col items-center gap-y-2">
              <div className="stat place-items-center px-1 py-2 col-span-2  rounded-box  shadow-inner shadow-black">
                <div className="stat-title text-base">price</div>
                <div className="stat-value text-xl leading-8">
                  {millify(coin.price)}
                </div>
              </div>

              <div className="rounded-xl  flex ">
                <div className="stat place-items-center px-1 py-2  border-r ">
                  <div className="stat-title text-xs">Market cap</div>
                  <div className="stat-value text-base leading-8">
                    {millify(coin.marketCap)}
                  </div>
                </div>

                <div
                  className={`stat place-items-center px-1 py-2  daily-change  ${
                    coin.change > 0 ? "positive" : "negative"
                  } `}
                >
                  <div className="stat-title text-xs">Daily change</div>
                  <div className="stat-value text-base leading-8">
                    {millify(coin.change)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
