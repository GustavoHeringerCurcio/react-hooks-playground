"use client";

import { useState } from "react";
import { Button, ToggleSwitch, useThemeMode, DarkThemeToggle } from "flowbite-react";

export default function Home() {
  const [count, setCount] = useState(0);
  const { mode, setMode } = useThemeMode();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
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

      <section className="w-[320px] rounded-xl p-8 shadow-2xl bg-gray-100 text-black dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <p className="mb-4 text-lg font-medium">theme toggle</p>

        <DarkThemeToggle>teste</DarkThemeToggle>

        <p className="mt-4">Current mode: {mode}</p>
      </section>
    </main>
  );
}