"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

//counter imports
import { Button } from "flowbite-react";


export default function reacUseEffect() {
  
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const generateNumber = Math.floor(Math.random() * 100)
  const generateNumber2 = Math.floor(Math.random() * 100)
  
  useEffect(() => { 
    console.log(`count1 changed to ${count}`)
  },[count])

  useEffect(() => {
    console.log(`count2 changed to ${count2}`)
  }, [count2])


  const [click, setClick] = useState(Number(localStorage.getItem("ls_value")) || 0 )
  console.log(click)

  useEffect(() => {
    document.title = `you clicked ${click} times!`
    localStorage.setItem("ls_value", click)
  })  
  




  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6 bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 py-5">
      <Link className="text-blue-600 underline" href="/"> 🔷 Go Back.</Link>
      <h1 className="text-xl">UseEffect practices</h1>
        <h2 className="text-xl">we have 3 mainly ways to use useeffect.</h2>
      <div className="flex flex-col justify-center items-center gap-2 text-blue-600">
        <p>using always without an array - not recommended</p>
        <p>using an [] empty array to render just one time on mount </p>
        <p>using [count] to 'useeffect' just when count render or re-render</p>
      </div>
      { /* Counter */ }
      <section className="flex flex-col justify-center items-center gap-5 rounded-xl p-10 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <p className="text-4xl">Testing useEffect see in logs</p>
        
        <div className="flex justify-center items-center gap-10">
          <p className="text-2xl">count1: {count}</p>
          <p className="text-2xl">count2: {count2}</p>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col">
            <Button pill color="blue" size="lg" onClick={() => setCount(count + 1)}>
              increase count1
            </Button>
            <Button pill color="red" size="lg" onClick={() => setCount(count - 1)}>
              decrease count1
            </Button>
          </div>

          <Button pill color="yellow" size="lg" onClick={() =>  { 
            setCount(0)
            setCount2(0)
          }}>
            reset both
          </Button>

          <div className="flex flex-col">
            <Button pill color="blue" size="lg" onClick={() => setCount2(count2 + 1)}>
              decrease count 2
            </Button>

            <Button pill color="red" size="lg" onClick={() => setCount2(count2 - 1)}>
              decrease count 2
            </Button>
          </div>


        </div>
        <p>just for useEffect dependencies tests.</p>
          <Button pill color="green" onClick={() => {
            setCount(generateNumber)
            setCount2(generateNumber2)
          }}>randomNumber</Button>
      </section>

      { /* Clicks useeffect + localstorage */ }
      <section className="flex flex-col justify-center items-center gap-5 rounded-xl p-10 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <p>your clicks changes the tab title</p>
          <div className="flex justify-center items-center gap-5">
            <h1>you clicked: {click} times</h1>
            <Button size="sm" color="red" onClick={() => {
              localStorage.removeItem("ls_value")
              setClick(0)
            }}>♻️</Button>
          </div>
        <p>this value is saved using local.storage.setItem</p>
        
        <Button onClick={() => setClick(click + 1)}>Click Here!</Button>


        
      </section>

    </main>
  );
}