"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex gap-x-5 items-center justify-center mx-auto my-10 text-2xl font-bold text-green-600">
        {" "}
        <button onClick={() => setCount(count - 1)}> - </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>

      <p className="text-2xl text-blue-500 text-center w-3/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta placeat magnam
        ratione rerum! Ad cupiditate aut qui quis. Et voluptates accusamus aliquid esse. Eos sed
        dolorum voluptatibus excepturi beatae? Molestias ex amet praesentium laborum? Laboriosam,
        perferendis consequuntur in a, iusto consequatur error harum suscipit obcaecati animi
        tempore deleniti facilis aliquid. Nihil eius ut iste itaque, possimus fugiat numquam facere!
        Accusamus ipsum esse quaerat debitis omnis officia asperiores maxime numquam, deleniti enim
        cupiditate aliquid! Vitae nam dolores eum error harum, eos omnis provident beatae
        exercitationem assumenda veniam explicabo repudiandae voluptatem! Illo rerum quod
        accusantium cumque animi nobis molestiae autem velit repellendus earum ad, voluptatem iusto
        ab? Accusantium harum maxime cumque blanditiis. Atque, illum. Cumque deleniti tempore,
        aliquam ipsum dignissimos quas? Quibusdam unde maxime vitae sint voluptatibus nihil
        laboriosam possimus, optio architecto quasi, enim quia dicta minus magnam libero expedita
        provident sapiente corporis velit deserunt ipsa vero deleniti. Voluptatum, suscipit quaerat!
      </p>
    </div>
  );
};

export default Counter;
