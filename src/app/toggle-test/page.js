'use client'

import { DarkThemeToggle, useThemeMode, Card} from "flowbite-react";



export default function DarkToggle(){

    const { mode } = useThemeMode();

    return (
    <div className="flex flex-col items-center gap-4 bg-white dark:bg-gray-700">
        <DarkThemeToggle />
        <p>Current theme: {mode}</p>
    </div>
    )
}