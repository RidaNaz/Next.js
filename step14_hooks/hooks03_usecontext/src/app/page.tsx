// Step 3: Consume Context Value

"use client"
import { useContext } from "react";
import { CountContext } from "./context";
import Link from "next/link"

export default function Home() {
  const obj = useContext(CountContext)
console.log (obj)
  return (
    <div>
      <h1>Context API</h1>
      <p><Link href="/test">Test</Link></p>
      <br />
      <p>{obj.count}</p>
      <div className="flex gap-10">
        <button onClick={() => obj.setCount(++obj.count)} className="bg-white text-black rounded-3xl px-5 py-3">Increment</button>
        <button onClick={() => obj.setCount(--obj.count)} className="bg-white text-black rounded-3xl px-5 py-3">Deccrement</button>
      </div>
    </div>
  )
}