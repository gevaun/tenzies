import { useState, useEffect } from "react";
import Die from "./components/Die";
import { motion } from "framer-motion";


function App() {
  const [dice, setDice] = useState(allNewDice());
  const [pick, setPick] = useState(null);
  const [tenzies, setTenzies] = useState(false);

  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  }

  function randomDelay() {
    return Math.random() * 10;
  }

  const diceElement = dice.map((die, index) => {
    return (
      <Die
        key={index}
        value={die}
        pick={pick}
        onClick={() => setPick(die)}
        delay={randomDelay()}
      />
    );
  });

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
      setTenzies(true);
    }
  }, [dice]);



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
          <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-indigo-600 text-white px-12 py-4 rounded-lg font-bold text-2xl shadow-md cursor-pointer"
            onClick={handleRoll}
          >
            Roll
          </motion.div>
        </div>
      </div>
      <div className="h-12">
xddd
      </div>
    </div>
  );
}

export default App;
