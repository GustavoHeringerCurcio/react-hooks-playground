"use client";

import { useState } from "react";
import Link from "next/link";
import SimpleNavBar from "@/app/components/simple-navbar"

//counter imports
import { Button } from "flowbite-react";

//toggle imports
import { useThemeMode, DarkThemeToggle, toggleSwitchTheme} from "flowbite-react"

//show/hide
import { Card } from "flowbite-react";

//text input characters lenght
import { TextInput } from "flowbite-react";

//my own carousel
import { Carousel } from "flowbite-react"; //not working

//Currency converter
import { Label, Select } from "flowbite-react";





export default function Home() {
  //counter
  const [count, setCount] = useState(0);

  //dark toggle (important to configure in globals.css)
  const {mode} = useThemeMode()

  //show/hide text
  const [showText, setShowText] = useState(false)
  const phrase = "lorem ipsum"

  //characters count
  const [character, setCharacter] = useState("you should type something...")
  const [charCount, setCharCount] = useState(0)

  function handleCharacter(typedValue) {

    setCharacter(typedValue)
    setCharCount(typedValue.length)
    
  }
  
  //my own carousel
  const [index, setIndex] = useState(0)
const images = [
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1019/800/400",
    "https://picsum.photos/id/1020/800/400",
  ];

  function next() {
    setIndex( index === images.length - 1 ? 0 : index + 1 )
  }
  function prev() {
    setIndex(index === 0 ? images.length - 1 : index - 1)
  }

  //currency converter
  const [amount, setAmount] = useState ("")
  const [fromCurrency, setfromCurrency] = useState("BRL")
  const [toCurrency, setToCurrency] = useState("USD")

  const rates = {
  BRL: 1,
  USD: 5.22,
  EUR: 5.70,
}

const convertedAmount = amount === "" ? "" : ((amount * rates[fromCurrency]) / rates[toCurrency]).toFixed(2)
  

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6 bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 py-5">
      
      <SimpleNavBar></SimpleNavBar>

      { /* Counter */ }
      <section className="flex flex-col justify-center items-center gap-10 rounded-xl p-10 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <p className="text-5xl">counter: {count}</p>

        <div className="flex gap-6">
          <Button pill color="blue" size="lg" onClick={() => setCount(count + 1)}>
            increase
          </Button>

          <Button pill color="yellow" size="lg" onClick={() => setCount(0)}>
            reset
          </Button>

          <Button pill color="red" size="lg" onClick={() => setCount(count - 1)}>
            decrease
          </Button>
        </div>
      </section>

      { /* DarkToggle */ }
      <section className="w-[320px] rounded-xl p-8 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <p className="mb-4 text-lg font-medium">theme toggle</p>

        <DarkThemeToggle></DarkThemeToggle>
        <p>dark current mode: {mode}</p>
      </section>

      { /* Show/Hide */ }
      <section className="flex flex-col justify-center items-center gap-10 rounded-xl p-10 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        {showText && 
        <Card href="#" className="max-w-sm">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>}

      <Button onClick={() => setShowText(!showText)}>
          {showText ? "Hide Text" : "Show Text"}  
      </Button>

      </section>

      { /* Character Count */ }
      <section className="flex flex-col justify-center items-center gap-2 rounded-xl px-10 py-5 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
          <p>you typed {charCount} characters </p>
          <p>{character}</p>
          <TextInput placeholder="type something to count" 
          onChange={(e) => handleCharacter(e.target.value)}
          ></TextInput>

      </section>

      { /* Image Slider */ }
      <section className="relative flex flex-col justify-center items-center gap-2 rounded-xl px-10 py-5 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
          
          <img src={images[index]} alt="images" />
          
          <div className="absolute bottom-36 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                index === i ? "bg-blue-600" : "bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>


          <p> the Carousel index is like an  Ouroboros</p>
          <p>index: {index}</p>
          <div className="flex justify-center items-center gap-5">
            <Button onClick={prev} >prev</Button>
            <Button onClick={next} >next</Button>
          </div>
      </section>

      { /* Currency Converter */ }
      <section className=" flex flex-col gap-3 w-[360px] rounded-xl p-8 shadow-2xl bg-white text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        
      <p>Option Value fromCurrency: {fromCurrency}</p>

      <div className="relative flex p-2">
        <TextInput type="number" onChange={(e) => setAmount(e.target.value)}></TextInput>
        <Select className="w-24 = absolute right-2"
        onChange={(e) => setfromCurrency(e.target.value) }
        >
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
      </div>


      <p>Option Value toCurrency: {toCurrency}</p>

      <div className="relative flex p-2">
        <TextInput type="number" readOnly value={convertedAmount}></TextInput>

        <Select className="w-24 = absolute right-2"
        onChange={(e) => setToCurrency(e.target.value) }
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
        </Select>
      </div>

      </section>


    </main>
  );
}