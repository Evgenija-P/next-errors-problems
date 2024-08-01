"use client";
import { useState } from "react";

const Counter = ({ content }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex gap-x-5 items-center justify-center mx-auto my-10 text-2xl font-bold text-green-600">
        <button onClick={() => setCount(count - 1)}> - </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
      {content.map(el => (
        <p className="text-2xl text-blue-500 text-center w-3/5 mx-auto" key={el}>
          {el}
        </p>
      ))}
    </div>
  );
};

export default Counter;
