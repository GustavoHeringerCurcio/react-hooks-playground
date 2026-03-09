import { DarkThemeToggle } from "flowbite-react"
import Link from "next/link"

export default function SimpleNavBar() {

    return(
    <div className="flex justify-center items-center gap-2">
        <DarkThemeToggle className="border-2 border-black/20 dark:border-white transition-colors duration-300"></DarkThemeToggle>
        <Link className="text-blue-600 underline" href="/"> 🔷 Go Back.</Link>
    </div>
    )
}