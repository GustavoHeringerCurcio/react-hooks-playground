"use client";

import Link from "next/link";



export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center">
        <h2> Gustavo Curcio - personal repository for hooks Practices </h2>

        <h1 className="text-7xl  bg-gray-300 p-5 rounded-full drop-shadow-xl"><a target="blank" href="https://github.com/GustavoHeringerCurcio/react-hooks-playground">🔗react-hooks-playground</a>  </h1>
        
        <div className="flex flex-col justify-center items-center text-5xl mt-10 gap-10">
          <Link className="text-blue-600 underline" href="/usestate"> 🔷 UseState Practices.</Link>
          <Link className="text-blue-600 underline" href="/useffect"> 🔷 UseEffect Practices.</Link>
        </div>

    </main>
  );


  }
  