import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myDollars, setMyDollars] = useState(0);
  const [myCoin, setMyCoin] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  /* 코인 개수 계산은 내가 짠 코드 */
  const onChangeInput = (event) => {
    setMyDollars(event.target.value);
    calDollar();
  };
  const onChangeSelect = (event) => {
    setSelectedIdx(event.target.selectedIndex);
    calDollar();
  };
  const calDollar = () => {
    if (myDollars < 0) {
      setMyDollars(0);
      setMyCoin(0);
      return;
    }
    setMyDollars(document.querySelector("input").value);
    setMyCoin(Number(myDollars) / Number(coins[selectedIdx].quotes.USD.price));
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChangeSelect}>
            {coins.map((coin, idx) => (
              <option key={idx}>
                {coin.name} ({coin.symbol}):{coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <div>
            <input
              onChange={onChangeInput}
              value={myDollars}
              type="number"
              placeholder="Enter your money($)"
            />

            <h3>
              나 {coins[selectedIdx].name} {myCoin}개 살 수 있다!
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
