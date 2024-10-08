import { useState, useEffect } from "react";
import Dice from "./components/dice";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [pick, setPick] = useState(null);
  const [gameSatutus, setGameStatus] = useState(false);

  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  }

  const diceElement = dice.map((die, index) => {
    return (
      <Dice key={index} value={die} pick={pick} onClick={() => setPick(die)} />
    );
  });
  console.log(pick);

  function handleRoll() {
    setDice(
      dice.map((die) =>
        die === pick ? die : Math.floor(Math.random() * 6) + 1
      )
    );
  }
  
  useEffect(() => {
    const allEqual = (arr) => arr.every((v) => v === arr[0]);
    if (allEqual(dice)) {
      alert("You win!");
    }
  });

  return (
    <div className="bg-blue-950 h-screen p-12">
      <div className="bg-white p-12 rounded-xl p-4 space-y-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-center text-blue-950 font-bold">
            Tenzies
          </h1>
          <p className="text-lg text-center">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="md:w-2/3 mx-auto flex justify-center">
          <div className="grid grid-rows-2 grid-cols-5 gap-8 text-center py-12">
            {diceElement}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-indigo-600 text-white px-12 py-4 rounded-lg font-bold text-2xl shadow-md"
            onClick={handleRoll}
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
