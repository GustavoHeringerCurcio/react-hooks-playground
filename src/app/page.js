"use client"

import { useState } from "react";
import { Button } from "flowbite-react"

export default function Home() {


const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className="text-5xl">counter: {count}</p>


      <div className="flex justify-center items-center gap-10">
        <Button pill color="blue" size="lg"
        onClick={() => setCount(count + 1)}
        >increase</Button>

        <Button  color="yellow" size="lg" onClick={() => setCount(0)}>reset</Button>
        <Button pill color="red" size="lg" onClick={() => setCount(count - 1)}>decrease</Button>
      </div>
    </div>
  );
}
