import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../components";
import CoinCard from "../components/CoinCard";
import { getCrypto } from "../features/cryptoSlice";

export const loader = (store) => async () => {
  const { coins } = store.getState().crypto;
  if (coins.length < 1) {
    await store.dispatch(getCrypto());
  }
  return null;
};

const Cryptocurrencies = ({ simplified }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let { coins, isLoading } = useSelector((store) => store.crypto);

  coins = simplified ? coins.slice(0, 10) : coins;
  const [coinsList, setCoinsList] = useState(coins);

  useEffect(() => {
    coins = coins.filter((e) =>
      e.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCoinsList(coins);
  }, [searchTerm]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      {!simplified && (
        <input
          type="text"
          placeholder="Search Coins"
          className="input input-bordered input-secondary w-full max-w-xs block mx-auto"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      )}
      <section className=" flex flex-wrap  gap-x-4 gap-y-6 justify-evenly items-center my-8">
        {coins.length > 0 &&
          coinsList.map((coin) => {
            return <CoinCard key={coin.rank} coin={coin} />;
          })}
      </section>
    </>
  );
};

export default Cryptocurrencies;
