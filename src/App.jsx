import { useState } from "react";
import Dice from "./components/dice";

function App() {
  const [die, setDie] = useState(0);

  const dice = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];

  const diceElements = dice.map((die, index) => {
    return  (
      <Dice
        key={index}
        value={die}
        onClick={() => {
          setCount(count + 1);
        }}
      />
    )
  })

  function handleRoll() {
    console.log('Rolling');
  }

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
        <div className="w-2/3 mx-auto flex justify-center">
          <div className="grid grid-rows-2 grid-cols-5 gap-8 text-center py-12">
            {diceElements}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-indigo-600 text-white px-12 py-4 rounded-lg font-bold text-2xl shadow-md" onClick={handleRoll}>
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
