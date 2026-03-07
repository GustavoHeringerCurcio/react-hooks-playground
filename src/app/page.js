"use client";

import { use, useState } from "react";

//counter imports
import { Button } from "flowbite-react";

//toggle imports
import { useThemeMode, DarkThemeToggle, toggleSwitchTheme} from "flowbite-react"

//show/hide
import { Card } from "flowbite-react";

//text input characters lenght
import { TextInput } from "flowbite-react";

//carousel
import { Carousel } from "flowbite-react";



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
  
  //carousel test
  const images = [
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1024/800/400" 
  ];
  

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 py-20">
      { /* Counter */ }
      <section className="flex flex-col justify-center items-center gap-10 rounded-xl p-10 shadow-2xl bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
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
      <section className="w-[320px] rounded-xl p-8 shadow-2xl bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <p className="mb-4 text-lg font-medium">theme toggle</p>

        <DarkThemeToggle></DarkThemeToggle>
        <p>dark current mode: {mode}</p>
      </section>

        { /* Show/Hide */ }
        <section className="flex flex-col justify-center items-center gap-10 rounded-xl p-10 shadow-2xl bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
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
        <section className="flex flex-col justify-center items-center gap-2 rounded-xl px-10 py-5 shadow-2xl bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
            <p>you typed {charCount} characters </p>
            <p>{character}</p>
            <TextInput placeholder="type something to count" 
            onChange={(e) => handleCharacter(e.target.value)}
            ></TextInput>

        </section>

        { /* Image Slider */ }

<section>
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[600px]">
    <Carousel>
      <img src="/loki.png" alt="foto" className="w-full h-full object-cover" />
      <img src="/loki2.png" alt="foto2" className="w-full h-full object-cover" />
    </Carousel>
  </div>
</section> 
    </main>
  );
}