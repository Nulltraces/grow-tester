import React, { useState } from "react";

const CoinFlipGame: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [bet, setBet] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [result, setResult] = useState<"Heads" | "Tails" | null>(null);

  const flipCoin = () => {
    const coin = Math.random() < 0.5 ? "Heads" : "Tails";
    return coin;
  };

  const handleBet = (choice: "Heads" | "Tails") => {
    const coinResult = flipCoin();
    setResult(coinResult);
    if (coinResult === choice) {
      const winnings = bet * multiplier;
      setBalance(balance + winnings);
      setMultiplier(multiplier + 1);
    } else {
      setBalance(0);
      setMultiplier(1);
    }
  };

  const handleCashOut = () => {
    setBalance(0);
    setMultiplier(1);
  };

  return (
    <div>
      <h1>Coin Flip Game</h1>
      <p>Balance: ${balance}</p>
      <p>Current Bet: ${bet}</p>
      <p>Current Multiplier: {multiplier}x</p>
      {result && <p>Result: {result}</p>}
      <button onClick={() => handleBet("Heads")}>Bet Heads</button>
      <button onClick={() => handleBet("Tails")}>Bet Tails</button>
      <button onClick={handleCashOut}>Cash Out</button>
    </div>
  );
};

export default CoinFlipGame;
