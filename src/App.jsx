import { useRecoilState } from "recoil";
import { lotoAtom } from "./recoil";
import { useState } from "react";
import { useKeyPress } from "ahooks";
import FindNumbers from "./components/FindNumbers";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [numbers, setNumbers] = useRecoilState(lotoAtom);

  const handleAdd = () => {
    if (!inputNumber) return;
    if (numbers?.find((e) => e === Number(inputNumber))) return;

    setNumbers((prev) => [...prev, inputNumber]);
    setInputNumber("");
  };

  useKeyPress("enter", () => {
    handleAdd();
  });

  return (
    <div className="p-4">
      <h1 className="text-4xl text-white uppercase">Loto APP</h1>

      <div className="mt-4">
        <input
          className="p-2 bg-white rounded-lg"
          minLength={2}
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e?.target.value))}
        />

        <button className="p-2 bg-blue-200 ml-4 rounded-lg" onClick={handleAdd}>
          ADD
        </button>

        <button
          className="p-2 bg-blue-200 ml-4 rounded-lg"
          onClick={() => setNumbers([])}
        >
          RESET
        </button>
      </div>

      <div className="mt-4">
        <FindNumbers />
      </div>

      <div className="'mt-4">
        <ul className="p-2 text-white text-2xl">
          {numbers?.map((load) => (
            <li key={load}>- {load}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
