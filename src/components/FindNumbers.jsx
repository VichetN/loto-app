import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { lotoAtom } from "../recoil";

function FindNumbers({}) {
  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [three, setThree] = useState(null);
  const [four, setFour] = useState(null);
  const [five, setFive] = useState(null);

  const [win, setWin] = useState(false);

  const numbers = useRecoilValue(lotoAtom);

  const handleFind = () => {
    if (
      !Boolean(one) ||
      !Boolean(two) ||
      !Boolean(three) ||
      !Boolean(four) ||
      !Boolean(five)
    )
      return;
    const findArr = [one, two, three, four, five];
    const found = numbers.some((r) => findArr.includes(r));

    if (found) {
      setWin(true);
    } else {
      setWin(false);
    }
  };

  useEffect(() => {
    if (numbers?.length <= 0) {
      setOne(null);
      setTwo(null);
      setThree(null);
      setFour(null);
      setFive(null);
    }
  }, [numbers?.length]);

  return (
    numbers?.length > 4 && (
      <>
        <h3 className="text-white mb-2">Find winner</h3>
        <div className="flex gap-2">
          <input
            type="number"
            minLength={2}
            value={one}
            onChange={(e) => setOne(Number(e.target.value))}
            className="p-2 w-16"
          />
          <input
            type="number"
            minLength={2}
            value={two}
            onChange={(e) => setTwo(Number(e.target.value))}
            className="p-2 w-16"
          />
          <input
            type="number"
            minLength={2}
            value={three}
            onChange={(e) => setThree(Number(e.target.value))}
            className="p-2 w-16"
          />
          <input
            type="number"
            minLength={2}
            value={four}
            onChange={(e) => setFour(Number(e.target.value))}
            className="p-2 w-16"
          />
          <input
            type="number"
            minLength={2}
            value={five}
            onChange={(e) => setFive(Number(e.target.value))}
            className="p-2 w-16"
          />
        </div>
        <div className="mt-4">
          <button
            className="py-2 px-6 bg-blue-200 rounded-lg"
            onClick={handleFind}
          >
            FIND{" "}
          </button>
        </div>

        <div className="mt-4">
          {win && (
            <p className="text-white bg-green-500 w-fit p-4">All Correct</p>
          )}
          {!win && <p className="text-white bg-red-500 w-fit p-4">Not found</p>}
        </div>
      </>
    )
  );
}

export default FindNumbers;
