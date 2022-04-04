import React from "react";
import { useState, useEffect } from "react";

export const CoinTracker = () => {
  const [loading, setLoading] = useState(true); //로딩을 위한 스테이트
  const [coins, setCoins] = useState([]); // 코인리스트를 위한 스테이트
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // 코인리스트를 스테이트에 받고 끝나면
        setLoading(false); // 로딩을 끝내주어야한다.
      });
  }, []); // 코인을 불러오는 api로 한번만 실행할려고 useEffect를 쓴다
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item) => (
            <option>
              {item.name}({item.symbol}):${item.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
