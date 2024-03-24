"use client"
import { useState } from "react"
import { Condition1 } from "./Condition.tsx/page";
import { Condition2 } from "./Condition.tsx/page";

export default function Home() {
  const [show, setShow] = useState(false)
  return (
    <>
      <h3>Conditional Rendering</h3>
      {
        show ? <Condition1 /> : <Condition2 />
      }
      <br />
      <button onClick={() => setShow(!show)}>Click</button>
    </>
  );
}
